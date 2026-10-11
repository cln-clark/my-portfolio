# my-portfolio

Personal portfolio of Clark Louise Navales — Software Engineer.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start the development server (Turbopack)   |
| `npm run build` | Create a production build                  |
| `npm start`     | Serve the production build                 |
| `npm run lint`  | Run ESLint                                 |

## Structure

- `app/` — pages, layout, metadata (Open Graph image, sitemap, robots), global styles
- `components/` — shared UI: header, footer, sections, gallery lightbox, theme toggle
- `content/` — typed portfolio content: profile, experience, projects, stack, gallery, case study

## Configuration

- `NEXT_PUBLIC_SITE_URL` — production URL used for canonical and Open Graph metadata (defaults to `http://localhost:3000`)
