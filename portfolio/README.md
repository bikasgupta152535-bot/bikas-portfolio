# Bikas Kumar Gupta — Developer Portfolio

A modern, responsive developer portfolio built with **React + Vite**, plain CSS (no UI framework),
and vanilla JavaScript. Dark-first design with a purple/indigo accent, glassmorphism cards, and a
light/dark theme toggle.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     One component + matching .css file per section (Hero, About, Skills, ...)
  context/        Theme (light/dark) context
  data/           Editable content: skills, projects, education, achievements, journey, services, socials
  hooks/          useReveal — scroll-in-view animation hook
  styles/         Design tokens (colors, type, spacing) as CSS variables
  App.jsx         Assembles all sections in order
  main.jsx        React entry point
public/
  resume/         Put your resume PDF here (see below)
  favicon.svg
```

## Where to edit your content

Everything personal lives in `src/data/*.js` — you don't need to touch component code to update
content. Every placeholder is marked `[EDIT HERE]`:

- `src/data/social.js` — GitHub / LinkedIn / LeetCode / email links
- `src/data/projects.js` — project cards (title, description, tech, links, status)
- `src/data/education.js` — education timeline
- `src/data/achievements.js` — achievement/milestone cards (empty by default — add only real ones)
- `src/data/journey.js` — journey/experience timeline (empty by default — add only real entries)
- `src/data/skills.js` — skills grid
- `src/data/services.js` — services section
- `src/data/leetcodeFallback.js` — placeholder LeetCode numbers shown until you connect a live API

**Nothing was invented for education, achievements, journey, or resume — those are intentionally
left as clearly marked placeholders for you to fill in with real information.**

## Adding your resume

Drop your resume PDF into `public/resume/` and name it exactly `resume.pdf`. The "Download Resume"
button in the Hero section already points at `/resume/resume.pdf`, so no code changes are needed.

## Connecting a live LeetCode API

Open `src/components/LeetCodeDashboard.jsx` — there's a documented function called
`fetchLeetCodeStats()` at the top with step-by-step instructions and an example `fetch` call for
wiring up a real LeetCode stats API. Until then, the dashboard shows clearly-labeled placeholder
data from `src/data/leetcodeFallback.js`.

## Contact form

The contact form validates name/email/message client-side. It currently confirms submission
locally — connect it to a real backend or a service like Formspree/EmailJS inside
`src/components/Contact.jsx` (marked with `[EDIT HERE]`).

## Notes

- No UI/animation libraries are used — animations are done with CSS transitions and a small
  IntersectionObserver hook (`useReveal`).
- Icons are hand-written inline SVGs in `src/components/Icons.jsx` (no icon library dependency).
- Respects `prefers-reduced-motion`.
- Theme choice is remembered via `localStorage`.
