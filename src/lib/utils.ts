import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isNavLinkActive(p1: string, p2: string): boolean {
  //let page = new URL(`${Astro.url.origin}/${p1}`).slice(1).slice(1);
  return p1 === p2;
}

