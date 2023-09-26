import type { BlogPost } from "@content";
import { slugifyUrl } from "./utils";
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
