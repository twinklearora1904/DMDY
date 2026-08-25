const Lead = require("../models/Lead");

const createLead = async (req, res) => {
    try {
        const { name, email, phone, company, website, service, message } = req.body;

        const lead = new Lead({
            name,
            email,
            phone,
            company,
            website,
            service,
            message,
        });

        const createdLead = await lead.save();
        res.status(201).json(createdLead);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const updateLeadStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const lead = await Lead.findById(req.params.id);

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
        const lead = await Lead.findById(req.params.id);

        if (lead) {
            await lead.deleteOne();
            res.json({ message: "Lead removed" });
        } else {
            res.status(404).json({ message: "Lead not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { createLead, getLeads, updateLeadStatus, deleteLead };
