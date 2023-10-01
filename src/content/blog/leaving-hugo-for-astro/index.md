---
title: "Why I Left Hugo for Astro"
draft: true
pubDate: 2023-09-21
description: "While Hugo is great, I wanted to try some new things out with Astro. Here's what I learned."
cover: "./img/cover.png"
coverAlt: "The distracted boyfriend meme, but with Hugo, Astro, and myself."
coverClasses:
 - "h-48"
 - "object-[center_-75px]"

tags:
 - Webdev
 - Hugo
---
Although I've been a fan of the Hugo static site generator for quite some time now, I've decided to redesign my site and migrate away from Hugo to [Astro](https://astro.build), a relatively new site generator that can handle both server-side rendering and static site generation.

I switched away from it for a couple of reasons:
- **Easier templating**. Astro uses a JSX-esque templating language for handling dynamic content, while Hugo uses its own Go-based templating language. For an example of Go-based templating, see [this post](/blog/2021/02/featuring-content-in-hugo). The same code in Astro would look something like this (assuming I am using Astro's [content collections](https://docs.astro.build/en/guides/content-collections) API):
```astro
---
const posts = await getCollection("blog", ({data}) => {
    return import.meta.env.PROD ? 
    data.featured == true && data.draft !== true
    : data.featured == true && true;
});
// the rest of your code for the component here
---
<ul class="posts-list">
{
  posts.slice(0, 5).map((post) => (
    <li class="posts-list-item">
        <a href=`/blog/${post.slug}` class="posts-list-item-title">
        {post.data.title}
        </a>
        <span class="posts-list-item-description">
            {post.data.date} // normally just the date, but you can write a function to format it
        </span>
    </li>
  ))  
}
</ul>
```

- **Much better documentation**. Although this might not seem like a huge issue, since there are a variety of blog posts about Hugo, including on this blog, the actual documentation for Hugo leaves much to be desired, in my opinion.