export function isNavLinkActive(p1: string, p2: string): boolean {
  //let page = new URL(`${Astro.url.origin}/${p1}`).slice(1).slice(1);
  return p1 === p2;
}
