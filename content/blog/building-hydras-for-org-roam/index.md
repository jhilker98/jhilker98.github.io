---
title: "Building Hydras for Org-roam"
author: ["Jacob Hilker"]
date: 2021-06-14T22:43:00-04:00
lastmod: 2022-04-07T17:11:52-04:00
slug: "building-hydras-for-org-roam"
tags: ["Org-roam", "Worldbuilding", "Wikis", "Emacs", "Org-mode"]
categories: ["Emacs", "Programming", "Org-mode"]
type: "post"
draft: false
featured: true
enableToc: true
series: "Building Wikis with Hugo and Org-Roam"
---

I've recently been playing around with [Org-roam](https://github.com/org-roam/org-roam), a note-taking package for Emacs and Org-mode based on the [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) method of taking notes, and interconnecting those notes by means of backlinks, and one place this style of note-taking is very common on is the [Roam Research](https://roamresearch.com) website. In the little bit of time that I've gotten to try this line of research, I've found it much more helpful with regards to actually remembering things rather than my old method of just writing it down in a notebook - having backlinks where I can go back and reference any information I've gotten is very helpful. Despite my love of this way of keeping myself organized, I wanted to be able to quickly capture ideas for any worldbuilding ideas I had - something which I feel like would fall into one of the worldbuilding wikis I maintain for myself, rather than the notes I use by default (for things such as software or any books I've read). I wanted to try and do more with Emacs-lisp, and so I found that trying to write a hydra for it might be a good place to start. Although I had found that the idea in the documentation of creating a `.dir-locals.el` in the directory where I needed a roam database was a good place to start, I found that it ultimately forced me to have to be in that directory to capture an idea if I suddenly came up with one, which I feel like sort of goes against the entire workflow I have set up at this point. I knew that I needed to do three things with my "Roam hydra":

-   quickly capture ideas for my worldbuilding projects.
-   insert links to those files in any other wiki files, if I had to.
-   quickly find files for the wiki, if I needed to update them.

And so, I decided to set up my first hydra for finding files. I figured I didn't want to set one up where I could add a file, but finding a file seemed like a good place to start.


## The Base Hydra - Finding Files {#the-base-hydra-finding-files}

I figured fairly early on that once I had one function and hydra down, I would effectively have all three down, but I would just need to update the function I needed to call (such as `org-roam-node-find` or `org-roam-capture`). I started by looking over the code from the excellent blog post on [refiling Org-mode items with a hydra](https://mollermara.com/blog/Fast-refiling-in-org-mode-with-hydras/). Spoilers - I'm not very good at Elisp, so when I saw his macro with all the backticks and commas, I found it fairly hard to follow along, at least until I found a cheatsheet for elisp earlier today. I first overwrote the function with a simple `(let*)` before I called `org-roam-find-file` and ran it in a simple scratch buffer. I was using the wiki I have for my alt-history setting [Broken Thrones](https://brokenthrones.jhilker.com) as an example, since that has become one of my main passion projects in my off-time, but feel free to use any hugo-site with [Ox-Hugo](https://github.com/kaushalmodi/ox-hugo) set up as an example. I am using a directory called `content-org` in that hugo site, but use whatever you want.

```emacs-lisp
(defun jh/find-org-roam-file (directory)
  "Sets the org-roam directory and database and finds file."
  (let* ((org-roam-directory (concat directory "content-org/"))
         (org-roam-db-location (concat directory "org-roam.db")))
    (org-roam-node-find)))
```

After evaluating that in a scratch buffer, now I knew that I had enough for a basic hydra. Here is my final configuration for this base hydra after I did some UI tweaks for the help menu, but if anything the UI isn't as important as functionality, at least when first setting it up.

```emacs-lisp
(defhydra jh/find-org-roam-file-hydra (:hint nil :exit t)
  "
^Default^            ^Conworlds^             ^Campaigns^
^^^^^^^^------------------------------------------------------------
_d_: Default         _b_: Broken Thrones     _e_: Ere Break of Day
_q_: Quit            _s_: Shattered Skies    ^ ^
"

  ("d" (jh/find-org-roam-file "~/org/roam/"))
  ("b" (jh/find-org-roam-file "~/Projects/conworlds/brokenThrones/"))
  ("s" (jh/find-org-roam-file "~/Projects/conworlds/shatteredSkies/"))
  ("e" (jh/find-org-roam-file "~/Projects/campaigns/mirkwoodCampaign/"))
  ("q" nil))
```

Once I had that, I knew I could just replace `org-roam-find-file` with `org-roam-capture` or whatever I needed to call. Although I am reusing a lot of code for this, in time I will try to clean it up. If you need the other hydras I use on a daily basis for roam notes, here they are.

To actually use the hydra, bind `jh/find-org-roam-file-hydra/body` to a keybinding (I use `SPC n r f`) in my configs for both vanilla Emacs and Doom Emacs, and you should be set.


## Capturing Hydra {#capturing-hydra}

```emacs-lisp
(defun jh/org-roam-capture (directory)
  "Sets the org-roam directory and database and captures to file."
  (let* ((org-roam-directory (concat directory "content-org/"))
         (org-roam-db-location (concat directory "org-roam.db")))
    (org-roam-capture)))

(defhydra jh/org-roam-capture-hydra (:hint nil :exit t)
  "
^Default^            ^Conworlds^             ^Campaigns^
^^^^^^^^------------------------------------------------------------
_d_: Default         _b_: Broken Thrones     _e_: Ere Break of Day
_q_: Quit            _s_: Shattered Skies    ^ ^
"

  ("d" (jh/org-roam-capture "~/org/roam/"))
  ("b" (jh/org-roam-capture "~/Projects/conworlds/brokenThrones/"))
  ("s" (jh/org-roam-capture "~/Projects/conworlds/shatteredSkies/"))
  ("e" (jh/org-roam-capture "~/Projects/campaigns/mirkwoodCampaign/"))
  ("q" nil))
```


## Insertion Hydra {#insertion-hydra}

```emacs-lisp
(defun jh/org-roam-insert (directory)
  "Sets the org-roam directory and database and inserts link to file."
  (let* ((org-roam-directory (concat directory "content-org/"))
         (org-roam-db-location (concat directory "org-roam.db")))
    (org-roam-node-insert)))

(defhydra jh/org-roam-insert-hydra (:hint nil :exit t)
  "
^Default^            ^Conworlds^             ^Campaigns^
^^^^^^^^------------------------------------------------------------
_d_: Default         _b_: Broken Thrones     _e_: Ere Break of Day
_q_: Quit            _s_: Shattered Skies    ^ ^
"

  ("d" (jh/org-roam-insert "~/org/roam/"))
  ("b" (jh/org-roam-insert "~/Projects/conworlds/brokenThrones/"))
  ("s" (jh/org-roam-insert "~/Projects/conworlds/shatteredSkies/"))
  ("e" (jh/org-roam-insert "~/Projects/campaigns/mirkwoodCampaign/"))
  ("q" nil))
```
