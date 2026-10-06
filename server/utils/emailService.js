const nodemailer = require("nodemailer");

/**
 * Safe HTML escaping helper to prevent HTML injection / XSS in emails
 */
const escapeHtml = (str) => {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

/**
 * Validates and sanitizes external URLs for email link hrefs
 */
const sanitizeUrl = (url) => {
    if (!url) return "";
    const clean = String(url).trim();
    if (/^https?:\/\//i.test(clean)) {
        return escapeHtml(clean);
    }
    return "";
};

/**
 * Creates a nodemailer transporter if SMTP credentials are configured.
 * Supports GoDaddy (Office 365, Secureserver, Titan) or standard SMTP.
 * Returns null if SMTP is not configured.
 */
const createTransporter = () => {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        return null;
    }

    const port = parseInt(SMTP_PORT, 10) || 587;
    const isSecure = SMTP_SECURE === "true" || port === 465;

    return nodemailer.createTransport({
        host: SMTP_HOST,
        port: port,
        secure: isSecure,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false, // Prevents self-signed cert blocks on custom mail hosts
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
    });
};

/**
 * Universal email dispatcher:
 * 1. Uses Resend (HTTPS API on Port 443) when RESEND_API_KEY is provided
 *    (Bypasses Render/cloud SMTP port 25/465/587 blocks completely).
 * 2. Falls back to Nodemailer SMTP when RESEND_API_KEY is not set.
 */
const dispatchEmail = async ({ to, subject, html, text, from }) => {
    // Mode 1: Resend HTTPS API (Port 443 - zero firewall blocks on Render / Vercel / Heroku)
    if (process.env.RESEND_API_KEY) {
        const { Resend } = require("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        const sender = from || process.env.EMAIL_FROM || "DMDY Digital <info@digimedigiyou.com>";
        const cleanFrom = sender.replace(/^"|"$/g, '').trim();

        const { data, error } = await resend.emails.send({
            from: cleanFrom,
            to: Array.isArray(to) ? to : [to],
            subject,
            html,
            text,
        });

        if (error) {
            throw new Error(`Resend API Error: ${error.message || JSON.stringify(error)}`);
        }
        return data;
    }

    // Mode 2: Standard Nodemailer SMTP
    const transporter = createTransporter();
    if (!transporter) {
        console.log(`[EMAIL DISPATCH SKIPPED] Neither RESEND_API_KEY nor SMTP credentials configured.`);
        return null;
    }

    const defaultFrom = process.env.EMAIL_FROM || `"DMDY Digital" <${process.env.SMTP_USER || "info@digimedigiyou.com"}>`;
    return await transporter.sendMail({
        from: from || defaultFrom,
        to,
        subject,
        html,
        text,
    });
};

/**
 * 1. Client Confirmation / Auto-Reply Email
 * Sends a welcome/confirmation email to the person who submitted the contact form.
 */
const sendLeadConfirmation = async (lead) => {
    try {
        if (!lead.email) return;

        const fromEmail = process.env.EMAIL_FROM || `"DMDY Digital" <${process.env.SMTP_USER || "info@digimedigiyou.com"}>`;

        const clientName = escapeHtml(lead.name || "there");
        const serviceName = escapeHtml(lead.service || "Digital Growth Consultation");
        const websiteUrl = process.env.CLIENT_URL || "https://www.digimedigiyou.com";
        const safeCompany = escapeHtml(lead.company);
        const safePhone = escapeHtml(lead.phone);
        const safeWebsite = sanitizeUrl(lead.website);

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>We Received Your Inquiry — DMDY</title>
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b1120; margin: 0; padding: 24px 12px; color: #334155; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
                .header { background: #020617; padding: 32px 24px; text-align: center; border-bottom: 2px solid #1e293b; }
                .brand { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; margin: 0; }
                .brand-dmdy { color: #00AED6; }
                .brand-gradient { background: linear-gradient(90deg, #00AED6, #E6007A, #F5A623); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .tagline { color: #94a3b8; font-size: 13px; margin: 6px 0 0; font-weight: 500; }
                .content { padding: 32px 28px; line-height: 1.6; }
                .greeting { font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
                .lead-p { font-size: 15px; color: #475569; margin-bottom: 20px; line-height: 1.6; }
                .summary-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 24px 0; }
                .summary-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700; margin-bottom: 14px; }
                .summary-row { margin-bottom: 10px; font-size: 14px; }
                .summary-label { color: #64748b; font-weight: 600; width: 130px; display: inline-block; }
                .summary-value { color: #0f172a; font-weight: 600; }
                .steps-card { background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; padding: 18px 20px; margin: 24px 0; }
                .steps-title { font-size: 13px; font-weight: 700; color: #065f46; margin-bottom: 6px; }
                .steps-text { font-size: 13px; color: #047857; margin: 0; line-height: 1.5; }
                .btn-container { text-align: center; margin: 30px 0 10px; }
                .btn { display: inline-block; background: linear-gradient(90deg, #00AED6, #E6007A); color: #ffffff !important; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 700; font-size: 14px; }
                .footer { background: #f1f5f9; padding: 20px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
                .footer a { color: #00AED6; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1 class="brand">
                        <span class="brand-gradient">DMDY</span>
                        <span style="color: #ffffff; font-size: 18px; font-weight: 600; margin-left: 6px;">Digi Me Digi You</span>
                    </h1>
                    <p class="tagline">360° Digital Growth Partner & Performance Marketing</p>
                </div>
                
                <div class="content">
                    <div class="greeting">Hi ${clientName},</div>
                    <p class="lead-p">
                        Thank you for reaching out to <strong>DMDY (Digi Me Digi You)</strong>! We have successfully received your inquiry regarding <strong>${serviceName}</strong>.
                    </p>

                    <div class="summary-card">
                        <div class="summary-title">Inquiry Summary</div>
                        <div class="summary-row">
                            <span class="summary-label">Target Service:</span>
                            <span class="summary-value" style="color: #00AED6;">${serviceName}</span>
                        </div>
                        ${safeCompany ? `
                        <div class="summary-row">
                            <span class="summary-label">Company / Brand:</span>
                            <span class="summary-value">${safeCompany}</span>
                        </div>` : ''}
                        ${safePhone ? `
                        <div class="summary-row">
                            <span class="summary-label">Phone:</span>
                            <span class="summary-value">${safePhone}</span>
                        </div>` : ''}
                        ${safeWebsite ? `
                        <div class="summary-row">
                            <span class="summary-label">Website:</span>
                            <span class="summary-value"><a href="${safeWebsite}" target="_blank" style="color: #00AED6;">${safeWebsite}</a></span>
                        </div>` : ''}
                    </div>

                    <div class="steps-card">
                        <div class="steps-title">What Happens Next?</div>
                        <p class="steps-text">
                            Our growth strategists are reviewing your requirements. We will analyze your digital footprint and get back to you within <strong>24 business hours</strong> with actionable insights and next steps.
                        </p>
                    </div>

                    <p style="font-size: 14px; color: #475569; margin-top: 20px;">
                        Need to discuss urgently? You can directly reply to this email (<a href="mailto:info@digimedigiyou.com" style="color: #00AED6; font-weight: 600;">info@digimedigiyou.com</a>) or connect with us on WhatsApp.
                    </p>

                    <div class="btn-container">
                        <a href="${escapeHtml(websiteUrl)}" class="btn" target="_blank">Visit Our Website &rarr;</a>
                    </div>
                </div>

                <div class="footer">
                    <div><strong>DMDY (Digi Me Digi You)</strong> &bull; Delhi NCR, India &bull; Global Operations</div>
                    <div style="margin-top: 6px;">
                        <a href="${escapeHtml(websiteUrl)}">digimedigiyou.com</a> &bull; 
                        <a href="mailto:info@digimedigiyou.com">info@digimedigiyou.com</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;

        await dispatchEmail({
            from: fromEmail,
            to: lead.email,
            subject: `Thank you for contacting DMDY — Inquiry Received! 🚀`,
            html: htmlContent,
            text: `Hi ${lead.name || "there"},\n\nThank you for reaching out to DMDY (Digi Me Digi You)!\n\nWe have received your inquiry for ${lead.service || "Digital Growth Consultation"}. Our team will review your requirements and reach out to you within 24 business hours.\n\nBest regards,\nDMDY Team\ninfo@digimedigiyou.com\nhttps://www.digimedigiyou.com`,
        });

        console.log(`[CLIENT AUTO-REPLY] Confirmation email successfully sent to client: ${lead.email}`);
    } catch (error) {
        console.error(`[CLIENT AUTO-REPLY ERROR] Failed to send email to client:`, error.message);
    }
};

/**
 * 2. Admin Notification Email
 * Sends an email notification to the Admin whenever a new lead is submitted.
 */
const sendLeadNotification = async (lead) => {
    try {
        const adminEmail = process.env.NOTIFICATION_RECEIVER_EMAIL || process.env.ADMIN_EMAIL || "info@digimedigiyou.com";
        const fromEmail = process.env.EMAIL_FROM || `"DMDY Lead Alert" <${process.env.SMTP_USER || "info@digimedigiyou.com"}>`;

        const safeName = escapeHtml(lead.name || 'N/A');
        const safeEmail = escapeHtml(lead.email || 'N/A');
        const safePhone = escapeHtml(lead.phone || 'N/A');
        const safeCompany = escapeHtml(lead.company || 'N/A');
        const safeService = escapeHtml(lead.service || 'General Consultation');
        const safeWebsite = sanitizeUrl(lead.website);
        const safeMessage = lead.message ? escapeHtml(lead.message).replace(/\n/g, '<br>') : 'No specific message provided.';
        const clientUrl = escapeHtml(process.env.CLIENT_URL || 'https://www.digimedigiyou.com');

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
                .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
                .header { background: #0f172a; padding: 24px; text-align: center; }
                .header h1 { color: #00AED6; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
                .header p { color: #94a3b8; margin: 4px 0 0 0; font-size: 13px; }
                .content { padding: 24px; }
                .badge { display: inline-block; background-color: #ecfeff; color: #00AED6; border: 1px solid #a5f3fc; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 16px; }
                .field { margin-bottom: 14px; }
                .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700; margin-bottom: 4px; }
                .value { font-size: 15px; color: #0f172a; font-weight: 500; }
                .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-top: 8px; font-size: 14px; line-height: 1.5; color: #334155; }
                .cta-btn { display: inline-block; background: linear-gradient(90deg, #00AED6, #E6007A); color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin-top: 20px; text-align: center; }
                .footer { padding: 16px 24px; background: #f1f5f9; text-align: center; font-size: 12px; color: #64748b; }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="header">
                    <h1>DMDY Growth Engine</h1>
                    <p>New Inbound Client Lead Captured</p>
                </div>
                <div class="content">
                    <span class="badge">🚀 Hot Lead Alert</span>
                    <div class="field">
                        <div class="label">Full Name</div>
                        <div class="value">${safeName}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email Address</div>
                        <div class="value"><a href="mailto:${safeEmail}" style="color: #00AED6;">${safeEmail}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">Phone / WhatsApp</div>
                        <div class="value">${safePhone}</div>
                    </div>
                    <div class="field">
                        <div class="label">Company / Brand</div>
                        <div class="value">${safeCompany}</div>
                    </div>
                    <div class="field">
                        <div class="label">Current Website</div>
                        <div class="value">${safeWebsite ? `<a href="${safeWebsite}" target="_blank" style="color: #2563eb;">${safeWebsite}</a>` : 'N/A'}</div>
                    </div>
                    <div class="field">
                        <div class="label">Target Service</div>
                        <div class="value" style="font-weight: 700; color: #E6007A;">${safeService}</div>
                    </div>
                    <div class="field">
                        <div class="label">Project Brief / Message</div>
                        <div class="message-box">${safeMessage}</div>
                    </div>
                    <div style="text-align: center;">
                        <a href="${clientUrl}/admin" class="cta-btn">View in Admin CRM &rarr;</a>
                    </div>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} DMDY (Digi Me Digi You). All rights reserved.
                </div>
            </div>
        </body>
        </html>
        `;

        await dispatchEmail({
            from: fromEmail,
            to: adminEmail,
            subject: `⚡ New DMDY Lead: ${lead.name} (${lead.service || "Growth Consultation"})`,
            html: htmlContent,
            text: `New Lead Captured!\n\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone || 'N/A'}\nCompany: ${lead.company || 'N/A'}\nService: ${lead.service || 'N/A'}\nMessage: ${lead.message || 'N/A'}`,
        });

        console.log(`[EMAIL NOTIFICATION] Alert successfully sent to ${adminEmail} for lead ${lead.email}`);
    } catch (error) {
        console.error(`[EMAIL NOTIFICATION ERROR] Failed to send email alert:`, error.message);
    }
};

module.exports = {
    sendLeadNotification,
    sendLeadConfirmation,
};

