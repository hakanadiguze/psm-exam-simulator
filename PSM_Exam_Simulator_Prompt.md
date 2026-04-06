# PSM Exam Simulator — Claude Code Reconstruction Prompt

> Bu prompt'u Claude Code'a ver. Tek seferde PSM Exam Simulator'ın
> aynısını sıfırdan geliştirebilsin.

---

## Tech Stack

- React 18 (hooks only: useState, useEffect, useCallback)
- Pure inline CSS (no Tailwind, no CSS modules, no styled-components)
- Google Fonts: Fraunces (serif, headings) + DM Sans (body) + DM Mono (code/badges)
- Anthropic Claude API for AI question generation (fetch to /v1/messages)
- Single file: App.jsx (~4000 lines)
- `/* eslint-disable */` at top of file

---

## Design System

### Color Palette
```
--bg:        #f8fafc   (page background)
--dark:      #0f172a   (navbar, headers)
--slate:     #334155   (secondary text)
--muted:     #94a3b8   (placeholder, hints)
--border:    #e2e8f0   (card borders)
--white:     #ffffff   (card backgrounds)
--psm1:      #0ea5e9   (PSM I accent — sky blue)
--psm2:      #8b5cf6   (PSM II accent — violet)
--green:     #22c55e   (correct answer)
--red:       #ef4444   (wrong answer)
--yellow:    #f59e0b   (timer warning)
```

### Typography
- **Headings:** Fraunces serif, 700 weight
- **Body:** DM Sans, 400/500/600
- **Badges:** DM Mono, monospace

### Component Primitives
- `Badge({ children, color })` — colored pill tag (topic/multi-select labels)
- `AdBanner()` — Google AdSense `<ins>` tag, only on Home/ModeSelect/Results screens
- `useGoogleAnalytics()` — injects gtag script on mount
- `trackEvent(action, category, label)` — wraps window.gtag

---

## App State

All state lives in the App component via `useState`:

```js
screen:        "home" | "mode-select" | "exam" | "results"
examLevel:     "PSM1" | "PSM2"
examMode:      "full" | "topic"
selectedTopic: string
questions:     array of question objects (drawn for current exam)
current:       number (index into questions)
answers:       object { [questionId]: number[] }
submitted:     object { [questionId]: boolean }
score:         number (calculated on exam finish)
timeLeft:      number (seconds)
timerActive:   boolean
aiLoading:     boolean
aiQuestion:    object | null
```

---

## Question Object Schema

```js
{
  id:          number,     // PSM1: 1–199, PSM2: 201–300+
  topic:       string,     // see topic lists below
  question:    string,     // question text
  options:     string[],   // 2–5 answer options
  correct:     number[],   // 0-based indices of correct answers
  multi:       boolean,    // true = multi-select, false = single
  explanation: string      // Scrum Guide 2020 based explanation
}
```

---

## Question Banks

### PSM1_BANK — 199 questions (IDs 1–199)

**Topics** (10–15 questions each minimum):

| Topic |
|-------|
| Scrum Theory |
| Scrum Values |
| Scrum Team |
| Product Owner |
| Scrum Master |
| Sprint |
| Sprint Planning |
| Daily Scrum |
| Sprint Review |
| Sprint Retrospective |
| Product Backlog |
| Sprint Backlog |
| Increment & Definition of Done |
| Product Goal |
| Sprint Goal |
| Scrum Artifacts |
| Scrum Events |

### PSM2_BANK — 100 questions (IDs 201–300)

**Topics** (10–12 questions each minimum):

| Topic |
|-------|
| Advanced Scrum Master Stances |
| Organizational Impediments |
| Scaling Scrum |
| Coaching & Facilitation |
| Evidence-Based Management |
| Self-Managing Teams |
| Scrum Master as Change Agent |
| Scrum Values in Practice |
| Advanced Sprint Management |

**Rules:**
- All questions based strictly on **Scrum Guide 2020**
- Mix of: single-choice, multi-select (choose 2/3), true/false
- Every question must have a detailed explanation citing Scrum principles
- Multi-select questions must clearly say "Choose X answers" in the question text

---

## Exam Logic

```js
// Fisher-Yates shuffle
function shuffle(arr) { ... }

// Random subset for each exam
function drawExam(bank, count) {
  // shuffle copy of bank, return first `count` items
  // PSM I:  drawExam(PSM1_BANK, 80)
  // PSM II: drawExam(PSM2_BANK, 30)
}

// Topic mode: filter by topic, shuffle, return all matching
```

### Scoring
- A question is correct **only if** the user's selected indices exactly
  match `question.correct` (order-independent Set comparison)
- `score = (correct / total) * 100`
- Passing threshold: **85%**

### Timer
```
PSM I:      3600 seconds (60 min)
PSM II:     5400 seconds (90 min)
Topic mode: no timer
```
- `useEffect` countdown: decrement every second when `timerActive === true`
- Color: green → yellow at `<300s` → red at `<60s`
- Auto-finish exam when `timeLeft` reaches 0
- Timer never goes below 0

### Answer Handling
- **Single-choice:** clicking an option sets answer, does NOT auto-submit
- **Multi-select:** clicking toggles selection
- **"Check Answer" button:** marks question as submitted, shows feedback
- **"Next" button:** advances to next question
- Cannot change answer after submission

---

## AI Question Generation

```js
async function generateAIQuestion(level, topic) {
  // POST to https://api.anthropic.com/v1/messages
  // model: "claude-sonnet-4-20250514"
  // max_tokens: 1000
  
  // System prompt:
  // "You are a Scrum.org certified trainer. Generate exactly 1 PSM {level}
  //  exam question about '{topic}'. Return ONLY valid JSON:
  //  { id: 9999, topic, question, options[], correct[], multi, explanation }
  //  Base everything strictly on Scrum Guide 2020."
  
  // Parse response, strip ```json fences, return parsed object.
  // On error: return null.
}
```

- In topic study mode, if AI question exists, **prepend** it to questions array
- Show loading spinner while generating

---

## Screens & Layout

### HOME SCREEN

```
Layout: centered column, maxWidth 760px, padding 40px

Header:
  Dark navbar (#0f172a)
  Logo: "PSM Simulator" in Fraunces
  Subtitle: "Professional Scrum Master Exam Prep"

Hero:
  Large Fraunces heading: "Master the Scrum Guide."
  Subtext: 300 questions, random draw, AI-powered
  Two CTA buttons:
    "Practice PSM I"  → blue  (#0ea5e9)
    "Practice PSM II" → violet (#8b5cf6)

Stats grid (4 columns):
  "199+"  PSM I Questions
  "100+"  PSM II Scenarios
  "80/30" Qs per Exam
  "85%"   Passing Score
  "∞"     AI Questions

<AdBanner />   ← between stats and info cards

Exam info cards (2 columns):
  PSM I  (blue border):   80 Qs, 60 min, 85% pass, multi-choice
  PSM II (violet border): 30 Qs, 90 min, 85% pass, scenario-based

Footer:
  "Built by Hakan · Not affiliated with Scrum.org · Practice tool only"
  "Hakan" → https://github.com/hakanadiguze
```

### MODE SELECT SCREEN

```
Back button in navbar

Full Exam card:
  Title, description, count + time
  "Start Full Exam" button
  → drawExam(), set timer, setScreen("exam")

<AdBanner />   ← between Full Exam and Topic Study cards

Topic Study card:
  Dropdown: all topics for chosen level
  "Generate AI Question" checkbox toggle
  "Start Topic Study" button
  → filter questions by topic, optionally prepend AI question
```

### EXAM SCREEN

```
⚠️  NO ADS on this screen.

Top bar:
  "Question X of Y" + progress bar (filled = current/total %)
  Timer (right side, color-coded)

Question card (white, rounded, shadow):
  Topic badge + "Multi-select" badge (if applicable)
  Question text — 18px DM Sans

  Options:
    Before submit: neutral gray, hover effect
    After submit:
      ✓ correct options         → green background
      ✗ user's wrong selections → red background
      unselected correct        → green outline only

  "Check Answer" button (disabled until option selected)
  After submit: explanation box (light blue bg, italic text)
  "Next Question" / "Finish Exam" button
```

### RESULTS SCREEN

```
<AdBanner />   ← top of results

Score:
  Large % in Fraunces (64px)
  PASS (green) or FAIL (red) badge
  "X / Y questions correct"

Breakdown cards:
  Correct (green), Wrong (red), Time remaining

Conditional message:
  Pass:        Congratulations message
  Fail >70%:   "Almost there" encouragement
  Fail <70%:   Study tips for weak areas

Buttons:
  "Start New Exam" → drawExam() again (fresh random set)
  "Back to Home"
```

---

## Google Analytics & Ads

### Google Analytics
```js
const GA_ID = "G-76E9H0TCHL";

// useGoogleAnalytics hook:
// Injects gtag script on first mount (check for existing script by id)
// Calls gtag("config", GA_ID)

// trackEvent(action, category, label):
// Calls window.gtag("event", ...) safely
```

**Track these events:**

| Event | Trigger | Label |
|-------|---------|-------|
| `start_exam` | Full exam begins | `PSM1_full` or `PSM2_full` |
| `finish_exam` | Exam ends | score % |
| `topic_study` | Topic mode starts | topic name |

### AdBanner Component
```js
// Renders <ins class="adsbygoogle"> with:
data-ad-client = "ca-pub-5940576309620894"
data-ad-slot   = "XXXXXXXXXX"   // ← user fills in from AdSense dashboard

// Shows "Advertisement" label above in 10px muted text
// ONLY renders on: home, mode-select, results
// NEVER renders during active exam
```

---

## Favicon & Public Files

### public/favicon.svg
```
64x64 SVG
Dark rounded rectangle background: #0f172a
Large "S" letter in sky blue (#38bdf8), serif font
Small "P" badge circle in violet (#8b5cf6), top-right corner
```

### public/index.html
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/favicon.svg" />

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-76E9H0TCHL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-76E9H0TCHL');
</script>

<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5940576309620894"
  crossorigin="anonymous"></script>

<meta name="description" content="PSM I & PSM II exam simulator. 300 questions. Built by Hakan." />
<meta property="og:title" content="PSM Exam Simulator" />
<meta property="og:type" content="website" />
<title>PSM Exam Simulator</title>
```

### public/ads.txt
```
google.com, pub-5940576309620894, DIRECT, f08c47fec0942fa0
```

---

## File Structure

```
psm-exam-simulator/
├── public/
│   ├── index.html
│   ├── favicon.svg
│   └── ads.txt
├── src/
│   ├── index.js        ← ReactDOM.createRoot boilerplate only
│   └── App.jsx         ← entire application (~4000 lines)
├── package.json        ← react, react-dom, react-scripts@5
├── vercel.json         ← buildCommand, outputDirectory, framework
├── .gitignore
└── README.md
```

### package.json
```json
{
  "name": "psm-exam-simulator",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app"
}
```

---

## Deployment Info

| | |
|---|---|
| **GitHub** | https://github.com/hakanadiguze/psm-exam-simulator |
| **Vercel** | Auto-deploy on push, framework = Create React App |
| **Live URL** | https://psm-exam-simulator.vercel.app |
| **Custom domain** | https://psm.hakanadiguzel.com |

---

## Quality Rules

1. All questions strictly based on **Scrum Guide 2020** — no earlier versions
2. No prices ($150/$250) anywhere in the UI
3. No "Project Manager" role presented as part of Scrum
4. Explanations must be educational, 2–4 sentences
5. Multi-select questions must clearly say "Choose X answers"
6. Timer must never go below 0
7. New exam draw must always produce a different question set
8. `/* eslint-disable */` must be the **first line** of App.jsx
9. No external CSS files, no Tailwind, no CSS-in-JS libraries
10. Component works standalone — no required props on `<App />`
11. Google Fonts loaded via `<link>` tag inside JSX return, not in HTML
12. AI question generation must fail gracefully (null return, no crash)
