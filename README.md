# Digital Chautari 🏔️

> Empowering Himalayan innovation with world-class digital marketing, a cinematic content creation studio, and compassionate health-tech software tailored for sustainable growth.

---

## 🌟 Overview

**Digital Chautari** is a modern, responsive web application built with [Next.js](https://nextjs.org) (App Router), TypeScript, and custom CSS design systems. Inspired by the traditional Nepali "Chautari" (a central gathering place for community conversations and connections), this digital platform connects ideas to impact across marketing, technology, and healthcare.

---

## 🚀 Key Features & Pages

- **Home (`/`)**: Dynamic hero section, impact metrics, service overviews, featured products, and community testimonials.
- **About Us (`/about`)**: Company vision, heritage, milestones, leadership, and Himalayan digital mission.
- **Services (`/services`)**: Comprehensive service offerings spanning Digital Marketing, Content Studio & Media, and Health-Tech Engineering.
- **Products (`/products`)**: Showcase of proprietary health-tech & digital solutions with interactive switchers and feature breakdowns.
- **Contact (`/contact`)**: Interactive contact form with serverless API route (`/api/contact`) and interactive Kathmandu map location widget.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (Turbopack, App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with comprehensive design token system (`globals.css`)
- **Linting & Formatting**: ESLint

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17+ or v20+) and `npm` installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/JustTheIt/Digital-Chautari.git
cd Digital-Chautari
npm install
```

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── public/                 # Static assets and SVGs
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── api/contact/    # Contact API route handler
│   │   ├── contact/        # Contact page
│   │   ├── products/       # Products showcase
│   │   ├── services/       # Services listing
│   │   ├── globals.css     # Design tokens, variables & typography
│   │   ├── layout.tsx      # Root layout & metadata
│   │   └── page.tsx        # Homepage
│   └── components/         # Reusable UI & interactive components
│       ├── Card.tsx
│       ├── ClosingCta.tsx
│       ├── ContactForm.tsx
│       ├── DarkSection.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── HeroPattern.tsx
│       ├── KathmanduMap.tsx
│       ├── ProductSwitcher.tsx
│       ├── SectionHeader.tsx
│       └── StatBar.tsx
├── package.json
└── tsconfig.json
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
