---
title: "Building A Website From Our Notes"
pubDate: 2021-09-20T17:21:00-04:00
slug: "building-a-website-from-our-notes"
tags: 
 - "Org-roam"
 - "Worldbuilding"
 - "Wikis"
 - "Emacs"
 - "Org-mode"
categories: ["Emacs", "Programming", "Org-mode"]
draft: false
featured: true
enableToc: false
description: "Now that we have our notes and templates set up, let's go ahead and build a site with them as our content."
series:
  name: "Building Wikis with Hugo and Org-Roam"
  description: "Are you tired of looking through multiple notebooks for finding your notes for a book, or a campaign? Here's a way to organize it, all for free. Start from nothing or from your old notes."
  weight: 2
---

Although the last post in the series assumed you had already set up a hugo site, I wanted to quickly go over setting up a website so that you can quickly get your wiki deployed.

Before anything, make sure you **BACK UP YOUR NOTES**. This is the most important part of the process, since you will be using those notes later on. I would recommend Nextcloud, since, although some tiers require payment, some are free, and since your files are just plaintext, they are fairly small compared to images, videos, or music files. However, Dropbox also works well for this sort of thing - the choice is up to you. Just make sure you back up your notes.

Now, once you've gotten your notes backed up, you will want to clear the database.

_'But why? Didn't I spend all those time capturing notes with that hydra we made for nothing? What will happen now?'_

Great question! You've backed up your notes now, so you have a copy you can revert to, if you need to. Open up a scratch buffer (or make an empty elisp file) and then evaluate this code:

```elisp
(let* ((org-roam-directory "/path/to/org/docs/")
      (org-roam-db-location (concat org-roam-directory "org-roam.db")))
  (org-roam-db-clear-all))
```

By now, the let statement should be pretty familiar, since that's the core of our functionality for the hydras. The function `org-roam-db-clear-all` clears all the entries in the database in your org-roam-directory, Since you have your notes backed up, it's not going to be a huge deal to clear the database. Once you've done that, remove your old notes. You want to do this so that you can create a website with your notes.

Finally, the core of actually setting up a website will need you to run this command:

```bash
hugo new site .
```

This command essentially says "Hey Hugo, I want to make a website in this folder". Hugo will then create the necessary directories for your site in there. After that, go ahead and create a directory from your hugo base directory called `content-org` (or `org`, or whatever you want to call it, really) - this will allow you to keep your org documents separate from the markdown in the regular `content` directory.[^fn:1] Go ahead and `cd` into `hugo-site-base-directory/content`, because we will need to create 2 small markdown files there, since we don't want them to be a part of our main org-roam notes. One needs to be called `_index.md`, directly in the `content` directory, while one is in a folder called `wiki` (or whatever you want to call it - I just went with wiki). After that, you can go ahead and start recapturing your notes using the hydra we created in the last post, though. However, we want to also add these lines to the top of each org file, since it is metadata that [ox-hugo](https://github.com/kaushalmodi/ox-hugo) uses to determine things such as the base directory of your site, the section that hugo should put the file into, etc. :

```text
#+hugo_base_dir: ../
#+hugo_section: wiki #(or whatever you called it)
#+hugo_bundle: (whatever the title is)
#+export_file_name: index.md
```

Why would we do this? The first 2 lines are required for ox-hugo to handle exporting your org-mode files to the markdown that hugo uses. The line `#+hugo_bundle` is used to hold the relevant files for a page (such as the main content, and any relevant images, if needed), and the line `export_file_name` is used for exporting the relevant file to `index.md` in the bundle you set.

After that, you should go to [themes.gohugo.io](https://themes.gohugo.io) and look around for a theme that suits your needs. Later in the series, we will actually be developing our own theme with Tailwind CSS, but for now, just choose a theme you like, and follow its installation instructions.

Finally, just `git commit` your files, and then push them to your repository on Github or Gitlab, or your provider of choice. In the next post, we will be deploying our website with Gitlab Pages and Github Pages, though make sure to read the relevant documentation for your provider of choice.

[^fn:1]: Although Hugo does have arbitrary support for org-mode, some things (such as no multi-word tags, as an example) are unsupported due to the library that hugo uses for parsing org-mode. This is why I use [ox-hugo](https://github.com/kaushalmodi/ox-hugo) with it.