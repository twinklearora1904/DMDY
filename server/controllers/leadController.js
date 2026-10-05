const mongoose = require("mongoose");
const Lead = require("../models/Lead");
const { sendLeadNotification } = require("../utils/emailService");

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

        // Send non-blocking lead notification
        sendLeadNotification(createdLead).catch((err) => {
            console.error("Non-blocking lead email notification error:", err.message);
        });

        res.status(201).json(createdLead);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getLeads = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const [leads, total] = await Promise.all([
            Lead.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit),
            Lead.countDocuments({}),
        ]);

        res.json({
            leads,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalLeads: total,
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

module.exports = { createLead, getLeads, updateLeadStatus, deleteLead };
