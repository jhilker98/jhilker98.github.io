export function isNavLinkActive(p1: string, p2: string): boolean {
  //let page = new URL(`${Astro.url.origin}/${p1}`).slice(1).slice(1);
  return p1 === p2;
}

export function formatPostDate(date: Date) {
  return new Date(date).toLocaleDateString("en-GB", {
    timeZone: "UTC",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function slugifyPostDate(d: Date) {
  const f = {
    year: new Intl.DateTimeFormat("en-US", { year: "numeric" }),
    month: new Intl.DateTimeFormat("en-US", { month: "2-digit" }),
  };

  return `${f.year.format(d)}/${f.month.format(d)}`;
}
