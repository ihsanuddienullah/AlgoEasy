# Vite + React + TypeScript Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate AlgoEasy from CRA + React 17 + JavaScript to Vite + React 19 + TypeScript, converting all class components to functional, upgrading to Bootstrap 5 + React Bootstrap 2.x, and replacing `react-animate-on-scroll` with `framer-motion`.

**Architecture:** In-place migration — new config files added alongside existing source, then each `.js` component renamed to `.tsx` and updated. Old entry point (`src/index.js`) replaced by `src/main.tsx`. Old `public/index.html` replaced by root-level `index.html`.

**Tech Stack:** Vite 6, React 19, TypeScript 5.6 (strict), React Bootstrap 2.x, Bootstrap 5, framer-motion 11

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Replace | `package.json` | New deps + Vite scripts |
| Create | `vite.config.ts` | Vite + React plugin config |
| Create | `tsconfig.json` | TypeScript strict config |
| Create | `tsconfig.node.json` | TS config for vite.config.ts |
| Replace | `index.html` | Root-level Vite entry HTML |
| Create | `src/vite-env.d.ts` | Vite ambient type declarations |
| Replace | `src/main.tsx` | React 19 createRoot entry point |
| Replace | `src/App.tsx` | App shell, Bootstrap CSS import |
| Replace | `src/pages/LandingPage.tsx` | Page layout |
| Replace | `src/components/Header.tsx` | Navbar (mr-auto → me-auto) |
| Replace | `src/components/Introduction.tsx` | Hero: Jumbotron → div, framer-motion |
| Replace | `src/components/Content.tsx` | Content container |
| Replace | `src/components/Footer.tsx` | Footer: Jumbotron → div |
| Replace | `src/components/content/About.tsx` | About section |
| Replace | `src/components/content/Lesson.tsx` | Lesson cards: CardDeck → Row/Col, framer-motion |
| Replace | `src/components/content/Action.tsx` | CTA section |
| Replace | `src/components/content/Contact.tsx` | Contact form: useState, CardDeck → Row/Col, framer-motion |
| Delete | `src/index.js` | Replaced by main.tsx |
| Delete | `src/App.js` | Replaced by App.tsx |
| Delete | `src/App.test.js` | Testing library removed |
| Delete | `src/pages/LandingPage.js` | Replaced by .tsx |
| Delete | `src/components/Header.js` | Replaced by .tsx |
| Delete | `src/components/Introduction.js` | Replaced by .tsx |
| Delete | `src/components/Content.js` | Replaced by .tsx |
| Delete | `src/components/Footer.js` | Replaced by .tsx |
| Delete | `src/components/content/About.js` | Replaced by .tsx |
| Delete | `src/components/content/Lesson.js` | Replaced by .tsx |
| Delete | `src/components/content/Action.js` | Replaced by .tsx |
| Delete | `src/components/content/Contact.js` | Replaced by .tsx |
| Delete | `public/index.html` | Replaced by root index.html |

---

## Task 1: Scaffold Vite + TypeScript Config

**Files:**
- Replace: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `src/vite-env.d.ts`

- [ ] **Step 1: Replace `package.json`**

```json
{
  "name": "algoeasy",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.3.3",
    "framer-motion": "^11.3.0",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.4",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "~5.6.2",
    "vite": "^6.0.5"
  }
}
```

- [ ] **Step 2: Create `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 3: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 4: Create `tsconfig.node.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 5: Create `src/vite-env.d.ts`**

```ts
/// <reference types="vite/client" />
```

- [ ] **Step 6: Install dependencies**

Run: `npm install`

Expected: `node_modules` updated with Vite, React 19, React Bootstrap 2.x, framer-motion, TypeScript

- [ ] **Step 7: Commit**

```bash
git add package.json vite.config.ts tsconfig.json tsconfig.node.json src/vite-env.d.ts package-lock.json
git commit -m "chore: scaffold Vite + TypeScript config"
```

---

## Task 2: Replace HTML Entry Point

**Files:**
- Create: `index.html` (project root)

- [ ] **Step 1: Create root `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AlgoEasy - Learn programming online" />
    <title>AlgoEasy.IO</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "chore: add Vite root index.html"
```

---

## Task 3: Migrate Entry Point

**Files:**
- Create: `src/main.tsx`
- Delete: `src/index.js`

- [ ] **Step 1: Create `src/main.tsx`**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 2: Delete `src/index.js`**

```bash
rm src/index.js
```

- [ ] **Step 3: Commit**

```bash
git add src/main.tsx src/index.js
git commit -m "feat: migrate entry point to main.tsx with createRoot"
```

---

## Task 4: Migrate App

**Files:**
- Create: `src/App.tsx`
- Delete: `src/App.js`, `src/App.test.js`

- [ ] **Step 1: Create `src/App.tsx`**

```tsx
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  )
}

export default App
```

- [ ] **Step 2: Delete old files**

```bash
rm src/App.js src/App.test.js
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`

Expected: errors only about files not yet migrated (`.js` imports). No errors in `App.tsx` itself.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx src/App.js src/App.test.js
git commit -m "feat: migrate App to TypeScript functional component"
```

---

## Task 5: Migrate LandingPage

**Files:**
- Create: `src/pages/LandingPage.tsx`
- Delete: `src/pages/LandingPage.js`

- [ ] **Step 1: Create `src/pages/LandingPage.tsx`**

```tsx
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Content from '../components/Content'
import Footer from '../components/Footer'
import '../assets/css/style.css'

export default function LandingPage() {
  return (
    <div>
      <Introduction />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/pages/LandingPage.js`**

```bash
rm src/pages/LandingPage.js
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/LandingPage.tsx src/pages/LandingPage.js
git commit -m "feat: migrate LandingPage to TypeScript functional component"
```

---

## Task 6: Migrate Header

**Files:**
- Create: `src/components/Header.tsx`
- Delete: `src/components/Header.js`

Bootstrap 5 changed `mr-auto` to `me-auto` (logical properties). Update the Nav className.

- [ ] **Step 1: Create `src/components/Header.tsx`**

```tsx
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">AlgoEasy.IO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#lesson">Catalog</Nav.Link>
            <Nav.Link href="#contact-us">Contact</Nav.Link>
            <NavDropdown title="Languages" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bahasa Indonesia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Animal</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/components/Header.js`**

```bash
rm src/components/Header.js
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx src/components/Header.js
git commit -m "feat: migrate Header to TypeScript, fix Bootstrap 5 me-auto"
```

---

## Task 7: Migrate Introduction

**Files:**
- Create: `src/components/Introduction.tsx`
- Delete: `src/components/Introduction.js`

`Jumbotron` was removed in Bootstrap 5 — replaced with `div.py-5.bg-dark.text-white`. `react-animate-on-scroll` replaced with `framer-motion`.

- [ ] **Step 1: Create `src/components/Introduction.tsx`**

```tsx
import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import introImg from '../assets/img/introduction.svg'

export default function Introduction() {
  return (
    <div id="introduction">
      <div className="py-5 bg-dark text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Container>
            <Row>
              <Col>
                <h1>Hello World!</h1>
                <p>Welcome to AlgoEasy,</p>
                <p>a simple web app where you can learn programming online.</p>
                <p>We'll show you what to learn to code.</p>
                <p>
                  <Button variant="primary" href="https://refactory.id">Get Started</Button>
                </p>
              </Col>
              <Col md="auto">
                <img src={introImg} alt="code" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </motion.div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/components/Introduction.js`**

```bash
rm src/components/Introduction.js
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Introduction.tsx src/components/Introduction.js
git commit -m "feat: migrate Introduction to TypeScript, replace Jumbotron and animate-on-scroll"
```

---

## Task 8: Migrate Content

**Files:**
- Create: `src/components/Content.tsx`
- Delete: `src/components/Content.js`

- [ ] **Step 1: Create `src/components/Content.tsx`**

```tsx
import About from './content/About'
import Lesson from './content/Lesson'
import Action from './content/Action'
import Contact from './content/Contact'

export default function Content() {
  return (
    <div className="content">
      <About />
      <Lesson />
      <Action />
      <Contact />
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/components/Content.js`**

```bash
rm src/components/Content.js
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Content.tsx src/components/Content.js
git commit -m "feat: migrate Content to TypeScript functional component"
```

---

## Task 9: Migrate Footer

**Files:**
- Create: `src/components/Footer.tsx`
- Delete: `src/components/Footer.js`

`Jumbotron` removed in Bootstrap 5 — replaced with `div.py-5.bg-dark.text-white`.

- [ ] **Step 1: Create `src/components/Footer.tsx`**

```tsx
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <div id="footer">
      <div className="py-5 bg-dark text-white">
        <Container>
          <Row>
            <Col>
              <h3>AlgoEasy.IO</h3>
              <p>by Xapiens Refactory Indonesia</p>
            </Col>
            <Col md="auto">
              <p>Copyright © 2021 Muhammad Ihsanuddienullah | All rights reserved</p>
              <p>Ihsanuddienullah@algoeasy.io</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/components/Footer.js`**

```bash
rm src/components/Footer.js
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx src/components/Footer.js
git commit -m "feat: migrate Footer to TypeScript, replace Jumbotron"
```

---

## Task 10: Migrate About

**Files:**
- Create: `src/components/content/About.tsx`
- Delete: `src/components/content/About.js`

- [ ] **Step 1: Create `src/components/content/About.tsx`**

```tsx
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <div id="about-us">
      <div className="about-desc">
        <Container>
          <Row>
            <Col>
              <h1>About Us</h1>
              <p>
                About AlgoEasy When we started AlgoEasy, our goal was to give anyone in the world
                the ability to learn the skills they'd need to succeed in the 21st century. We set
                out to create a new, interactive way of learning — making it engaging, flexible, and
                accessible for as many people as possible. Since then, we have helped millions of
                people worldwide unlock modern technical skills and reach their full potential through
                code.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/components/content/About.js`**

```bash
rm src/components/content/About.js
```

- [ ] **Step 3: Commit**

```bash
git add src/components/content/About.tsx src/components/content/About.js
git commit -m "feat: migrate About to TypeScript functional component"
```

---

## Task 11: Migrate Lesson

**Files:**
- Create: `src/components/content/Lesson.tsx`
- Delete: `src/components/content/Lesson.js`

`CardDeck` was removed in Bootstrap 5 — replaced with `Row` + `Col` grid. `react-animate-on-scroll` replaced with `framer-motion`.

- [ ] **Step 1: Create `src/components/content/Lesson.tsx`**

```tsx
import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import lessonImg from '../../assets/img/lesson.svg'

export default function Lesson() {
  return (
    <div id="lesson">
      <Container className="mb-5 mt-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Row>
            <Col>
              <img src={lessonImg} alt="code" className="img-fluid" />
            </Col>
            <Col>
              <Row className="g-3">
                <Col>
                  <Card text="white" style={{ width: '18rem' }}>
                    <Card.Header>HTML</Card.Header>
                    <Card.Body>
                      <Card.Title>Hypertext Markup Language</Card.Title>
                      <Card.Text>
                        Hypertext Markup Language (HTML) is the standard markup language for
                        documents designed to be displayed in a web browser.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card text="white" style={{ width: '18rem' }}>
                    <Card.Header>CSS</Card.Header>
                    <Card.Body>
                      <Card.Title>Cascading Style Sheet</Card.Title>
                      <Card.Text>
                        Cascading Style Sheets (CSS) is a style sheet language used for describing
                        the presentation of a document written in a markup language such as HTML.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/components/content/Lesson.js`**

```bash
rm src/components/content/Lesson.js
```

- [ ] **Step 3: Commit**

```bash
git add src/components/content/Lesson.tsx src/components/content/Lesson.js
git commit -m "feat: migrate Lesson to TypeScript, replace CardDeck and animate-on-scroll"
```

---

## Task 12: Migrate Action

**Files:**
- Create: `src/components/content/Action.tsx`
- Delete: `src/components/content/Action.js`

- [ ] **Step 1: Create `src/components/content/Action.tsx`**

```tsx
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Action() {
  return (
    <div id="action">
      <div className="action-desc">
        <Container>
          <Row>
            <Col>
              <h3>Ready to become an awesome programmer?</h3>
              <p>Let's learn to code, learn to be creative!</p>
              <Button variant="primary" href="https://course.refactory.id">Start Learning</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/components/content/Action.js`**

```bash
rm src/components/content/Action.js
```

- [ ] **Step 3: Commit**

```bash
git add src/components/content/Action.tsx src/components/content/Action.js
git commit -m "feat: migrate Action to TypeScript functional component"
```

---

## Task 13: Migrate Contact

**Files:**
- Create: `src/components/content/Contact.tsx`
- Delete: `src/components/content/Contact.js`

`CardDeck` removed — replaced with `Row` + `Col`. Class state + `setState` converted to `useState`. `react-animate-on-scroll` replaced with `framer-motion`. Bootstrap 5 requires explicit `mb-3` on `Form.Group` (no built-in bottom margin).

- [ ] **Step 1: Create `src/components/content/Contact.tsx`**

```tsx
import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { motion } from 'framer-motion'
import contactImg from '../../assets/img/contact-us.svg'

export default function Contact() {
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmit(!submit)
  }

  return (
    <div id="contact-us">
      <Container className="mb-5 mt-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h1>Contact Us</h1>
          <Row>
            <Col>
              <Row className="g-3">
                <Col>
                  <Card text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formControlTextarea">
                          <Form.Control as="textarea" rows={3} placeholder="Enter Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                        {submit && <Alert variant="success" className="mt-2">Message Sent</Alert>}
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={contactImg} alt="contact" className="img-fluid" />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  )
}
```

- [ ] **Step 2: Delete `src/components/content/Contact.js`**

```bash
rm src/components/content/Contact.js
```

- [ ] **Step 3: Commit**

```bash
git add src/components/content/Contact.tsx src/components/content/Contact.js
git commit -m "feat: migrate Contact to TypeScript with useState and framer-motion"
```

---

## Task 14: Cleanup and Verify

**Files:**
- Delete: `public/index.html`

- [ ] **Step 1: Delete old CRA HTML**

```bash
rm public/index.html
```

- [ ] **Step 2: Run TypeScript check**

Run: `npx tsc --noEmit`

Expected: 0 errors

- [ ] **Step 3: Run dev server**

Run: `npm run dev`

Expected: Server starts at `http://localhost:5173`. Open in browser and verify:
- Navbar renders with dark background
- Hero section renders (Introduction) with zoom-in animation on scroll
- Lesson cards render in grid layout
- Contact form submits and shows "Message Sent" alert
- Footer renders with dark background

- [ ] **Step 4: Run production build**

Run: `npm run build`

Expected: `dist/` folder created, no build errors

- [ ] **Step 5: Commit**

```bash
git add public/index.html
git commit -m "chore: remove old CRA public/index.html"
```

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: complete migration to Vite + React 19 + TypeScript"
```
