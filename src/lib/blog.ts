import type { BlogPost } from "@/content.config";
import { slugifyUrl } from "./site";
import getReadingTime from "reading-time";
/**
 * Filters a list of posts by the name of the series, sorted by the order of each post in that series.
 * @param {string} series The name of the series. Is slugified in the function to compare totals.
 * @param {blogPost[]} posts The list of blog posts to search through.
 * @return {*}  {BlogPost[]} The array of blog posts in the series, sorted by order in series.
 */
export function findPostsInSeries(
  series: string,
  posts: blogPost[],
): BlogPost[] {
  const filteredPosts = posts.filter(
    (post: BlogPost) =>
      slugifyUrl(post.data.series.name) === slugifyUrl(series),
  );
  return filteredPosts.sort(
    (a: BlogPost, b: BlogPost) => a.data.series.order - b.data.series.order,
  );
}

export function calcReadingTime(article: string): string {
  return getReadingTime(article.trim()).text;
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



