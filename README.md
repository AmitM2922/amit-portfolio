# Amit Mulmule — Portfolio Website

A modern, dark-themed portfolio website built with React. Featuring animated skill bars, typewriter effect, interactive project cards, and full mobile responsiveness.

---

## 🚀 Quick Start (Copy-Paste Setup)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Locally
```bash
npm start
```
Opens at `http://localhost:3000`

---

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) → Click **New repository**
2. Name it: `amit-mulmule-portfolio` (or any name you want)
3. Set it to **Public**
4. Click **Create repository**

### Step 2: Update `package.json`
Open `package.json` and update the `homepage` field with YOUR GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/amit-mulmule-portfolio"
```
Example: if your username is `amitmulmule4`:
```json
"homepage": "https://amitmulmule4.github.io/amit-mulmule-portfolio"
```

### Step 3: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/amit-mulmule-portfolio.git
git push -u origin main
```

### Step 4: Install gh-pages & Deploy
```bash
npm install gh-pages --save-dev
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**

Your portfolio will be live at:
`https://YOUR_USERNAME.github.io/amit-mulmule-portfolio`

> ⚡ Deployment takes 2–5 minutes to go live after running `npm run deploy`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js / .css       # Fixed navigation with scroll detection
│   ├── Hero.js / .css         # Typewriter hero section with code window
│   ├── About.js / .css        # About info + feature cards
│   ├── Skills.js / .css       # Animated skill bars + tech badges
│   ├── Experience.js / .css   # Timeline work history + education
│   ├── Projects.js / .css     # Expandable project cards
│   ├── Contact.js / .css      # Contact links + CTA card
│   ├── Footer.js / .css       # Footer
│   └── Loader.js / .css       # Loading screen
├── App.js
├── App.css
├── index.js
└── index.css                  # Global variables + animations
```

---

## ✏️ Customization Guide

### Update Your Details
All personal data is inside each component file. Key places:

| What to change | File |
|---|---|
| Name, role, description | `Hero.js` |
| Stats (years, projects) | `Hero.js` → `hero-stats` array |
| About text & info rows | `About.js` |
| Skill levels (%) | `Skills.js` → `skillGroups` array |
| Work experience | `Experience.js` → `experiences` array |
| Projects | `Projects.js` → `projects` array |
| Contact info | `Contact.js` → `contactLinks` array |
| LinkedIn URL | `About.js`, `Contact.js`, `Footer.js` |

### Change Color Theme
Edit `src/index.css` → `:root` variables:
```css
--accent-green: #00ff88;   /* Main accent color */
--accent-blue: #3d9bff;    /* Secondary accent */
--bg-primary: #080d1a;     /* Main background */
```

---

## 🔄 Re-deploy After Changes
```bash
npm run deploy
```

---

## 📦 Tech Stack
- React 18
- CSS3 (no UI library — all custom)
- Google Fonts (Syne + DM Sans + Space Mono)
- gh-pages for deployment
