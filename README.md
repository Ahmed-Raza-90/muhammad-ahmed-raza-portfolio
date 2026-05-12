<div align="center">

<!-- ─── PROFILE PICTURE ─────────────────────────────── -->
<img src="images/profile.jpg" alt="Muhammad Ahmed Raza" width="140" style="border-radius:50%;border:4px solid #6c63ff;" />

<br /><br />

<!-- ─── TITLE ─────────────────────────────────────────── -->
# 🌐 Muhammad Ahmed Raza
### Full-Stack Enthusiast · Frontend Developer · CS Student

<br />

<!-- ─── LIVE DEMO BADGE ────────────────────────────────── -->
[![🚀 Live Portfolio](https://img.shields.io/badge/🚀%20Live%20Portfolio-Visit%20Now-6c63ff?style=for-the-badge&logo=vercel&logoColor=white)](https://mahmedraza-portfolio.netlify.app/)

<br />

<!-- ─── SOCIAL BADGES ──────────────────────────────────── -->
[![GitHub](https://img.shields.io/badge/GitHub-Ahmed--Raza--90-181717?style=for-the-badge&logo=github)](https://github.com/Ahmed-Raza-90)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Muhammad%20Ahmed%20Raza-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/muhammad-ahmed-raza-51955833b/)
[![Gmail](https://img.shields.io/badge/Email-mahmedraza9029%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mahmedraza9029@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat%20Now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/923183200596)

<br />

<!-- ─── TECH STACK BADGES ───────────────────────────────── -->
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6B35?style=flat-square&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white)

</div>

---

## 📖 About This Project

A **fully responsive personal portfolio website** built from scratch using only **HTML, CSS & JavaScript** — no frameworks, no build tools. It showcases my skills, projects, education, and contact details with modern design elements like theme toggling, animated counters, typing effects, and Firebase-powered contact form.

---

## ✨ Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | 🎨 **Dark / Light Theme** | Toggle anytime — preference saved in `localStorage` |
| 2 | ⌨️ **Typing Animation** | Auto-typing roles using **Typed.js** |
| 3 | 🎞️ **Scroll Animations** | Smooth section reveals via **ScrollReveal** |
| 4 | 📊 **Animated Counters** | Stats count-up when scrolled into view |
| 5 | 📱 **Fully Responsive** | Mobile-first — works on all screen sizes |
| 6 | 📩 **Contact Form** | Email via **EmailJS** + saved to **Firebase Firestore** |
| 7 | 💬 **WhatsApp Button** | Floating direct-chat button |
| 8 | 📝 **Download CV** | One-click CV/resume PDF download |
| 9 | 🔝 **Back to Top** | Smooth scroll-to-top button |
| 10 | ⏳ **Loading Screen** | Spinner animation on first page load |

---

## 📂 Project Structure

```
📁 muhammad-ahmed-raza-portfolio/
│
├── 📄 index.html              → Main HTML (all sections in one page)
├── 🎨 style.css               → All styles (themes, animations, responsive)
├── ⚙️  script.js               → All JS logic (form, counters, animations)
├── 🔒 firebase-config.js      → Firebase & EmailJS keys  ← GIT IGNORED
│
├── 📁 cv/
│   └── Ahmed_Raza_CV.pdf      → Your resume (place PDF here)
│
├── 📁 images/
│   ├── profile.jpg            → Hero section photo
│   └── about.jpg              → About section photo
│
├── 🚫 .gitignore              → Protects credentials & junk files
└── 📖 README.md               → This file
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ahmed-Raza-90/muhammad-ahmed-raza-portfolio.git
cd muhammad-ahmed-raza-portfolio
```

### 2️⃣ Create `firebase-config.js` (Required — not included in repo)

```bash
# Windows PowerShell
New-Item firebase-config.js

# macOS / Linux
touch firebase-config.js
```

Paste this template and fill in your own credentials:

```javascript
/* firebase-config.js — DO NOT COMMIT THIS FILE */

const FIREBASE_CONFIG = {
    apiKey:            "YOUR_FIREBASE_API_KEY",
    authDomain:        "YOUR_PROJECT.firebaseapp.com",
    projectId:         "YOUR_PROJECT_ID",
    storageBucket:     "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId:             "YOUR_APP_ID"
};

const EMAILJS_CONFIG = {
    publicKey:   "YOUR_EMAILJS_PUBLIC_KEY",
    serviceId:   "YOUR_EMAILJS_SERVICE_ID",
    templateId:  "YOUR_EMAILJS_TEMPLATE_ID"
};

const USE_FIREBASE = true;
const USE_EMAILJS  = true;
```

> 🔑 Get Firebase keys → [console.firebase.google.com](https://console.firebase.google.com)  
> 🔑 Get EmailJS keys → [emailjs.com](https://www.emailjs.com)

### 3️⃣ Add Your CV

```
cv/
└── Ahmed_Raza_CV.pdf   ← Place your resume PDF here
```

### 4️⃣ Open in Browser

No server needed! Simply open `index.html` in any browser, or use the **Live Server** extension in VS Code for hot-reload.

---

## 📄 How CV Download Works

When a visitor clicks **"Download CV"**, the browser auto-downloads `cv/Ahmed_Raza_CV.pdf`.

**Steps:**
1. Export resume as **PDF**
2. Name it `Ahmed_Raza_CV.pdf`
3. Drop it in the `cv/` folder
4. Push to GitHub → works on live site automatically ✅

---

## 🌍 Deployment Options

| Platform | How to Deploy | Free? |
|----------|--------------|-------|
| **GitHub Pages** | Repo → Settings → Pages → `main` branch | ✅ Free |
| **Netlify** | Drag & drop folder at [app.netlify.com](https://app.netlify.com) | ✅ Free |
| **Vercel** | Import GitHub repo at [vercel.com](https://vercel.com) | ✅ Free |

> 💡 After deploying, update the **Live Portfolio** badge at the top of this README with your actual URL.

---

## 🔐 Security

| File | Status | Reason |
|------|--------|--------|
| `firebase-config.js` | 🚫 Git-ignored | Contains Firebase API keys & EmailJS credentials |
| `.env` / `*.env` | 🚫 Git-ignored | Environment secrets protection |

> ⚠️ **Never push API keys to a public repository.** Run `git status` before every push to verify.

---

## 📚 Libraries & Credits

| Library | Version | Purpose |
|---------|---------|---------|
| [Typed.js](https://github.com/mattboldt/typed.js/) | 2.x | Typing animation in hero section |
| [ScrollReveal](https://scrollrevealjs.org/) | 4.x | Scroll-triggered reveal animations |
| [Firebase SDK (Compat)](https://firebase.google.com/docs/web/setup) | 9.x | Firestore — store contact messages |
| [EmailJS](https://www.emailjs.com/) | 3.x | Send emails from frontend (no backend) |
| [Font Awesome](https://fontawesome.com/) | 6.x | Icons throughout the site |
| [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | — | Modern, clean typography |

---

## 📬 Contact Me

<div align="center">

| 📧 Email | 💼 LinkedIn | 🐙 GitHub | 💬 WhatsApp |
|----------|------------|----------|------------|
| [mahmedraza9029@gmail.com](mailto:mahmedraza9029@gmail.com) | [Muhammad Ahmed Raza](https://www.linkedin.com/in/muhammad-ahmed-raza-51955833b/) | [Ahmed-Raza-90](https://github.com/Ahmed-Raza-90) | [+92 318 3200596](https://wa.me/923183200596) |

</div>

---

<div align="center">

⭐ **If you like this project, give it a star!** ⭐

<br />

Made with ❤️ by **Muhammad Ahmed Raza** &nbsp;|&nbsp; © 2026 All Rights Reserved

</div>
