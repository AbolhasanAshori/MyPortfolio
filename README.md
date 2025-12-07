# MyPortfolio

Elegant, content-first portfolio built with [Astro](https://astro.build) and TypeScript. The goal is to keep a respectful, focused single-page entry point while giving you room to grow into a full multi-page showcase.

## ✨ Tech Stack

- **Astro 5** – static-first site generation with island hydration when needed.
- **TypeScript (strict)** – enabled via Astro’s strict tsconfig for safer authoring.
- **Vanilla CSS** – inline styles + global stylesheet; ready for Tailwind/PostCSS if you choose to add them.

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start dev server (http://localhost:4321)
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

_Requirements_: Node.js 18+ (Astro’s current baseline) and npm.

## 📁 Project Structure

```
src/
 ├─ layouts/
 │   └─ BaseLayout.astro   # shared HTML shell + styling
 ├─ pages/
 │   └─ index.astro        # current “Hello World” landing page
 └─ components/            # add Astro or React/Vue/Svelte islands here
public/                    # static assets copied as-is
astro.config.mjs           # configure integrations (React, Tailwind, adapters…)
tsconfig.json              # extends astro/tsconfigs/strict
```

## 🛠️ Customization Notes

1. **Add integrations** with `npx astro add <react|tailwind|mdx|adapter>` when you want hydrated components, utility CSS, or platform deploys.
2. **Create new routes** by dropping `.astro` (or `.md/.mdx` with content collections) inside `src/pages`.
3. **Style evolution**: keep inline styles for quick iterations, or move shared tokens into `src/styles/global.css`.
4. **Content data**: fetch in frontmatter (`---`) or leverage Astro Content Collections for typed Markdown entries when you scale the portfolio.

## 🤝 Respectful Practices

- Keep the homepage lean and accessible—ship only what your audience needs.
- Embrace Astro’s “zero-JS by default.” Reach for React/Vue/Svelte islands intentionally.
- Document changes in this README as you grow the project so collaborators stay aligned.

Enjoy building! If you get stuck, run `npx astro --help` or visit the [Astro docs](https://docs.astro.build).
