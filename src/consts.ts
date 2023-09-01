import { z } from "astro/zod";

type Link = {
  name: string;
  href: string;
};

interface NavLink extends Link {
  children?: Link[];
}

export interface SocialLink extends Link {
  icon: string;
}

interface SiteConfig {
  title: string;
  description: string;
  author: string;
  availableForHire: boolean;
  tagline: string;
  socialLinks?: SocialLink[];
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", name: "Home" },
  { href: "/resume/", name: "Resumé" },
  { href: "/blog/", name: "Blog" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "fa6-brands:gitlab",
    name: "GitLab",
    href: "https://gitlab.com/jhilker98/",
  },
  {
    icon: "fa6-brands:github",
    name: "GitHub",
    href: "https://github.com/jhilker98/",
  },
  {
    icon: "fa6-brands:linkedin-in",
    name: "LinkedIn",
    href: "https://linked.com/in/jhilker/",
  },
  {
    icon: "fa6-brands:dev",
    name: "Dev.to",
    href: "https://dev.to/jhilker",
  },
  {
    icon: "fa6-brands:codepen",
    name: "CodePen",
    href: "https://codepen.io/hilkerj/",
  },
  {
    icon: "ps:rss",
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
