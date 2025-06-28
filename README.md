# 🛡️ PhishAI — Hacker-Style URL Phishing Detector

**PhishAI** is a real-time, browser-based phishing URL detector built for recruiters, cybersecurity enthusiasts, and developers. It uses smart, pattern-based logic to detect suspicious links — without any backend or API. Designed with a dark hacker aesthetic, clean UX, and full deployability on GitHub Pages.

---

## 🔗 Live Demo

https://msohaib-dev.github.io/PhishAI

---

## 📌 What This Project Does

- Scans any user-entered URL to check for phishing patterns
- Detects common signs like:
  - Use of `@` symbols
  - IP address instead of domain
  - Suspicious keywords like `login`, `verify`, `account`, `secure`, etc.
  - Domains using hyphens or bait words like `free`, `gift`, `bonus`
- Alerts users with animated, styled pop-ups (SweetAlert2)
- Works entirely in-browser — no server, API, or database used

---

## 🚀 Features

- ✅ 100% frontend — no backend needed  
- ✅ Fully hostable on GitHub Pages  
- ✅ Clean alerts using SweetAlert2  
- ✅ Dark-themed, animated hacker UI (glassmorphism + CSS motion)  
- ✅ Fast, lightweight, and mobile-ready  
- ✅ Legal and safe — no real phishing URLs used

---

## 🧪 Example Test URLs

Test how the logic works using these:

### ✅ Safe (Approved)
- `https://google.com`  
  → Output: ✅ Safe URL — no phishing patterns found

### 🚨 Suspicious (Blocked)
- `http://paypal-login.verify-user.com`  
  → Output: 🚨 Suspicious — keyword `login`, hyphen in domain, `http` used  
- `http://192.168.0.1/login`  
  → Output: 🚨 Suspicious — IP address + login keyword  
- `http://free-bonus-gift.shop`  
  → Output: 🚨 Suspicious — bait words and hyphen usage

---

## 💡 Why I Built This

PhishAI is a strategic project made to showcase **real-world cybersecurity thinking** with **practical frontend deployment**. It's not about writing complex code — it’s about building a clean, usable tool that:

- Respects security ethics  
- Looks sharp and deploys instantly  
- Helps others understand phishing threats  
- Demonstrates product-thinking and design sense

It’s an ideal **resume and portfolio piece**, proving my ability to finish and deliver useful tools independently.

---

## 🧰 Tech Stack

| Purpose       | Tech Used                        |
|---------------|----------------------------------|
| Frontend      | HTML, Tailwind CSS, JavaScript   |
| Popups        | SweetAlert2                      |
| UX Design     | Glassmorphism + Animated BG (CSS)|
| Hosting       | GitHub Pages                     |

---

## 🧠 Beyond the Code

While PhishAI uses simple pattern-matching logic, the *real value* is in:

- Building a fully deployable security tool  
- Ensuring legal compliance (no real phishing URLs)  
- Respecting CORS and browser safety rules  
- Designing with clean UX + themed styling  
- Helping even non-technical users feel secure  

It can be extended with:
- Google Safe Browsing API  
- AI-based phishing classification models  
- Server-side dashboards or logging  
- Chrome extensions or mobile app versions

---

## 🧑‍💻 For Recruiters & Companies

Looking for someone who:
- Understands real-world phishing mechanics  
- Designs clean, safe user-facing tools  
- Can ship full-stack-independent MVPs  
- Combines security logic with frontend polish?

This project shows that I can conceptualize, code, and deploy solo — with a sharp eye for both UX and security. It’s fast, scalable, public-safe, and team-friendly.

---

## 🎓 For Students & Learners

Use this as a base to:
- Understand phishing signals and regex logic  
- Learn how to make frontend-only tools with real utility  
- Remix and build your own phishing scanner / browser extension  
- Deploy your first GitHub-hosted app with themed UI

---

## 🌟 Why It Stands Out

- ⚡ Fully static, works offline  
- 🔒 No risk — no data sent or stored  
- 🎨 UI designed for hacker vibe but professional clarity  
- 🧠 Actually usable — not just "for show"  
- 🚀 Deployment-ready — no extra setup needed


