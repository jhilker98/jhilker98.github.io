---
title: "Avoiding Tailwind's CDN Limitations"
pubDate: 2021-10-25T00:00:00-04:00
slug: "avoiding-tailwinds-cdn-limitations"
description: "Tailwind's CDN is limited compared to a normal installation. Here's how I work around those limitations."
tags: 
 - "TailwindCSS"
categories: 
 - "TailwindCSS"
draft: true
featured: false
enableToc: false
---

I've recently been playing around with [Tailwind CSS](https://tailwindcss.com) to just try it, and I've quickly found that I like it, even if I have to do things in more of a "manual sort of way" (e.g. I can't just say `<div class = 'navbar'>` for a navigation bar on a website - I have to go in and manually design it). However, for just playing around with a design (such as in [CodePen](https://codepen.io)), you need to use the CDN, rather than the full build system. I don't have a problem with this, but it does tend to take away some of the best features of Tailwind, such as the ability to customize breakpoints, colors, and animations, being able to use `@apply` with a list of the tailwind classes to any custom class you decide (such as `navbar` or `sidebar`), as well as the many, many plugins that can extended Tailwind (such as the [tailwindcss-grid-areas](https://github.com/savvywombat/tailwindcss-grid-areas)) plugin for setting up grid-template areas with CSS Grid.