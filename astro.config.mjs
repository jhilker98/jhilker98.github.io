import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), alpinejs()],
  experimental: {
    assets: true,
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "material-theme-darker",
    },
  }
});
