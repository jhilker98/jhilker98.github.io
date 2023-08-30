import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';


// https://astro.build/config
export default defineConfig({
  site: "https://jhilker.com",
  integrations: [mdx(), tailwind(), alpinejs()],

  markdown: {
    drafts: true,
    rehypePlugins: [
      rehypeHeadingIds,
      remarkToc,
      rehypeAccessibleEmojis
    ],
    shikiConfig: {
      theme: "material-theme-darker",
    },
  }
});
