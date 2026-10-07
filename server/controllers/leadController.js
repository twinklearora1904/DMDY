const mongoose = require("mongoose");
const leadService = require("../services/leadService");

const createLead = async (req, res) => {
    try {
        const createdLead = await leadService.createLead(req.body);
        res.status(201).json(createdLead);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getLeads = async (req, res) => {
    try {
        const result = await leadService.getLeads(req.query);
        res.json(result);
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

        const updatedLead = await leadService.updateLeadStatus(id, status);
        res.json(updatedLead);
    } catch (error) {
        if (error.message.includes("Invalid status")) {
            return res.status(400).json({ message: error.message });
        }
        if (error.message === "Lead not found") {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteLead = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid lead ID format" });
        }

        const result = await leadService.deleteLead(id);
        res.json(result);
    } catch (error) {
        if (error.message === "Lead not found") {
            return res.status(404).json({ message: error.message });
        }
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
