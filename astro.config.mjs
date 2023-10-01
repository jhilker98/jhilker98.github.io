import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import remarkToc from 'remark-toc';


// https://astro.build/config
export default defineConfig({
  site: "https://jhilker.com",
  outDir: "public",
  publicDir: "static",
  integrations: [mdx(), tailwind(), alpinejs()],

  markdown: {
    drafts: true,
    rehypePlugins: [
      rehypeHeadingIds,
      remarkToc,
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
  },


});
