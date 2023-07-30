import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import { rehypeHeadingIds } from '@astrojs/markdown-remark';



// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), alpinejs()],
  experimental: {
    assets: true,
  },
  markdown: {
    drafts: true,
    rehypePlugins: [
      rehypeHeadingIds
    ],
    shikiConfig: {
      theme: "material-theme-darker",
    },
  }
});
