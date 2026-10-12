# Personal Portfolio

[![Production Deployment](https://img.shields.io/badge/Vercel-Production-black?style=flat&logo=vercel)](https://clarklouise.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

Personal portfolio of Clark Louise Navales, Software Engineer. Projects, experience, and learning notes in a graphite terminal UI.

👉 **Live Preview:** [clarklouise.vercel.app](https://clarklouise.vercel.app/)

---

## Features

- **Graphite Terminal Theme:** A clean, developer-focused aesthetic built with custom typography and dark-mode styling.
- **App Router Architecture:** Leverages Next.js 16 App Router for optimized performance, server components, and dynamic routing.
- **Typed Content Structure:** Modular data files managing experience, project highlights, tech stack, and interactive galleries.
- **Responsive & Optimized:** Fully optimized layout with automated Open Graph metadata, sitemaps, and robots configuration.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Project Structure

```tree
├── app/                  # Pages, layouts, metadata (OG image, sitemap, robots), global styles
├── components/           # Shared UI (header, footer, sections, gallery lightbox, theme toggle)
├── content/              # Typed portfolio content (profile, experience, projects, stack, gallery)
├── public/images/        # Static assets and media files
└── package.json          # Project dependencies and build scripts
