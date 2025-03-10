export function isNavLinkActive(p1: string, p2: string): boolean {
  //let page = new URL(`${Astro.url.origin}/${p1}`).slice(1).slice(1);
  return p1 === p2;
}

export function formatPostDate(date: Date) {
  const dateString = new Date(date)
    .toLocaleDateString("en-GB", {
      timeZone: "UTC",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ");

  return `${dateString[0]} ${dateString[1]}. ${dateString[2]}`;
}

export function slugifyPostDate(d: Date) {
  const f = {
    year: new Intl.DateTimeFormat("en-US", { year: "numeric" }),
    month: new Intl.DateTimeFormat("en-US", { month: "2-digit" }),
  };

  return `${f.year.format(d)}/${f.month.format(d)}`;
}

export function hashtagPostTags(originalTags: string[]) {
  const tags: string[] = [];
  for (const tag of originalTags) {
    tags.push(`#${tag}`);
  }
  return tags;
}

export function slugifyUrl(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

import getReadingTime from "reading-time";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function calcReadingTime(article: string): string {
  return getReadingTime(article.trim()).text;
}

export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

