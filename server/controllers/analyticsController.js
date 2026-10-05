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

        // Consolidate Lead analytics into a single aggregation call using $facet
        const leadStats = await Lead.aggregate([
            {
                $facet: {
                    "totalCount": [
                        { $count: "count" }
                    ],
                    "statusCounts": [
                        {
                            $group: {
                                _id: "$status",
                                count: { $sum: 1 },
                            },
                        },
                    ],
                    "serviceBreakdown": [
                        {
                            $group: {
                                _id: { $ifNull: ["$service", "Other / Custom Consultation"] },
                                count: { $sum: 1 },
                            },
                        },
                        { $sort: { count: -1 } },
                    ],
                    "trend": [
                        {
                            $match: {
                                createdAt: {
                                    $gte: new Date(new Date().setDate(new Date().getDate() - 30))
                                },
                            },
                        },
                        {
                            $group: {
                                _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                                count: { $sum: 1 },
                            },
                        },
                        { $sort: { _id: 1 } },
                    ],
                    "recent": [
                        { $sort: { createdAt: -1 } },
                        { $limit: 5 },
                        { $project: { name: 1, email: 1, company: 1, service: 1, status: 1, createdAt: 1 } },
                    ]
                }
            }
        ]);

        const leadData = leadStats[0];
        const totalLeads = leadData.totalCount[0]?.count || 0;

        const statusCounts = {
            New: 0,
            Contacted: 0,
            Qualified: 0,
            Proposal: 0,
            Won: 0,
            Lost: 0,
        };

        (leadData.statusCounts || []).forEach((item) => {
            if (item._id && statusCounts.hasOwnProperty(item._id)) {
                statusCounts[item._id] = item.count;
            }
        });

        const wonCount = statusCounts.Won || 0;
        const lostCount = statusCounts.Lost || 0;
        const pipelineCount = (statusCounts.Contacted || 0) + (statusCounts.Qualified || 0) + (statusCounts.Proposal || 0);
        const conversionRate = totalLeads > 0 ? Number(((wonCount / totalLeads) * 100).toFixed(1)) : 0;
        const pipelineRate = totalLeads > 0 ? Number(((pipelineCount / totalLeads) * 100).toFixed(1)) : 0;

        const serviceBreakdown = (leadData.serviceBreakdown || []).map((item) => ({
            service: item._id,
            count: item.count,
            percentage: totalLeads > 0 ? Number(((item.count / totalLeads) * 100).toFixed(1)) : 0,
        }));

        // ----------------------------------------------------
        // 2. BLOG POPULARITY & AUTHORITY METRICS
        // ----------------------------------------------------

        // Consolidate Blog analytics into a single aggregation call using $facet
        const blogStats = await Blog.aggregate([
            {
                $facet: {
                    "totals": [
                        {
                            $group: {
                                _id: null,
                                published: { $sum: { $cond: [{ $eq: ["$isPublished", true] }, 1, 0] } },
                                drafts: { $sum: { $cond: [{ $eq: ["$isPublished", false] }, 1, 0] } },
                                totalViews: { $sum: { $ifNull: ["$views", 0] } },
                                avgViews: { $avg: { $ifNull: ["$views", 0] } },
                            }
                        }
                    ],
                    "topBlogs": [
                        { $match: { isPublished: true } },
                        { $sort: { views: -1, createdAt: -1 } },
                        { $limit: 5 },
                        { $project: { title: 1, slug: 1, views: 1, tags: 1, createdAt: 1, image: 1, author: 1 } }
                    ],
                    "popularTags": [
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
                    ]
                }
            }
        ]);

        const blogData = blogStats[0];
        const totals = blogData.totals[0] || { published: 0, drafts: 0, totalViews: 0, avgViews: 0 };

        // Since topBlogs in aggregate doesn't populate, we'll do one final clean-up for the authors
        const topBlogs = await Blog.find({
            _id: { $in: blogData.topBlogs.map(b => b._id) }
        }).populate("author", "name").sort({ views: -1 });

        const popularTags = (blogData.popularTags || []).map((t) => ({
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
                trend: leadData.trend || [],
                recent: leadData.recent || [],
            },
            blogs: {
                totalPublished: totals.published,
                totalDrafts: totals.drafts,
                totalViews: totals.totalViews,
                avgViews: Math.round(totals.avgViews),
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
