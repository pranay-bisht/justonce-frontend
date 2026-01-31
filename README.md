# JustOnce

JustOnce is a minimal web application designed to create a pause between impulse and action.

It is not therapy, not treatment, and not a replacement for professional help.  
The project focuses on awareness, restraint, and ethical design.

---

## 🌱 What JustOnce Does

- Collects emails from users who voluntarily opt in
- Stores emails securely in a PostgreSQL database
- Sends **occasional, opt-in newsletters** designed as quiet reflections
- Avoids tracking, profiling, or behavioral manipulation
- Uses automation responsibly and transparently

The goal is not to tell users what to do — only to slow the moment.

---

## ⚠️ Important Disclaimer

**JustOnce is not therapy and does not replace professional help.**  
If gambling is causing significant distress or harm, speaking with a qualified mental health professional can be valuable.

We offer occasional newsletters — quiet thoughts designed to slow things down, not tell users what to do.

---

## 🧠 Design Philosophy

JustOnce is intentionally limited.

- No daily emails
- No behavior tracking
- No personalization based on activity
- No motivational or coaching language
- No urgency or pressure

Every design choice favors restraint over engagement.

---

## 🏗️ Tech Stack

### Frontend
- React (Create React App)
- Deployed on Vercel

### Backend
- Spring Boot (Java)
- REST API
- Deployed on Render

### Database
- PostgreSQL (Render managed database)

### Email System
- Automated scheduling via backend
- Email provider integration (e.g. Resend / SendGrid)
- Clear unsubscribe boundaries

### AI (Optional / Planned)
- AI-generated reflections
- Strict prompt constraints
- One shared message per batch (no per-user targeting)
- Manual review before full automation

---

## 🔁 System Architecture
