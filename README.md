# Irfan Mulla — Portfolio Website

> Personal MERN stack portfolio showcasing projects, skills, experience, and a working contact form with email delivery.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## About

Full-stack portfolio website of **Irfan Mulla**, a MERN Stack Developer from Sangli, Maharashtra, India. Built with a modern dark UI, smooth animations, and a Node.js backend for contact form emails, visitor tracking, and an admin dashboard.

## Features

- **Modern UI** — Dark theme, glassmorphism, gradient accents, and Framer Motion animations
- **Hero & About** — Professional summary, education, and social links
- **Skills & Experience** — Technical skills and leadership roles
- **Projects** — Featured MERN projects fetched from the backend API
- **Achievements** — Hackathon milestones and awards
- **Gallery & Resume** — Image gallery and downloadable resume preview
- **Contact Form** — Sends messages via Gmail SMTP (Nodemailer) and saves to MongoDB
- **Visitor Tracking** — Role-based popup on first visit with localStorage persistence
- **Admin Dashboard** — Visitor statistics at `/admin`

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React, Vite, Tailwind CSS 4, Framer Motion, Axios, React Router |
| **Backend** | Node.js, Express, Mongoose, Nodemailer |
| **Database** | MongoDB |
| **Tools** | Git, GitHub, Lucide React, React Icons |

## Project Structure

```
├── frontend/          # React + Vite + Tailwind CSS app
│   └── src/
│       ├── components/   # Hero, About, Skills, Projects, Contact, etc.
│       └── pages/        # Admin dashboard
├── backend/           # Express API server
│   ├── models/           # Contact, Visitor schemas
│   ├── routes/           # API routes
│   └── utils/            # Email service (Nodemailer)
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Gmail App Password (for contact form emails)

### 1. Clone the repository

```bash
git clone https://github.com/Irfan-Mulla-05/portfolio.git
cd portfolio
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
PORT=5000

# Gmail SMTP — create an App Password at https://myaccount.google.com/apppasswords
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
RECEIVER_EMAIL=your-email@gmail.com
```

Start the backend:

```bash
npm start
```

Server runs at `http://localhost:5000`

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Submit contact form (saves + sends email) |
| `POST` | `/api/visitor` | Log visitor info |
| `GET` | `/api/visitor` | Get visitor stats (admin) |
| `GET` | `/api/projects` | Get featured projects |

## Deployment Notes

- Replace hardcoded `http://localhost:5000` API URLs in frontend components with your production backend URL, or use a `VITE_API_URL` environment variable.
- Build the frontend for production:

```bash
cd frontend
npm run build
```

## Author

**Irfan Mulla** — MERN Stack Developer

- GitHub: [@Irfan-Mulla-05](https://github.com/Irfan-Mulla-05)
- LinkedIn: [irfan-mulla-ikm](https://linkedin.com/in/irfan-mulla-ikm)
- Email: irfankmulla05@gmail.com
- LeetCode: [irfan_5](https://leetcode.com/u/irfan_5/)

## License

This project is open source and available for personal use.
