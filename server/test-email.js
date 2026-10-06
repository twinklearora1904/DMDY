require("dotenv").config();
const nodemailer = require("nodemailer");

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

console.log("\n=================================");
console.log("   DMDY SMTP DIAGNOSTIC TEST     ");
console.log("=================================");
console.log("Host:   ", SMTP_HOST);
console.log("Port:   ", SMTP_PORT);
console.log("Secure: ", SMTP_SECURE);
console.log("User:   ", SMTP_USER);
console.log("Password:", SMTP_PASS ? (SMTP_PASS === "Aapka_Email_Password" ? "⚠️ STILL DEFAULT PLACEHOLDER!" : "****** (Set)") : "❌ EMPTY");
console.log("=================================\n");

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || SMTP_PASS === "Aapka_Email_Password") {
    console.error("❌ ERROR: SMTP credentials in server/.env are not set properly!");
    console.error("Please set your real email and password in server/.env\n");
    process.exit(1);
}

const port = parseInt(SMTP_PORT, 10) || 465;
const isSecure = SMTP_SECURE === "true" || port === 465;

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: port,
    secure: isSecure,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

console.log("Connecting to mail server...");
transporter.verify((error, success) => {
    if (error) {
        console.error("\n❌ SMTP CONNECTION FAILED:");
        console.error(error.message);
        console.error("\nPossible Causes:");
        console.error("1. Incorrect SMTP_HOST or SMTP_PORT");
        console.error("2. Incorrect password for " + SMTP_USER);
        console.error("3. If using GoDaddy, try host: smtpout.secureserver.net with port 465 (secure=true) or port 587 (secure=false)");
    } else {
        console.log("\n✅ SUCCESS! SMTP server is authenticated and ready to send emails!");
    }
});
