# marco-mazzai-website

Personal portfolio and blog for Marco Mazzai, built with [Astro](https://astro.build).

## Tech stack

- **Astro** — static site generation, content collections, routing
- **SCSS** — styling (`src/styles`)
- **wa11y-ui** — accessible Web Components (accordion, etc.)
- **astro-icon** — inline SVG icons from the Phosphor Iconify set
- **Storybook** — component library (`src/components`), with autodocs and an axe-core accessibility panel per story

All pages are statically prerendered; there is no client-side JS framework runtime shipped to the browser.

## Requirements

Node **>=22.12.0** (see `.nvmrc`). If Node is managed via Homebrew rather than nvm/fnm:

```sh
brew install node@22
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"  # for this shell session
```

## Project structure

```
src/
├── components/     Astro components, one .stories.ts per component
│   ├── atoms/        Avatar, IconLink, LinkButton
│   ├── molecules/    ChipList, GoToEntry, ProjectIframe
│   ├── organisms/    Navigation, Footer — used on every page
│   ├── sections/     Full page sections (HeroSection, AboutSection, ...)
│   └── templates/    Components that are an entire page's content on
│                     their own (BlogEntry, ProjectEntry)
├── content/        Content collections
│   ├── blog/           blog posts (Markdown)
│   ├── copy/           site copy (home, about, footer, navigation, ...)
│   └── petProjects/    pet project entries
├── layouts/        BaseLayout.astro (head/meta, nav, footer shell)
├── lib/            Shared utilities (date formatting)
├── pages/           File-based routes
└── styles/          Global SCSS, tokens, component styles
```

Collection schemas and shared page metadata (titles, SEO defaults) live in `src/content.config.ts`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                            |
| :---------------------- | :------------------------------------------------- |
| `npm install`            | Install dependencies                               |
| `npm run dev`             | Start local dev server at `localhost:4321`         |
| `npm run build`           | Build the production site to `./dist/`             |
| `npm run preview`         | Preview the production build locally               |
| `npm run astro ...`       | Run Astro CLI commands, e.g. `astro check`         |
| `npm run storybook`       | Start Storybook at `localhost:6006`                |
| `npm run build-storybook` | Currently broken — `astro-icon`'s virtual module doesn't resolve in the storybook-astro static-build pipeline (unrelated to `astro build`, which is unaffected). `npm run storybook` (dev mode) is unaffected and is the supported way to browse the library today. |
