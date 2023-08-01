---
title: Using a Makefile with My Website
pubDate: 2021-03-12
draft: false
featured: false
slug: makefile-website
description: "How I (ab)used a Makefile to improve my Hugo developer experience."
---

It shouldn't be a surprise that I use Hugo as a static site generator. Not only is it fast, but it is also incredibly customizable, which is something that I find useful considering my website has so much stuff on it. In addition, being able to create shortcodes to avoid reusing code on certain pages is such a helpful tool for wikis. Finally, having support for Emacs' [Org-Mode](https://orgmode.org/) is what initially drew me to Hugo in the first place. I had tried using org-publish to try and set up a website, but had so many little issues with it that I decided to scrap it and keep looking around for a better way to set up a website. That was when I found Hugo, and decided to try it out.

Ultimately, I found that when I was starting to create layouts and templates, typing the full `hugo server -D --navigateToChanged` was just long to type (yes, lazy, I know), especially when I was debugging an error with my shortcodes and templates. Being able just to type `make server` makes it much faster for me to debug code but also to get previews of code.

## Not Just For Debugging

Hugo also allows for content to be created with a certain [archetype](https://gohugo.io/content-management/archetypes/) - by default, this matches the directory you are creating the content for. As an example, if I had an archetype called `project.org`, if I ran `hugo new project/hello-world.org` the file `content/project/hello-world.org` would be created, with all the content needed for a blog post. Here's what my org-mode project archetype looks like:

```org
#+title: {{ replace .Name "-" " " | title }}
#+draft: true
#+srclang:
#+srcicon:
#+summary:
#+type: project
#+featured:
#+layout: single
#+percDone: 0
#+lastUpdated:
#+docs:
#+projectSite:
#+gitlab:
#+github:
#+bitbucket:
#+readmore: false
```

Obviously that's a lot of custom parameters, so I'll try to go through line-by-line and explain what's going on.

The `title`, `draft`, `layout`, `type`, and `featured` parameters are all easy enough to understand, I feel like. The `srclang` represents the language or languages the project is written in - for my pyronsworn project, as an example, it's written in python. The `srcicon` is the icon to use to display next to the source language - it must be one of the languages or icons listed at [devicon.dev](https://devicon.dev/). The `percDone` is used to fill the progress bar across from the source language - it represents how much is approximately done on the latest release of the project. The last 4 parameters are all different links to places where the project lives - additionally, you can set up a trello link, add a trello parameter to the project frontmatter, and you can see the link to the roadmap, though that isn't required. The `readmore` variable is used to provide a way to read a little bit more about the project before trying out the project.

While setting up a snippet could be useful for this, Hugo has the tools to do it automatically. However, the one thing I hadn't had much luck with was using the `read` command in a Makefile. Ultimately, I figured out the answer through an answer on [the Unix StackExchange](https://unix.stackexchange.com/questions/322517/read-command-not-working-in-a-makefile) which ultimately allowed me to read in user input when I ran a `Make` command. So now, instead of having to run `hugo new projects/some-project.org -k project`, I can just run `make project` and immediately get the template set up. While not a perfect setup, it's much easier to get going rather than using the full command or even creating an empty file in the right directory. And while I could set up different file formats in the Makefile, such as `post.org`, I feel like getting the initial functionality down is much more important than bonus features.

Here is my current Makefile for the website.

```makefile
.PHONY: server post project

server:
@hugo server -D --navigateToChanged --verbose

post:
@echo "Enter the file name (include the suffix): " && read filename; hugo new blog/$$filename -k post

project:
@echo "Enter the file name (include the suffix): " && read filename; hugo new projects/$$filename -k project
```
