interface NavLink {
  href: string;
  name: string;
  children?: NavLink[];
}

interface SocialLink extends Omit<"NavLink", "children"> {
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

export const NAV_LINKS: NavLink[] = [];

export const SITE_META: SiteConfig = {
  title: "Jacob's Website",
  description: "The personal website and blog of Jacob Hilker.",
  author: "Jacob Hilker",
  availableForHire: true,
  tagline:
    "A front-end developer, who enjoys using Emacs, Hugo, Python, and Tailwind.",
};
