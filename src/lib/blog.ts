import type { BlogPost } from "@/content.config";
import getReadingTime from "reading-time";

/**
 * 
 * @param {Date} d The publication date of the post.
 * @returns {string} A slugified string in the format "YYYY/MM" representing the year and month of the date.
 */
export function slugifyPostDate(d: Date): string {
  const f = {
    year: new Intl.DateTimeFormat("en-US", { year: "numeric" }),
    month: new Intl.DateTimeFormat("en-US", { month: "2-digit" }),
  };

  return `${f.year.format(d)}/${f.month.format(d)}`;
}


/**
 * Takes in a string and returns a slugified version of it. 
 * @param {string} text The URL to be slugified.
 * @returns {string} The slugified version of the input string.
 */
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

/**
 * Filters a list of posts by the name of the series, sorted by the order of each post in that series.
 * @param {string} series The name of the series. Is slugified in the function to compare totals.
 * @param {blogPost[]} posts The list of blog posts to search through.
 * @return {*}  {BlogPost[]} The array of blog posts in the series, sorted by order in series.
 */

export function findPostsInSeries(
  series: string,
  posts: BlogPost[],
): BlogPost[] {
  const filteredPosts = posts.filter(
    (post: BlogPost) =>
      slugifyUrl(post.data.series.name) === slugifyUrl(series),
  );
  return filteredPosts.sort(
    (a: BlogPost, b: BlogPost) => a.data.series.weight - b.data.series.weight,
  );
}

/**
 * Formats a date into a human-readable string for blog posts.
 * @param {Date} date The publication date of the post.
 * @returns {string} A formatted date string in the format "D Mon. YYYY".
 */
export function formatPostDate(date: Date): string {
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

/**
 * Creates an array of hashtags from an array of tags.
 * @param {string[]} originalTags The list of tags from a given post.
 * @returns {string[]} An array of hashtags created from the original tags.
 */
export function hashtagPostTags(originalTags: string[]) {
  const tags: string[] = [];
  for (const tag of originalTags) {
    tags.push(`#${tag}`);
  }
  return tags;
}

/**
 * Calculates the estimated reading time for a given article.
 * @param {string} article The article content as a string.
 * @returns {string} The estimated reading time in a human-readable format.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function calcReadingTime(article: string): string {
  return getReadingTime(article.trim()).text;
}

/**
 * converts a string to Title Case.
 * @param {string} str The string to be converted to Title Case.
 * @returns {string} The input string converted to Title Case.
 */
export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
