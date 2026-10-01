const Lead = require("../models/Lead");
const Blog = require("../models/Blog");

/**
 * Executive Lead & Blog Analytics Dashboard Metrics
 * Authenticated for Admins
 */
const getDashboardAnalytics = async (req, res) => {
    try {
        // ----------------------------------------------------
        // 1. LEADS METRICS & CONVERSION PIPELINE
        // ----------------------------------------------------
        const totalLeads = await Lead.countDocuments({});

        // Status counts
        const leadsByStatusRaw = await Lead.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 },
                },
            },
        ]);

        const statusCounts = {
            New: 0,
            Contacted: 0,
            Qualified: 0,
            Proposal: 0,
            Won: 0,
            Lost: 0,
        };

        leadsByStatusRaw.forEach((item) => {
            if (item._id && statusCounts.hasOwnProperty(item._id)) {
                statusCounts[item._id] = item.count;
            }
        });

        // Conversion Rate Calculation
        const wonCount = statusCounts.Won || 0;
        const lostCount = statusCounts.Lost || 0;
        const pipelineCount = (statusCounts.Contacted || 0) + (statusCounts.Qualified || 0) + (statusCounts.Proposal || 0);
        const conversionRate = totalLeads > 0 ? Number(((wonCount / totalLeads) * 100).toFixed(1)) : 0;
        const pipelineRate = totalLeads > 0 ? Number(((pipelineCount / totalLeads) * 100).toFixed(1)) : 0;

        // Breakdown by Service
        const leadsByServiceRaw = await Lead.aggregate([
            {
                $group: {
                    _id: { $ifNull: ["$service", "Other / Custom Consultation"] },
                    count: { $sum: 1 },
                },
            },
            { $sort: { count: -1 } },
        ]);

        const serviceBreakdown = leadsByServiceRaw.map((item) => ({
            service: item._id,
            count: item.count,
            percentage: totalLeads > 0 ? Number(((item.count / totalLeads) * 100).toFixed(1)) : 0,
        }));

        // Lead Trend: Last 30 Days Activity
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const leadTrendRaw = await Lead.aggregate([
            {
                $match: {
                    createdAt: { $gte: thirtyDaysAgo },
                },
            },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    count: { $sum: 1 },
                },
            },
            { $sort: { _id: 1 } },
        ]);

        // Recent 5 leads
        const recentLeads = await Lead.find({})
            .sort({ createdAt: -1 })
            .limit(5)
            .select("name email company service status createdAt");

        // ----------------------------------------------------
        // 2. BLOG POPULARITY & AUTHORITY METRICS
        // ----------------------------------------------------
        const totalPublishedBlogs = await Blog.countDocuments({ isPublished: true });
        const totalDraftBlogs = await Blog.countDocuments({ isPublished: false });

        // Total views aggregation
        const viewStats = await Blog.aggregate([
            { $match: { isPublished: true } },
            {
                $group: {
                    _id: null,
                    totalViews: { $sum: { $ifNull: ["$views", 0] } },
                    avgViews: { $avg: { $ifNull: ["$views", 0] } },
                },
            },
        ]);

        const totalViews = viewStats.length > 0 ? viewStats[0].totalViews : 0;
        const avgViews = viewStats.length > 0 ? Math.round(viewStats[0].avgViews) : 0;

        // Top 5 most viewed blogs
        const topBlogs = await Blog.find({ isPublished: true })
            .sort({ views: -1, createdAt: -1 })
            .limit(5)
            .select("title slug views tags createdAt image")
            .populate("author", "name");

        // Tag distribution
        const tagAggregation = await Blog.aggregate([
            { $match: { isPublished: true } },
            { $unwind: "$tags" },
            {
                $group: {
                    _id: "$tags",
                    count: { $sum: 1 },
                    views: { $sum: { $ifNull: ["$views", 0] } },
                },
            },
            { $sort: { views: -1, count: -1 } },
            { $limit: 8 },
        ]);

        const popularTags = tagAggregation.map((t) => ({
            tag: t._id,
            articleCount: t.count,
            totalViews: t.views,
        }));

        res.json({
            leads: {
                total: totalLeads,
                statusCounts,
                conversionRate,
                pipelineRate,
                wonCount,
                lostCount,
                pipelineCount,
                serviceBreakdown,
                trend: leadTrendRaw,
                recent: recentLeads,
            },
            blogs: {
                totalPublished: totalPublishedBlogs,
                totalDrafts: totalDraftBlogs,
                totalViews,
                avgViews,
                topBlogs,
                popularTags,
            },
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        console.error("Dashboard Analytics Error:", error);
        res.status(500).json({ message: "Failed to generate analytics dashboard", error: error.message });
    }
};

module.exports = { getDashboardAnalytics };
