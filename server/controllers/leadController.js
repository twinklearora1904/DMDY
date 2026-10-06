const mongoose = require("mongoose");
const Lead = require("../models/Lead");
const { sendLeadNotification, sendLeadConfirmation } = require("../utils/emailService");

const VALID_STATUSES = ["New", "Contacted", "Qualified", "Proposal", "Won", "Lost"];

const createLead = async (req, res) => {
    try {
        const { name, email, phone, company, website, service, message } = req.body;

        // Auto-format website if given without protocol
        let normalizedWebsite = website ? website.trim() : "";
        if (normalizedWebsite && !/^https?:\/\//i.test(normalizedWebsite)) {
            normalizedWebsite = `https://${normalizedWebsite}`;
        }

        const lead = new Lead({
            name: name ? name.trim() : "",
            email: email ? email.trim().toLowerCase() : "",
            phone: phone ? phone.trim() : "",
            company: company ? company.trim() : "",
            website: normalizedWebsite,
            service: service ? service.trim() : "General Consultation",
            message: message ? message.trim() : "",
        });

        const createdLead = await lead.save();

        // Send non-blocking lead notification to Admin and instant Thank You auto-reply to Client
        Promise.allSettled([
            sendLeadNotification(createdLead),
            sendLeadConfirmation(createdLead),
        ]).catch((err) => {
            console.error("Non-blocking lead email notification error:", err.message);
        });

        res.status(201).json(createdLead);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getLeads = async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page, 10) || 1);
        const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
        const skip = (page - 1) * limit;

        const queryFilter = {};
        if (req.query.status && req.query.status !== "All" && VALID_STATUSES.includes(req.query.status)) {
            queryFilter.status = req.query.status;
        }

        if (req.query.search && typeof req.query.search === "string" && req.query.search.trim()) {
            const escaped = req.query.search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const searchRegex = new RegExp(escaped, "i");
            queryFilter.$or = [
                { name: searchRegex },
                { email: searchRegex },
                { company: searchRegex },
                { phone: searchRegex },
                { service: searchRegex },
            ];
        }

        const [leads, total, statusAggregation] = await Promise.all([
            Lead.find(queryFilter).sort({ createdAt: -1 }).skip(skip).limit(limit),
            Lead.countDocuments(queryFilter),
            Lead.aggregate([
                {
                    $group: {
                        _id: "$status",
                        count: { $sum: 1 },
                    },
                },
            ]),
        ]);

        const statusCounts = {
            New: 0,
            Contacted: 0,
            Qualified: 0,
            Proposal: 0,
            Won: 0,
            Lost: 0,
        };
        (statusAggregation || []).forEach((item) => {
            if (item._id && Object.prototype.hasOwnProperty.call(statusCounts, item._id)) {
                statusCounts[item._id] = item.count;
            }
        });

        res.json({
            leads,
            currentPage: page,
            totalPages: Math.ceil(total / limit) || 1,
            totalLeads: total,
            statusCounts,
            hasNextPage: page * limit < total,
            hasPrevPage: page > 1,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const updateLeadStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid lead ID format" });
        }

        if (!VALID_STATUSES.includes(status)) {
            return res.status(400).json({
                message: `Invalid status. Permitted values: ${VALID_STATUSES.join(", ")}`,
            });
        }

        const lead = await Lead.findById(id);

        if (lead) {
            lead.status = status;
            const updatedLead = await lead.save();
            res.json(updatedLead);
        } else {
            res.status(404).json({ message: "Lead not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteLead = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid lead ID format" });
        }

        const lead = await Lead.findById(id);

        if (lead) {
            await lead.deleteOne();
            res.json({ message: "Lead removed successfully" });
        } else {
            res.status(404).json({ message: "Lead not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const debugSmtp = async (req, res) => {
    try {
        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, RESEND_API_KEY, NOTIFICATION_RECEIVER_EMAIL } = process.env;

        const info = {
            hasResendKey: Boolean(RESEND_API_KEY),
            resendKeyPrefix: RESEND_API_KEY ? RESEND_API_KEY.substring(0, 5) + "..." : null,
            hasSmtpHost: Boolean(SMTP_HOST),
            smtpHost: SMTP_HOST,
            smtpPort: SMTP_PORT,
            smtpSecure: SMTP_SECURE,
            smtpUser: SMTP_USER,
            hasSmtpPass: Boolean(SMTP_PASS),
            notificationReceiver: NOTIFICATION_RECEIVER_EMAIL,
        };

        if (RESEND_API_KEY) {
            const { Resend } = require("resend");
            const resend = new Resend(RESEND_API_KEY);
            const { data, error } = await resend.emails.send({
                from: "DMDY Digital <onboarding@resend.dev>",
                to: [NOTIFICATION_RECEIVER_EMAIL || "info@digimedigiyou.com"],
                subject: "⚡ DMDY Resend Diagnostic Test",
                text: "Resend HTTPS API is working properly on Render!",
            });
            return res.json({
                status: "success",
                provider: "Resend (HTTPS Port 443)",
                details: info,
                resendResult: data,
                resendError: error || null,
            });
        }

        const { createTransporter } = require("../utils/emailService");
        const transporter = createTransporter();
        if (!transporter) {
            return res.status(500).json({
                status: "error",
                message: "No email service configured (neither RESEND_API_KEY nor SMTP credentials)",
                details: info,
            });
        }

        await new Promise((resolve, reject) => {
            transporter.verify((err, success) => {
                if (err) return reject(err);
                resolve(success);
            });
        });

        return res.json({
            status: "success",
            provider: "SMTP (Nodemailer)",
            message: "SMTP connection verified successfully!",
            details: info,
        });
    } catch (err) {
        return res.status(500).json({
            status: "error",
            provider: process.env.RESEND_API_KEY ? "Resend" : "SMTP",
            error: err.message,
            code: err.code || null,
            syscall: err.syscall || null,
            details: {
                smtpHost: process.env.SMTP_HOST,
                smtpPort: process.env.SMTP_PORT,
                smtpUser: process.env.SMTP_USER,
                hasSmtpPass: Boolean(process.env.SMTP_PASS),
                hasResendKey: Boolean(process.env.RESEND_API_KEY),
            },
        });
    }
};

module.exports = { createLead, getLeads, updateLeadStatus, deleteLead, debugSmtp };
