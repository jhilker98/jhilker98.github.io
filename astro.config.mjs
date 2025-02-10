import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import remarkToc from 'remark-toc';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import icon from "astro-icon";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jhilker.com",
  outDir: "public",
  publicDir: "static",
  integrations: [mdx(), alpinejs(), sitemap(), robotsTxt(), icon(), react()],

  markdown: {
    rehypePlugins: [rehypeHeadingIds, remarkToc],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});