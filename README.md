# DMDY (Digi Me Digi You) — 360° Digital Growth Engine

A full-stack, enterprise-grade web application and digital growth platform built for **DMDY (Digi Me Digi You)**. Engineered with modern React on the frontend and Express/MongoDB on the backend, featuring high-converting landing pages, lead management CRM, dynamic blog system, and automated transactional email delivery.

---

## 🏗️ Architecture Overview

```text
DMDY Full-Stack Monorepo
├── client/                 # Frontend: React 18 + Vite + Tailwind CSS
│   ├── public/             # Static assets, robots.txt, sitemap.xml
│   ├── src/
│   │   ├── assets/         # Optimized WebP service & industry assets
│   │   ├── components/     # Reusable UI components & skeletons
│   │   ├── config/         # Centralized site configurations & metadata
│   │   ├── context/        # Auth & modal global state management
│   │   ├── pages/          # 15+ Core & specialized service pages
│   │   └── utils/          # Axios API interceptor & client validation
│   └── vite.config.js      # Vite build pipeline & chunking config
│
└── server/                 # Backend: Node.js + Express 5 + MongoDB
    ├── config/             # DB connection (MongoDB) & Cloudinary setup
    ├── controllers/        # Lead CRM, auth, blog, and analytics handlers
    ├── middleware/         # Security headers (Helmet), CORS, rate limits
    ├── models/             # Mongoose schemas (User, Lead, Blog)
    ├── routes/             # RESTful API endpoints
    ├── seed/               # Initial admin seeder script
    ├── utils/              # Email dispatcher (Resend API + SMTP fallback), cache
    └── server.js           # Express app bootstrap & health checks
```

---

## ⚡ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite 8, Tailwind CSS, Lucide Icons, React Router 7 |
| **Backend** | Node.js, Express.js 5, Mongoose (MongoDB ODM), Helmet, CORS |
| **Database** | MongoDB Atlas (Cloud Managed Database) |
| **Media Storage** | Cloudinary (Cloud image optimization and storage) |
| **Email Delivery** | Resend (HTTPS API over Port 443) + Nodemailer (SMTP fallback) |
| **Hosting** | Vercel (Frontend: `digimedigiyou.com`) + Render (Backend: `onrender.com`) |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js >= 18.0.0
- MongoDB (Local community server or MongoDB Atlas URI)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/twinklearora1904/DMDY.git
cd DMDY
```

### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env
```

Configure your `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/dmdy
JWT_SECRET=your_jwt_secret_key_here
CLIENT_URL=http://localhost:5173
ADMIN_EMAIL=admin@dmdy.in
ADMIN_PASSWORD=your_secure_admin_password

# Email Service (Resend recommended for cloud, SMTP for local)
RESEND_API_KEY=re_your_resend_api_key
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@digimedigiyou.com
SMTP_PASS=your_email_password
EMAIL_FROM="DMDY Digital" <info@digimedigiyou.com>
NOTIFICATION_RECEIVER_EMAIL=info@digimedigiyou.com
```

Start the server:
```bash
# Seed initial admin account
npm run seed:admin

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
cp .env.example .env
```

Configure `client/.env`:
```env
VITE_API_URL=http://localhost:5000
```

Start the Vite dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔒 Security & Performance Features

- **Port Block Bypass via Resend**: Cloud platforms (like Render free tier) block outbound SMTP ports (25, 465, 587). The backend uses Resend's HTTPS REST API (Port 443) to guarantee instant, reliable delivery of client auto-replies and admin hot lead alerts.
- **Strict CORS & CSP**: Whitelisted origins including custom domain (`digimedigiyou.com`) and subdomains.
- **Granular Rate Limiting**: Dedicated rate limiters for authentication (`/api/auth/login`), lead submissions (`/api/leads`), and blog view counts to prevent spam and DoS.
- **XSS & Injection Protection**: HTML sanitization and URL validation on all outgoing emails and markdown blog rendering.
- **High Performance In-Memory Caching**: Bounded LRU-style cache with 1-hour TTL for blogs and public queries to reduce database load.

---

## 🚢 Production Deployment

### Frontend (Vercel)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variable**: `VITE_API_URL=https://dmdy-backend.onrender.com`

### Backend (Render)
- **Environment**: Node
- **Build Command**: `npm install --omit=dev`
- **Start Command**: `node server.js`
- **Environment Variables**: Configure all keys listed in `server/.env.example` in the Render Environment Variables tab.

---

## 📜 License
Private & Proprietary — Developed for DMDY (Digi Me Digi You).
