# Digital Chautari

A modern, responsive company website built for **Digital Chautari**, a creative technology company based in Kathmandu, Nepal, focused on digital marketing, content creation, software development, and health-tech solutions.

## Live Demo

**Production:** https://digital-chautari-iota.vercel.app/

**Repository:** https://github.com/JustTheIt/Digital-Chautari

---

## Overview

Digital Chautari is a multi-page web experience designed around the company's creative technology services and flagship ventures.

The project was built with **Next.js and TypeScript**, following the provided brand system, layout specifications, responsive requirements, reusable component architecture, and interaction guidelines.

The project also includes a **Next.js API route** for handling contact form submissions and validation.

---

## Pages

* **Home** — Company introduction, services, products, industries, process, testimonials, blog, and CTA
* **Services** — Digital marketing, content creation, software development, pricing, and industries
* **Products** — Interactive showcase of Digital Chautari's three ventures
* **About** — Company story, mission, values, team, and roadmap
* **Contact** — Contact information, department channels, contact form, and response information

---

## Key Features

* Responsive design across desktop, tablet, and mobile
* Reusable component-based architecture
* Sticky responsive navigation
* Mobile navigation drawer
* Brand-specific design system and color tokens
* Sora and Inter typography
* Gradient headline treatments
* Reusable cards, buttons, badges, and section components
* Interactive product switcher
* Responsive pricing sections
* Scroll and hover interactions
* Reduced-motion support
* Contact form with client-side validation
* Next.js contact API endpoint
* Loading, success, and validation states
* Responsive Kathmandu map section
* Production deployment with Vercel

---

## Tech Stack

| Technology   | Usage                                |
| ------------ | ------------------------------------ |
| Next.js      | Application framework and routing    |
| React        | UI development                       |
| TypeScript   | Type-safe development                |
| CSS          | Design system and responsive styling |
| ESLint       | Code quality and linting             |
| Vercel       | Production deployment                |

---

## Design System

The interface follows the provided Digital Chautari brand specifications.

### Primary Colors

* Teal — `#0F9488`
* Dark Teal — `#0B6F66`
* Gold — `#E0A930`
* Leaf Green — `#7FAE3A`
* Ink — `#101826`
* Navy — `#0B1220`
* Paper — `#FBFBF9`
* Muted — `#5B6472`

### Typography

* **Sora** — Headings
* **Inter** — Body text

### Layout

* Maximum content width: `1120px`
* Responsive desktop, tablet, and mobile layouts
* Consistent spacing and card system
* Responsive navigation and content grids

---

## Project Structure

```text
Digital-Chautari/
├── public/
│   └── blog/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/
│   │   │   └── contact/
│   │   ├── contact/
│   │   ├── products/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── ClosingCta.tsx
│   │   ├── ContactForm.tsx
│   │   ├── DarkSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroPattern.tsx
│   │   ├── IconChip.tsx
│   │   ├── KathmanduMap.tsx
│   │   ├── PageTransition.tsx
│   │   ├── ProductSwitcher.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SectionHeader.tsx
│   │   └── StatBar.tsx
│   └── lib/
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/JustTheIt/Digital-Chautari.git
```

Navigate to the project:

```bash
cd Digital-Chautari
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the local development server.

### Lint

```bash
npm run lint
```

Runs ESLint checks.

### Production Build

```bash
npm run lint
npm run build
```

Creates an optimized production build.

### Production Start

```bash
npm run start
```

Starts the production server after building the project.

---

## Contact API

The contact form is connected to a Next.js API route:

```text
POST /api/contact
```

The endpoint handles:

* Required field validation
* Email format validation
* Request processing
* Success and error responses

The frontend provides corresponding loading, validation, success, and error states.

---

## Responsive Design

The interface was designed and tested across multiple viewport sizes, including:

* Desktop
* Tablet
* Mobile

Special attention was given to:

* Navigation
* Content grids
* Pricing cards
* Product switcher
* Contact form
* Timeline
* Footer
* Typography
* Spacing
* Horizontal overflow prevention

---

## Accessibility & Motion

The project includes basic accessibility considerations such as:

* Semantic HTML elements
* Accessible form labels
* Keyboard-friendly interactive elements
* Visible focus states
* Appropriate image alternatives
* Responsive contrast
* Reduced-motion support through `prefers-reduced-motion`

---

## Deployment

The application is deployed using **Vercel**.

### Production URL

https://digital-chautari-iota.vercel.app/

---

## Assignment Scope

This project was developed as a frontend assignment using the provided Digital Chautari brand guidelines, page specifications, responsive requirements, component requirements, and interaction guidelines.

The implementation focuses on:

* Clean component architecture
* Responsive UI
* Consistent design system
* Interactive user experience
* Next.js application structure
* Production-ready deployment

---

## Author

**Bishwa Sharma**

GitHub: https://github.com/JustTheIt

LinkedIn: https://linkedin.com/in/bishwa-sharma-193798210
