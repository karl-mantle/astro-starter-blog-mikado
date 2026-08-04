# astro-starter-blog-mikado

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://github.com/karl-mantle/astro-starter-blog-mikado/)

[Template Preview](https://mikado.karlmantle.workers.dev/)

<!-- dash-content-start -->

A blog template built on Astro and optimised for deployment on Cloudflare Workers. This template includes built-in search, multiple analytics integrations, interactive media (maps, galleries, embeds), comprehensive accessibility features, and built on top of Astro's own [Blog starter template](https://astro-blog-starter-template.templates.workers.dev).

**Perfect for:** Personal blogs, technical writing platforms, knowledge bases, and portfolio sites.

### Key Features

#### Search & Discovery

- **Built-in Search** — Pagefind client-side full-text search with no external APIs (free, private, fast)
- **Post Archive & Tag Cloud** — Automated sorting by date, category, and tag
- **Related Posts** — Automatic discovery based on shared tags

#### Analytics

- **Analytics Integrations** — Fathom, GA4, Google Tag Manager, Metrical, Umami (choose one or more)
- **Partytown Integration** — Offload analytics to a web worker (non-blocking)
- **Search Engine Verification** — Pre-configured snippets for Google, Bing, Baidu, Pinterest, Yandex

#### Rich Media & Interactive Content

- **YouTube Embeds** — Lightweight `lite-youtube-embed` with custom thumbnail options
- **Interactive Maps** — Leaflet.js integration with popup markers and custom tile layers
- **Image Galleries** — Swiper carousel with pagination, navigation, and touch support
- **Social Sharing** — Pre-configured share links (8 platforms: Email, Facebook, LinkedIn, Medium, Pinterest, Reddit, WhatsApp, X)
- **Web3 Forms** — Support for decentralized form submissions

#### Content Organization

- **3 Typed Collections** — Posts (Markdown/MDX), Pages (MDX), Profiles (YAML) with Zod schema validation
- **Auto-generated Slugs** — URL-safe slugs created automatically from titles
- **Per-Page Feature Flags** — Conditionally load components (maps, verification) to reduce bundle size
- **Markdown & MDX Support** — Rich content with embedded interactive components

#### Accessibility

- **Accessibility Plugin Enforcement** — ESLint A11y plugin catches issues at build time
- **Skip Links** — Keyboard navigation shortcuts to main content
- **Dark/Light Theme** — CSS custom property-based theming with automatic detection
- **Scroll-to-Top Button** — Keyboard-accessible utility
- **Table of Contents Navigation** — Auto-generated from heading hierarchy

#### Performance & SEO

- **?/100 Lighthouse** — Production-optimised performance
- **Schema.org Structured Data** — Article, webpage, and collection page schemas
- **Canonical URLs & OpenGraph** — SEO-friendly metadata
- **Responsive Image Optimization** — Automatic format negotiation (WebP, lazy loading)
- **Sitemap & RSS Feed** — Auto-generated for discoverability
- **PWA Icons** — Maskable icons and multiple sizes via `astro-favicons`

#### Developers

- **TypeScript Throughout** — Type-safe components and Zod schema validation
- **TailwindCSS 4** — Modern CSS framework with custom Mikado typography and color system
- **Modular Components** — Organized by layout, collections, UI, MDX, and measurement
- **Cloudflare Workers** — Deploy as full SSR-capable platform, not just static hosting

<!-- dash-content-end -->

## Quick Start

### Clone & Setup

```bash
git clone https://github.com/karl-mantle/astro-starter-blog-mikado/
cd astro-starter-blog-mikado
npm install
npm run dev
```

Then setup:

- **Site details**: Edit [src/site.config.ts](src/site.config.ts)
- **Analytics**: Enable providers in [src/components/measurement/](src/components/measurement/)
- **Theme setup**: Modify [tailwind.config.js](tailwind.config.js) and [src/styles/global.css](src/styles/global.css)
- **Basic content**: Add posts to [src/content/posts/](src/content/posts/) or pages to [src/content/pages/](src/content/pages/)

## Project Structure

```
src/
├── components/
│   ├── collections/      # Post cards, archives, related posts, tag clouds
│   ├── layout/           # Header, footer, base HTML structure
│   ├── mdx/              # Rich content components (YouTube, maps, galleries)
│   ├── measurement/      # Analytics & verification snippets
│   └── ui/               # Buttons, pagination, A11y features, TOC
├── content/
│   ├── posts/            # Blog posts (Markdown/MDX)
│   ├── pages/            # Static pages (MDX only)
│   └── profiles/         # Author profiles (YAML)
├── lib/
│   ├── collections/      # Basic collection functions
│   ├── schema/           # Schema definitions (article, webpage, etc.)
│   ├── share.ts          # Social share URL builder
│   └── toc.ts            # Table of contents generator
├── pages/
│   ├── [...pages].astro  # Dynamic page routing
│   ├── search.astro      # Search results page + pagefind
│   ├── index.astro       # Home page
│   ├── rss.xml.ts        # RSS feed
│   └── [posts]/          # Post detail & archive pages dynamic routing
└── styles/
    └── global.css        # Global styles & CSS custom properties

public/
└── pagefind/            # Search index (generated at build time)
```

### Key Configuration Files

| File                                           | Purpose                                        |
| ---------------------------------------------- | ---------------------------------------------- |
| [astro.config.mjs](astro.config.mjs)           | Astro project settings, integrations, adapter  |
| [tailwind.config.js](tailwind.config.js)       | Tailwind CSS theme (colours, typography)       |
| [tsconfig.json](tsconfig.json)                 | TypeScript configuration                       |
| [src/site.config.ts](src/site.config.ts)       | Site metadata (name, description, author, URL) |
| [src/content.config.ts](src/content.config.ts) | Content collection definitions (Zod schema)    |
| [pagefind.yml](pagefind.yml)                   | Search indexing configuration                  |
| [wrangler.json](wrangler.json)                 | Cloudflare Workers deployment config           |

## Customisation Guide

### Change Your Site Config

Edit [src/site.config.ts](src/site.config.ts):

```typescript
export const generalConfig = {
  name: "Your Blog Name",
  description: "Your blog description",
  url: "https://yourdomain.com",
  // ... more properties
};
```

### Enable Analytics

Analytics are opt-in. Choose one or multiple providers in [src/components/measurement/snippets/](src/components/measurement/snippets/):

1. **Fathom** — Privacy-focused, GDPR-compliant
2. **Google Analytics 4** — Industry standard
3. **Google Tag Manager** — Complex event tracking
4. **Metrical** — European alternative
5. **Umami** — Open-source, lightweight

Add your provider ID to [src/site.config.ts](src/site.config.ts), and enable the snippet in your layout.

### Customize Styling

The template uses **TailwindCSS 4** with a custom "Mikado" color system. Modify:

- **General** — [src/styles/global.css](src/styles/global.css) for customising the theme
- **Tailwind Typography** — Colours and customisations are set in [tailwind.config.js](tailwind.config.js)
- **Colour** — [src/styles/global.css](src/styles/global.css) defines the palette via `--color-mikado-*`

### Add Interactive Components

The template includes MDX components for rich content:

```mdx
{/* YouTube embed */}

<YouTube
  url="https://www.youtube.com/watch?v=CHSnz0bCaUk"
  title="Example title to display"
  image={{
    src: PreviewImage,
    alt: "Example alt text here",
  }}
/>

{/* Interactive map */}

<LeafletMap
  mapOptions={{
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    id: "map-test-new-york",
    latitude: 40.659865,
    longitude: -74.118092,
    tileLayer: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    zoom: 10,
  }}
/>

{/* Image gallery */}

<GalleryCarousel
  images={[
    { src: Image1, alt: "Low angle photography of grey high rise building" },
    { src: Image2, alt: "Greyscale photo of a ferris wheel" },
    { src: Image3, alt: "Person's right hand near newspaper" },
    { src: Image4, alt: "Greyscale photo of glass window" },
  ]}
/>
```

### Create New Collections

Add new content types by extending [src/content.config.ts](src/content.config.ts) with Zod schemas and creating the directory in [src/content/](src/content/).

## Commands

All commands are run from the root of the project:

| Command             | Action                                             | Environment |
| ------------------- | -------------------------------------------------- | ----------- |
| `npm install`       | Install dependencies                               | Local       |
| `npm run dev`       | Start dev server at `localhost:4321`               | Local       |
| `npm run build`     | Build production site (includes Pagefind indexing) | Local       |
| `npm run preview`   | Preview build locally with Wrangler                | Local       |
| `npm run check`     | Lint, type-check, and dry-run deploy               | Local       |
| `npm run deploy`    | Deploy to Cloudflare Workers                       | Production  |
| `npm run astro ...` | Run Astro CLI commands                             | Local       |

## Deployment

### Deploy to Cloudflare Workers

1. **Connect your repository** to Cloudflare Pages or use the deploy button above
2. **Trigger deploy**:
   ```bash
   npm run build && npm run deploy
   ```

The template deploys as [Cloudflare Static Assets](https://developers.cloudflare.com/workers/static-assets/) but can scale to full SSR if needed.

### Preview Before Deploying

```bash
npm run preview
```

This runs the build locally and shows you what will be deployed.

## Search Powered by Pagefind

Search is built-in via [Pagefind](https://pagefind.app/), a free, static search engine. No external APIs or infrastructure needed.

- Configure in [pagefind.yml](pagefind.yml)
- Access search via `/search` route
- Query parameter: `?q=search+term`

Example query: [/search?q=typescript](/search?q=typescript)

## Accessibility

The template enforces accessibility best practices:

- **ESLint A11y Plugin** catches markup issues at build time
- **Skip Links** for keyboard navigation
- **Dark/Light Theme** with automatic system preference detection
- **Semantic HTML** throughout
- **ARIA Labels** on interactive components
- **Keyboard Navigation** for buttons, TOC, scroll-to-top

Check accessibility: `npm run astro -- check`

## Tech Stack

- **Astro 5** — Static site generation with optional SSR on Cloudflare
- **TypeScript 5** — Type-safe code throughout
- **Tailwind CSS 4** — Utility-first CSS with modern features
- **MDX 4** — Markdown with embedded React/Astro components
- **Zod** — TypeScript-first schema validation
- **Leaflet.js** — Interactive maps
- **Swiper** — Touch-enabled carousels
- **Pagefind** — Client-side full-text search

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Pagefind Docs](https://pagefind.app/)

## Tips

**New to Astro?**

1. Start with `npm run dev` to see the template in action
2. Edit [src/content/posts/](src/content/posts/) to add your first post
3. Customize [src/site.config.ts](src/site.config.ts) with your details

**Want to add a new page?**

1. Create a new `.astro` file in [src/pages/](src/pages/) or `.mdx` in [src/content/pages/](src/content/pages/)
2. Files are automatically routed based on filename

**Want to extend components?**

1. Edit files in [src/components/](src/components/)
2. Import in your pages using `import Component from '../components/path'`

**Want to change analytics?**

1. Choose your provider in [src/components/measurement/snippets/](src/components/measurement/snippets/)
2. Add credentials to [src/site.config.ts](src/site.config.ts)
3. Import the snippet in your layout

## License & Credit

This template is forked from the [Astro Blog Starter Kit](https://github.com/withastro/astro) and expanded with additional features. Original design inspired by [Bear Blog](https://github.com/HermanMartinus/bearblog/).

This template is released under the MIT License. See the LICENSE file for details.
