# Algoryx Technologies – Scroll-Based Animated Landing Page (Task 2)

A premium, scroll-animated landing page for Algoryx Technologies built with React 18, Vite 6, Tailwind CSS 4, Framer Motion and Lucide React.

## Features
Responsive navbar with mobile menu and scroll progress, animated hero with parallax, smooth scrolling, scroll-reveal animations, parallax About section, animated stat counters, interactive service cards with cursor glow, filterable projects showcase, testimonials carousel, validated contact form with loading state, footer with social links, loading screen, accessible markup and `prefers-reduced-motion` support.

## Installation
```bash
npm install
```

## Run Locally
```bash
npm run dev
```
Open http://localhost:5173

## Production Build
```bash
npm run build
npm run preview
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Task 2: Algoryx landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/algoryx-task-2.git
git push -u origin main
```

## Deploy to Vercel
1. Sign in at vercel.com with GitHub and click **Add New > Project**.
2. Import the repository.
3. Settings: Framework preset **Vite**, Build command `npm run build`, Output directory `dist`, Root directory the repository root.
4. Click **Deploy**.

## Project Structure
```
algoryx-task-2/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    └── components/
        ├── Navbar.jsx  Hero.jsx  About.jsx  Services.jsx  Projects.jsx
        ├── Stats.jsx  Testimonials.jsx  Contact.jsx  Footer.jsx
        └── Logo.jsx  Reveal.jsx
```
