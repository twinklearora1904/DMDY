const sitemap = async (req, res) => {
    try {
        const Blog = require("../models/Blog");
        const blogs = await Blog.find({ isPublished: true }).select("slug");

        const staticPages = [
            "",
            "/services",
            "/about",
            "/industries",
            "/pricing",
            "/contact",
            "/privacy-policy",
            "/terms",
        ];

        const baseUrl = (process.env.CLIENT_URL || "https://www.digimedigiyou.com").split(",")[0].trim().replace(/\/$/, "");

        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

        staticPages.forEach(page => {
            xml += `
            <url>
                <loc>${baseUrl}${page}</loc>
                <changefreq>weekly</changefreq>
                <priority>${page === "" ? "1.0" : "0.8"}</priority>
            </url>`;
        });

        blogs.forEach(blog => {
            xml += `
            <url>
                <loc>${baseUrl}/blog/${blog.slug}</loc>
                <changefreq>monthly</changefreq>
                <priority>0.6</priority>
            </url>`;
        });

        xml += `\n</urlset>`;

        res.set("Content-Type", "text/xml");
        res.send(xml);
    } catch (error) {
        console.error("[Sitemap] Error generating sitemap:", error);
        res.status(500).send("Error generating sitemap");
    }
};

const robotsTxt = async (req, res) => {
    const baseUrl = (process.env.CLIENT_URL || "https://www.digimedigiyou.com").split(",")[0].trim().replace(/\/$/, "");
    const content = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/login

Sitemap: ${baseUrl}/sitemap.xml`;

    res.set("Content-Type", "text/plain");
    res.send(content);
};

module.exports = { sitemap, robotsTxt };
