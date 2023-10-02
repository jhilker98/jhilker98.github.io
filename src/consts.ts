import type { Link, SocialLink, SiteConfig } from "@types";

export const NAV_LINKS: Link[] = [
  { href: "/", name: "Home" },
  { href: "/resume/", name: "Resumé" },
  { href: "/projects/", name: "Projects" },
  {
    name: "Blog",
    href: "/blog/",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "socials/fa6-brands/gitlab",
    name: "GitLab",
    href: "https://gitlab.com/jhilker98/",
  },
  {
    icon: "socials/fa6-brands/github",
    name: "GitHub",
    href: "https://github.com/jhilker98/",
  },
  {
    icon: "socials/fa6-brands/linkedin-in",
    name: "LinkedIn",
    href: "https://linked.com/in/jhilker/",
  },
  {
    icon: "socials/fa6-brands/dev",
    name: "Dev.to",
    href: "https://dev.to/jhilker",
  },
  {
    icon: "socials/fa6-brands/codepen",
    name: "CodePen",
    href: "https://codepen.io/hilkerj/",
  },
  {
    icon: "socials/ps/rss",
    name: "RSS Feed",
    href: "/blog/feed.xml",
  },
];

export const SITE_META: SiteConfig = {
  title: "Jacob's Website",
  description: "The personal website and blog of Jacob Hilker.",
  author: "Jacob Hilker",
  availableForHire: true,
  tagline:
    "A front-end developer, who enjoys using Emacs, Hugo, Python, and Tailwind.",
  socialLinks: SOCIAL_LINKS,
};

export const SIDEBAR_IMAGE = "/img/sidebar.svg";
export const RECENT_POST_COUNT: number = 4;
export const FEATURED_PROJECT_COUNT: number = 3;
