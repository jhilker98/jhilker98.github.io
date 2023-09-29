---
title: "A PSA for my Org-Roam Hydra"
author: ["Jacob Hilker"]
pubDate: 2021-08-23T23:49:00-04:00
tags: ["Emacs", "Programming", "Org-mode"]
categories: ["Emacs", "Programming", "Org-mode"]
type: "post"
draft: false
featured: true
enableToc: false
description: "A brief announcement about my org-roam hydra, in case anyone actually uses it."
---

As you might have heard by now, [Org-roam](https://github.com/org-roam/org-roam) recently updated to version 2, which allows you to set an ID for a post and a headline, and then link by those IDs. However, several functions were renamed to be more consistnt with the rst of the org-roam. This is a PSA to anyone using that you will need to edit those functions slighly for functionality. In `jh/find-org-roam-file`, you will need to replace `org-roam-find-file` with `org-roam-node-find`, and in `jh/org-roam-insert`, replace `org-roam-insert` with `org-roam-node-insert`. Although it's a minor change, you wil need to run `org-roam-db-clear` and `org-roam-db-sync` for each directory in your hydra, just to make sure everything is up to date. While not ideal, I wanted to make sure it would work.