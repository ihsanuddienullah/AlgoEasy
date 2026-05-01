# Vite + React + TypeScript Migration Design

**Date:** 2026-05-01  
**Project:** AlgoEasy  
**Status:** Approved

## Overview

Migrate the existing CRA (Create React App) + React 17 + JavaScript project to Vite + React 19 + TypeScript using an in-place migration strategy. All class components are converted to functional components with hooks. Bootstrap 4 + React Bootstrap 1.x is upgraded to Bootstrap 5 + React Bootstrap 2.x. `react-animate-on-scroll` is replaced with `framer-motion`.

## Approach

In-place migration: scaffold Vite+TS config in the same repo, migrate files one by one, no restructuring.

## Section 1 — Stack & Config

**New stack:**
- Vite 6
- React 19
- TypeScript (strict mode)
- React Bootstrap 2.x + Bootstrap 5
- framer-motion (replaces react-animate-on-scroll)

**Config files added/replaced:**
- `vite.config.ts` — Vite config with React plugin
- `tsconfig.json` — TypeScript config (strict mode)
- `tsconfig.node.json` — TypeScript config for Vite config file
- `index.html` — moves to project root (Vite convention, replaces `public/index.html`)
- `package.json` — fully rewritten with new deps, Vite scripts

**Removed packages:**
- `react-scripts`
- `web-vitals`
- `@testing-library/*`
- `react-animate-on-scroll`

## Section 2 — Component Conversions

All `.js` files become `.tsx`. All class components become functional components.

### Entry Point
- `src/index.js` → `src/main.tsx`
- Uses React 18 `createRoot` API instead of `ReactDOM.render`

### Bootstrap 5 Breaking Changes
- `Jumbotron` (removed) → `div` with `bg-dark text-white py-5` utility classes
  - Affects: `Introduction.tsx`, `Footer.tsx`
- `CardDeck` (removed) → `Row` + `Col` grid layout
  - Affects: `Lesson.tsx`, `Contact.tsx`

### Animation Swap
`react-animate-on-scroll` → `framer-motion`

| Before | After |
|--------|-------|
| `<ScrollAnimation animateIn="zoomIn" animateOnce="true">` | `<motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>` |

Affects: `Introduction.tsx`, `Lesson.tsx`, `Contact.tsx`

### State Conversion (Contact only)
- `this.state = { submit: false }` + `this.setState` → `const [submit, setSubmit] = useState(false)`
- Class arrow method `handleSubmit` → `const handleSubmit` inside functional component

### Component List
| File | Change |
|------|--------|
| `src/main.tsx` | New entry point with createRoot |
| `src/App.tsx` | Class → functional |
| `src/pages/LandingPage.tsx` | Class → functional |
| `src/components/Header.tsx` | Class → functional |
| `src/components/Introduction.tsx` | Class → functional, Jumbotron → div, add framer-motion |
| `src/components/Content.tsx` | Class → functional |
| `src/components/Footer.tsx` | Class → functional, Jumbotron → div |
| `src/components/content/About.tsx` | Class → functional |
| `src/components/content/Lesson.tsx` | Class → functional, CardDeck → Row/Col, add framer-motion |
| `src/components/content/Action.tsx` | Class → functional |
| `src/components/content/Contact.tsx` | Class → functional, CardDeck → Row/Col, useState, add framer-motion |

## Section 3 — File Structure & Assets

Folder structure unchanged. Only file-level changes:

- `public/index.html` → `index.html` (project root)
- `src/**/*.js` → `src/**/*.tsx`
- `src/index.js` → `src/main.tsx`
- `src/vite-env.d.ts` added (Vite ambient types for assets and import.meta)
- `src/assets/` unchanged — SVG/image imports work natively in Vite+TS
- CSS files (`App.css`, `index.css`, `style.css`) unchanged

No routing, no state management, no new pages added.
