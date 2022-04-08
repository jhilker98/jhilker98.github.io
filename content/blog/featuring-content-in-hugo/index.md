---
title: "Featuring Site Content In Hugo"
author: ["Jacob Hilker"]
date: 2021-02-23T16:25:00-05:00
lastmod: 2022-04-07T17:11:53-04:00
tags: ["Web-dev", "Hugo"]
categories: ["Web-dev", "Hugo"]
type: "post"
draft: false
featured: true
enableToc: false
---

I recently found that the layout for my index page here was cluttered - I had content both in the org-mode file where I would write a post, as well as in the `index.html` file that actually rendered content to the page. I knew I wanted to have a shortcode so that I could more easily use that content again, if I needed to. However, I also knew that I'd want to have a list of both featured posts that I thought were my best work, as well as a list of recent posts on the page. I first used part of the list layout from the theme I'm using here, and created a shortcode for only getting posts from my personal blog, and limiting it to the 5 most recent posts.

```html

<ul class="posts-list">
{{ range first 5 (where .Site.RegularPages "Section" "blog").ByDate.Reverse  }}
<li class="posts-list-item">
<a class="posts-list-item-title" href="{{ .Permalink }}">{{ .Title }}</a>
<span class="posts-list-item-description">
{{ .Date.Format "02 Jan." }}
</span>
</li>
{{ end }}
</ul>

```

Once I had created that simple list, I decided it might be nice to have a short list of all the posts I'd want to feature on my index page, sort of as a showcase. I kept trying lots of different ideas, but ultimately found this code to be the simplest and easiest.[^fn:1]

```html
<ul class="posts-list">
{{range first 5 (where (where .Site.RegularPages "Type" "post") ".Params.featured" "==" "true") }}
<li class="posts-list-item">
<a class="posts-list-item-title" href="{{ .Permalink }}">{{ .Title }}</a>
<span class="posts-list-item-description">
{{ .Date.Format "02 Jan." }}
</span>
</li>
{{ end }}
</ul>
```

However, once I had tested both the featured and recents code on the index page, certain posts would show up in both. I had tried to find some tiny bit of code that could work for both, but then I found the dumbest mistake I had made.

I had forgotten to filter my recent posts list.

Overall I had to nest one more `where` clause into my recent posts shortcode. While I can't set a direct number of posts to show right now, I'm going to keep adding to it to ensure I can do that, if I wanted to. This was the final bit of code I had, and what I currently use.

```html
<ul class="posts-list">
{{ range first 5 (where (where .Site.RegularPages "Section" "blog") ".Params.featured" "!=" "true").ByDate.Reverse}}
<li class="posts-list-item">
<a class="posts-list-item-title" href="{{ .Permalink }}">{{ .Title }}</a>
<span class="posts-list-item-description">
{{ .Date.Format "02 Jan." }}
</span>
</li>
{{ end }}
</ul>
```

[^fn:1]: Although this does also include my Digital Studies blog, I will most likely be archiving those posts at the end of the semester - I'll still have access to them, but at the same time, if I had made a post for that class I was proud of, I could move it to my blog directory without much of an issue.
