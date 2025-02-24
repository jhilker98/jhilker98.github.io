import { type BlogPost } from "~/content.config";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

async function getPosts() {
  const posts: BlogPost[] = (
    await getCollection("blog", ({ data }) => {
      return import.meta.env.PROD ? data.draft !== true : true;
    })
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return posts.map((post: BlogPost) => ({
    slug: post.id,
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags?.flat(),
    categories: post.data.categories,
    date: post.data.pubDate,
    body: post.body,
  }));
}

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(await getPosts()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
