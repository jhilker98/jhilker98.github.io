
import getReadingTime from "reading-time";

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

export function isNavLinkActive(p1: string, p2: string): boolean {
    //let page = new URL(`${Astro.url.origin}/${p1}`).slice(1).slice(1);
    return p1 === p2;
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any


export function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}