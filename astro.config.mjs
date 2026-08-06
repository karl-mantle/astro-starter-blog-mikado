// @ts-check
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site.config";
import favicons from "astro-favicons";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  integrations: [
    favicons({
      name: siteConfig.name,
      short_name: siteConfig.short_name,
      appleStatusBarStyle: "black-translucent",
      themes: ["#000", "#fff"],
      background: "#fff",
      manifest: {
        start_url: siteConfig.url.toString(),
        orientation: "any",
        display: "standalone",
        display_override: ["window-controls-overlay", "minimal-ui"],
      },
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,
        appleStartup: false,
        windows: false,
        yandex: false,
      },
      loadManifestWithCredentials: false,
      manifestRelativePaths: false,
      manifestMaskable: false,
      cacheBustingQueryParam: null,
      pixel_art: false,
      output: {
        images: true,
        files: true,
        html: true,
      },
      version: "1.0.0",
    }),
    icon({
      iconDir: "src/assets/icons",
      // TODO: add used icons here https://www.astroicon.dev/reference/configuration
    }),
    mdx(),
    partytown(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    }),
    sitemap(),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
