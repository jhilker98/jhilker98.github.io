/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      },
      colors: {
        branding: {
          black: "#091725",
          white: "#f3f7fc",
          gray: {
            DEFAULT: "#d1d3d7",
            50: "#f8f9f8",
            100: "#eeeff1",
            200: "#d1d3d7",
            300: "#b8b8c3",
            400: "#8f909f",
            500: "#736f7e",
            600: "#5e5462",
            700: "#48404b",
            800: "#322c34",
            900: "#1f1c22",
          },
          navy: {
            DEFAULT: "#1e4c7b",
            50: "#f5f9fa",
            100: "#dff1fa",
            200: "#bae0f5",
            300: "#88c0e6",
            400: "#549bd2",
            500: "#3f79bd",
            600: "#345ea5",
            700: "#1e4c7b",
            800: "#1e2f5c",
            900: "#111d3b",
          },
          brown: {
            DEFAULT: "#86694b",
            50: "#fbfaf7",
            100: "#f7f0df",
            200: "#efdbba",
            300: "#d8b588",
            400: "#bd8a58",
            500: "#86694b",
            600: "#824e24",
            700: "#623a1d",
            800: "#432816",
            900: "#2a180e",
          },
        },
      },
      typography: (theme: PluginAPI["theme"]) => ({
        site: {
          css: {
            "--tw-prose-links": theme("colors.branding.navy[600]"),
          },
        },
      }),
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
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },

  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("daisyui"),
    require("tailwindcss-animated"),
  ],
} satisfies Config;
