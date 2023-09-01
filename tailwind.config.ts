/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    gridTemplateAreas: {
      mobile: ["header header header", "main main main", "main main main"],
      desktop: [
        "sidebar header header",
        "sidebar main main",
        "sidebar main main",
      ],
    },
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
        mono: ['"Iosevka"', ...defaultTheme.fontFamily.mono],
      },
      gridTemplateColumns: {
        layout: "0.7fr 2.3fr 1fr",
      },
      gridTemplateRows: {
        layout: "0.2fr 2.6fr 0.2fr",
        "0": "0fr",
      },
      colors: {
        branding: {
          black: "#091725",
          white: "#f3f7fc",
          neutral: {
            "50": "#f3f7fc",
            "100": "#eaf1f6",
            "200": "#cfe0eb",
            "300": "#a2bfd2",
            "400": "#6d98b0",
            "500": "#52768f",
            "600": "#425b71",
            "700": "#344455",
            "800": "#242e3b",
            "900": "#091725",
          },
          navy: {
            DEFAULT: "#1e4c7b",
            "50": "#f5f9fa",
            "100": "#dff1fa",
            "200": "#bae0f5",
            "300": "#88c0e6",
            "400": "#549bd2",
            "500": "#3f79bd",
            "600": "#345ea5",
            "700": "#1e4c7b",
            "800": "#1e2f5c",
            "900": "#111d3b",
          },
          gray: {
            DEFAULT: "#d1d3d7",
            "50": "#f3f7fc",
            "100": "#eeeff1",
            "200": "#d1d3d7",
            "300": "#b8b8c3",
            "400": "#8f909f",
            "500": "#736f7e",
            "600": "#5e5462",
            "700": "#48404b",
            "800": "#322c34",
            "900": "#091725",
          },
          brown: {
            DEFAULT: "#86694b",
            "50": "#fbfaf7",
            "100": "#f7f0df",
            "200": "#efdbba",
            "300": "#d8b588",
            "400": "#bd8a58",
            "500": "#86694b",
            "600": "#824e24",
            "700": "#623a1d",
            "800": "#432816",
            "900": "#2a180e",
          },
          blue: {
            DEFAULT: "#216dca",
            "50": "#f5f9fa",
            "100": "#dff1fc",
            "200": "#badef9",
            "300": "#8bbdee",
            "400": "#5d97e1",
            "500": "#216dca",
            "600": "#3b57c2",
            "700": "#2f419f",
            "800": "#212c74",
            "900": "#131b49",
          },
          green: {
            DEFAULT: "#287128",
            "50": "#f4f7f3",
            "100": "#e4f0e1",
            "200": "#bee6bc",
            "300": "#84cb87",
            "400": "#3daa55",
            "500": "#2a8f31",
            "600": "#287128",
            "700": "#1f5c1d",
            "800": "#173e18",
            "900": "#102613",
          },
          yellow: {
            DEFAULT: "#fbbd23",
            "50": "#faf9f1",
            "100": "#f8efa4",
            "200": "#efdf62",
            "300": "#fbbd23",
            "400": "#ac951b",
            "500": "#89780c",
            "600": "#6e5f08",
            "700": "#554808",
            "800": "#3a3108",
            "900": "#281e07",
          },
          red: {
            DEFAULT: "#aa2727",
            "50": "#fdfcfa",
            "100": "#fbf1eb",
            "200": "#f8d1d5",
            "300": "#eea4ad",
            "400": "#e97481",
            "500": "#db4f5e",
            "600": "#c33541",
            "700": "#aa2727",
            "800": "#6f1c1f",
            "900": "#431111",
          },
        },
      },
      typography: (theme: PluginAPI["theme"]) => ({
        site: {
          css: {
            "--tw-prose-body": theme("colors.branding.gray[700]"),
            "--tw-prose-invert-body": theme("colors.branding.gray[300]"),
            "--tw-prose-links": theme("colors.branding.navy[600]"),
            "--tw-prose-invert-links": theme("colors.branding.navy[400]"),
          },
        },
      }),
      transitionProperty: {
        gridRows: "grid-template-rows",
      },
      keyframes: {
        slideIn: {
          from: {
            "grid-template-rows": "0fr",
          },
          to: {
            "grid-template-rows": "1fr",
          },
        },
      },
      animation: {
        slideIn: "slideIn 0.15s 0s 1 normal forwards",
      },
    },
  },

  daisyui: {
    base: false,
    styled: false,
    prefix: "daisy-",
    themes: [
      {
        mytheme: {
          primary: "#1e4c7b",
          secondary: "#d1d3d7",
          accent: "#86694b",
          neutral: "#020203",
          "base-100": "#f1f2f3",
          info: "#216dca",
          success: "#287128",
          warning: "#fbbd23",
          error: "#aa2727",
        },
      },
    ],
  },

  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
} satisfies Config;
