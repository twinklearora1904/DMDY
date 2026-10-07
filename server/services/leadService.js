const Lead = require("../models/Lead");
const { sendLeadNotification, sendLeadConfirmation } = require("../utils/emailService");

const VALID_STATUSES = ["New", "Contacted", "Qualified", "Proposal", "Won", "Lost"];

const createLead = async (leadData) => {
    const { name, email, phone, company, website, service, message } = leadData;

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
    ]).then((results) => {
        results.forEach((result, index) => {
            if (result.status === 'rejected') {
                console.error(`Lead email failure [${index === 0 ? 'Admin Notification' : 'Client Confirmation'}]:`, result.reason);
            }
        });
    });

    return createdLead;
};

const getLeads = async (params) => {
    const { page = 1, limit = 20, status = "All", search = "" } = params;
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    const queryFilter = {};
    if (status !== "All" && VALID_STATUSES.includes(status)) {
        queryFilter.status = status;
    }

    if (search && typeof search === "string" && search.trim()) {
        const escaped = search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
        Lead.find(queryFilter).sort({ createdAt: -1 }).skip(skip).limit(limitNum),
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

    return {
        leads,
        currentPage: pageNum,
        totalPages: Math.ceil(total / limitNum) || 1,
        totalLeads: total,
        statusCounts,
        hasNextPage: pageNum * limitNum < total,
        hasPrevPage: pageNum > 1,
    };
};

const updateLeadStatus = async (id, status) => {
    if (!VALID_STATUSES.includes(status)) {
        throw new Error(`Invalid status. Permitted values: ${VALID_STATUSES.join(", ")}`);
    }

    const lead = await Lead.findById(id);
    if (!lead) throw new Error("Lead not found");

    lead.status = status;
    return await lead.save();
};

const deleteLead = async (id) => {
    const lead = await Lead.findById(id);
    if (!lead) throw new Error("Lead not found");

    await lead.deleteOne();
    return { message: "Lead removed successfully" };
};

module.exports = {
    createLead,
    getLeads,
    updateLeadStatus,
    deleteLead,
    VALID_STATUSES
};
