import { getSiteUrl } from "~/lib/domain";

export const domainConfig = {
  development: {
    site: "http://localhost:4321/",
  },
  ci: {
    site: "http://localhost:4321/",
  },
  staging: {
    site: "https://mikado.karlmantle.workers.dev/",
  },
  production: {
    site: "https://mikado.karlmantle.workers.dev/",
  },
};

export const siteConfig = {
  locale: "en-GB",
  url: getSiteUrl(domainConfig),
  name: "Astro Starter Blog: Mikado",
  short_name: "Mikado Blog",
  title_separator: "~",
  description:
    "An accessible, SEO-friendly starter template for building an Astro blog hosted on a Cloudflare Worker.",
  logo: {
    src: "/logo.webp",
    height: 512,
    width: 512,
  },
  ogImage: {
    src: "/opengraph.webp",
    height: 630,
    width: 1200,
  },
};

export const measurementConfig = {
  partytown: false,
  baidu_verification: "",
  bing_verificaton: "",
  facebook_verification: "",
  google_ga4_id: "",
  google_gtm_id: "",
  google_verification: "",
  fathom_id: "",
  metrical_id: "",
  pinterest_verification: "",
  umami_id: "",
  umami_source: "",
  yandex_verification: "",
};

export const collectionsConfig = {
  posts_per_page: 9,
  permalink_posts: "posts",
  permalink_posts_entry: "posts/entry/",
  permalink_posts_category: "posts/category/",
  permalink_posts_tag: "posts/tag/",
};

export const imagesConfig = {
  full: {
    sizes: "(max-width: 640px) 480px, (max-width: 1024px) 1024px, 1920px",
    widths: [480, 1024, 1920],
  },
  half: {
    sizes: "(max-width: 640px) 480px, 960px",
    widths: [480, 960],
  },
  third: {
    sizes: "(max-width: 640px) 480px, 640px",
    widths: [480, 640],
  },
  thumbnail: {
    height: 64,
    width: 64,
  },
};

export const socialLinks = [
  {
    href: "https://www.karlmantle.com",
    icon: "material-symbols:globe-uk-sharp",
    label: "Visit my website",
  },
  {
    href: "https://github.com/karl-mantle/astro-starter-blog-mikado/",
    icon: "simple-icons:github",
    label: "Visit the GitHub repo",
  },
  {
    href: "/rss.xml",
    icon: "material-symbols:rss-feed",
    label: "Subscribe to RSS feed",
  },
];
