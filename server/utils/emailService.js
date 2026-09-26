const nodemailer = require("nodemailer");

/**
 * Creates a nodemailer transporter if SMTP credentials are configured.
 * Returns null if SMTP is not configured.
 */
const createTransporter = () => {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        return null;
    }

    return nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10) || 587,
        secure: SMTP_SECURE === "true" || parseInt(SMTP_PORT, 10) === 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });
};

/**
 * Sends an email notification to the Admin when a new lead is submitted.
 * Non-blocking: will never crash the request if email sending fails.
 */
const sendLeadNotification = async (lead) => {
    try {
        const transporter = createTransporter();
        const adminEmail = process.env.NOTIFICATION_RECEIVER_EMAIL || process.env.ADMIN_EMAIL || "admin@dmdy.in";
        const fromEmail = process.env.EMAIL_FROM || `"DMDY Growth Engine" <${process.env.SMTP_USER || "leads@dmdy.in"}>`;

        if (!transporter) {
            console.log(`[EMAIL NOTIFICATION] (SMTP not configured) New lead received from ${lead.name} (${lead.email}) for service "${lead.service || 'General Inquiry'}"`);
            return;
        }

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
                .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
                .header { background: #0f172a; padding: 24px; text-align: center; }
                .header h1 { color: #f97316; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
                .header p { color: #94a3b8; margin: 4px 0 0 0; font-size: 13px; }
                .content { padding: 24px; }
                .badge { display: inline-block; background-color: #fff7ed; color: #ea580c; border: 1px solid #fed7aa; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 16px; }
                .field { margin-bottom: 14px; }
                .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700; margin-bottom: 4px; }
                .value { font-size: 15px; color: #0f172a; font-weight: 500; }
                .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-top: 8px; font-size: 14px; line-height: 1.5; color: #334155; }
                .cta-btn { display: inline-block; background-color: #ea580c; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin-top: 20px; text-align: center; }
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
                        <div class="value">${lead.name || 'N/A'}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email Address</div>
                        <div class="value"><a href="mailto:${lead.email}" style="color: #ea580c;">${lead.email || 'N/A'}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">Phone / WhatsApp</div>
                        <div class="value">${lead.phone || 'N/A'}</div>
                    </div>
                    <div class="field">
                        <div class="label">Company / Brand</div>
                        <div class="value">${lead.company || 'N/A'}</div>
                    </div>
                    <div class="field">
                        <div class="label">Current Website</div>
                        <div class="value">${lead.website ? `<a href="${lead.website}" target="_blank" style="color: #2563eb;">${lead.website}</a>` : 'N/A'}</div>
                    </div>
                    <div class="field">
                        <div class="label">Target Service</div>
                        <div class="value" style="font-weight: 700; color: #ea580c;">${lead.service || 'General Consultation'}</div>
                    </div>
                    <div class="field">
                        <div class="label">Project Brief / Message</div>
                        <div class="message-box">${lead.message ? lead.message.replace(/\n/g, '<br>') : 'No specific message provided.'}</div>
                    </div>
                    <div style="text-align: center;">
                        <a href="${process.env.CLIENT_URL || 'http://localhost:5173'}/admin" class="cta-btn">View in Admin CRM &rarr;</a>
                    </div>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} DMDY (Digi Me Digi You). All rights reserved.
                </div>
            </div>
        </body>
        </html>
        `;

        await transporter.sendMail({
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
};
