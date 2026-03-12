# PSM Exam Simulator

A free, open-source practice tool for **PSM I** and **PSM II** (Professional Scrum Master) exams by Scrum.org.

Built by [Hakan](https://github.com/hakanmertb)

---

## Features

- 📚 **300 questions** — 199 PSM I + 100 PSM II + PDF workshop questions
- 🎯 **Real exam format** — PSM I draws 80 random questions, PSM II draws 30
- 🔀 **New question set every attempt** — no two exams are the same
- ✨ **AI-generated questions** — Claude API generates fresh questions per topic
- 📖 **Scrum Guide 2020 explanations** for every answer
- ⏱️ **Timed exams** — 60 min (PSM I) / 90 min (PSM II)
- 📊 **Topic-based study mode**

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/psm-exam-simulator.git
cd psm-exam-simulator

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

---

## Google Analytics Setup

1. Go to [analytics.google.com](https://analytics.google.com) → create a new property
2. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
3. Replace `G-XXXXXXXXXX` in **two places**:
   - `public/index.html` (lines 12 and 15)
   - `src/App.jsx` (line 4: `const GA_ID = "G-XXXXXXXXXX"`)

---

## Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B — Vercel Dashboard

1. Push your code to GitHub (see below)
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Framework: **Create React App** (auto-detected)
5. Click **Deploy** ✅

---

## Deploy to GitHub

```bash
# Inside the project folder:
git init
git add .
git commit -m "Initial commit — PSM Exam Simulator"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/psm-exam-simulator.git
git branch -M main
git push -u origin main
```

---

## Anthropic API Key (for AI questions)

The AI question generation uses the Anthropic Claude API.  
In Claude.ai Artifacts it works automatically.  
For your own deployment, you'll need to add a proxy or serverless function to protect your API key.

**Option — Vercel Serverless Function:**

Create `/api/claude.js`:
```js
export default async function handler(req, res) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.json(data);
}
```

Then in `App.jsx`, change the fetch URL from:
```
https://api.anthropic.com/v1/messages
```
to:
```
/api/claude
```

Add your key in Vercel dashboard: **Settings → Environment Variables → `ANTHROPIC_API_KEY`**

---

## Disclaimer

This project is **not affiliated with Scrum.org**. It is an independent practice tool only.  
PSM I and PSM II are trademarks of Scrum.org.
