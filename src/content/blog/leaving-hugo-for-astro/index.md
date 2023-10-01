---
title: "Why I Left Hugo for Astro"
draft: false
pubDate: 2023-10-01
description: "While Hugo is great, I wanted to try some new things out with Astro. Here's what I learned."
cover: "./img/cover.png"
coverAlt: "The distracted boyfriend meme, but with Hugo, Astro, and myself."
coverClasses:
 - "h-48"
 - "object-[center_-75px]"

tags:
 - Webdev
 - Hugo
 - Astro
---
Although I've been a fan of the Hugo static site generator for quite some time now, I've decided to redesign my site and migrate away from Hugo to [Astro](https://astro.build), a relatively new site generator that can handle both server-side rendering and static site generation.

I switched away from it for a couple of reasons:
- **Easier templating.** Astro uses a JSX-esque templating language for handling dynamic content, while Hugo uses its own Go-based templating language. For an example of Go-based templating, see [this post](/blog/2021/02/featuring-content-in-hugo). The same code in Astro would look something like this (assuming I am using Astro's [content collections](https://docs.astro.build/en/guides/content-collections) API):
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

- **Much better documentation.** Although this might not seem like a huge issue, since there are a variety of blog posts about Hugo, including on this blog, the actual documentation for Hugo leaves much to be desired, in my opinion.

- **Easier Tailwind Integration.**  With Hugo, getting Tailwind integrated was almost a pain in my opinion, requiring you to export a `hugo_stats.json` file which had all the classes in your content in order to get the JIT mode of Tailwind working (see [this post](https://www.brycewray.com/posts/2022/03/making-tailwind-jit-work-hugo-version-3-edition/) for more information). While Hugo v112.0 fixed the issue, having to go through all those extra steps made it a hassle to work with Tailwind in Hugo, whereas with Astro I just have to do `npx astro add tailwind` and follow the prompts and I immediately have access to Tailwind with the JIT mode out of the box.

- **Type-safe Markdown.** With the Content Collections API, I am able to create content with a particular schema, and if the frontmatter doesn't match the schema, then Astro will throw an error (and I am able to define the error message), whereas with Hugo you might have gotten an error, but you'd have to reference whatever code you were using as well as referencing the frontmatter of whatever content you were writing.

However, despite my newfound love of Astro, I did find several issues that I had as I converted the site over:

- **No Org-mode support.** Obviously Org-mode was a huge part of what drew me to using Hugo in the first place - while I had started with the native Org-mode parser that Hugo used, I soon swapped to [Ox-hugo](https://github.com/kaushalmodi/ox-hugo) in order to do more with Org-mode rather than just Hugo by itself.

- **No taxonomies or RSS out of the box.** While it's important to know how to implement certain things (like taxonomies in this case), having that in Hugo without any additional configuration is much easier than building out functions to simply get each taxonomy set up.

- **No relative links in content.** At least with my setup, I still have to remember the URL if I want to link to a particular post, whereas with Hugo, if I linked to a particular file in my Org-mode document, it would automatically export that link as a `relref` shortcode, which in turn finds the relevant page based on the slug you pass.

Overall, I've really enjoyed working with Astro - I'd highly suggest it as a starting point if you want to learn HTML and CSS - the fundamentals will still apply, but being able to just create templates for content and not having to copy-paste the same code like with normal HTML, along with a simple templating syntax, makes it a great place to start.