---
title: "My Org-Mode Workflow"
pubDate: 2021-06-12T20:46:00-04:00
lastmod: 2022-04-07T17:11:58-04:00
draft: false
featured: true
enableToc: true
description: "I currently use org-mode for a lot of things. This is how I use it."
---

Although I briefly describe my workflows in the [notes section](https://braindump.jhilker.com) of my website, I wanted to go far more in-depth here on my blog vs. in the notes file. I think of it this way - a note is a quick reminder of something, while something like an article or post is more in-depth.

I use org-mode for most of my stuff now - if I am writing a README as an example (or writing generally), I'll use org-mode where I can, including in emails. In addition, I'll use it for my actually organizing my day or week, although I am using Google Calendar just for better integration with my phone. (I'm still working on my orgzly configuration). I am keeping my primary org-mode files in Dropbox so that I can sync them to any device.

The best feature of all this is my extensive use of capturing ideas, tasks, and events with `org-capture`. This way, I can still heavily focus on the current task I'm working on, while still getting ideas down if I need them.

## My Agenda Workflow

One of the nicest features of org-mode is the ability to create custom agenda commands for different views. And in these views, you can have different files for different sections of an agenda, or for each individual agenda view. I currently have a few org-mode files in my dropbox that I use as agenda files.

| Filename        | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| `inbox.org`     | Where any ideas I have come in.                            |
| `orgzly.org`    | Same as `inbox.org`, but for any ideas I have on my phone. |
| `todo.org`      | Keeping track of general todo items.                       |
| `gcal.org`      | My personal calendar events.                               |
| `projects.org`  | Where I manage small to medium size personal projects.     |
| `work.org`      | My work-related todo list.                                 |
| `work-gcal.org` | My work-related calendar.                                  |

As an example, I currently have a custom agenda view that I call a dashboard - although I don't include any projects in it, I give my projects their own dashboard since some of them can get quite big for a solo project. Excuse the windows laptop, my Linux machine is currently being repaired.

![](./img/org-mode-workflow-dashboard.png)

This is my "daily dashboard" view - everything at the top is everything with a date for today. Underneath that, I have a list of the inbox items I need to review. Underneath that, I have anything I need to follow up or read from my email, and lastly, I have a list of general todo items. Although GTD normally has you set deadlines for every little item, I feel like if I set an arbitrary deadline for something where it wouldn't be necessary, it's much easier for me to ignore that deadline, which in turn makes it easier for me to ignore all my deadlines. I'd rather something take longer and eventually get finished, rather than me forcing arbitrary dates on myself and eventually ignoring that date.

## For Tasks

As far as actually organizing myself, my workflow is a mix of both Getting Things Done, the Pomodoro method, and my own thing, although I use both GTD and Pomodoro for slightly different reasons. I used to be more of a "just get it done, don't worry about logging it" sort of person, but now I feel like it's a lot easier for me to just record a task or an idea if something comes up.

1.  Capture a task using `org-capture` and save it to the inbox.
2.  Continue working for the duration of the currently running timer.
3.  During a break, quickly glance over the inbox.
4.  At the end of the day, review the inbox, and refile with a [hydra](https://mollermara.com/blog/Fast-refiling-in-org-mode-with-hydras/) as appropriate.

I mostly use it like this because I have had trouble focusing in the past, and now I can quickly get an idea into my head and into a file so that I can get back to work and review it later. Other than that, I'll set a pomodoro timer, clock in the task, and get to work.

## For Note-Taking

This, along with the task management system I described above, is what makes classes easier, although I'm disappointed that I didn't implement org-mode sooner until now. I am currently using [org-roam](https://github.com/org-roam/org-roam/) to get a similar setup to what I had in [Notion](https://notion.so/) or [Obsidian](https://obsidian.md/) so that I can connect notes to past information I've learned. Although this is still currently in progress (mainly trying to figure out campaign notes with a similar system to what I have for my primary note-taking system), I will update this when I get something working.

## For Writing

Org-mode, in addition to being an excellent productivity tool, is also a very nice markup language. This means that it's not too difficult to write something in org-mode, and export to something like a Word document or a PDF with \\(\LaTeX\\) or Groff if you need a manuscript.

### For The Blog

I have a few capture templates set up for various things on my site - namely, a blog post and a potential project. I am currently using [Ox-Hugo](https://github.com/kaushalmodi/ox-hugo) for publishing my org-mode files to the relevant Hugo Markdown files in the correct directory. Inside my website folder for org-files, I have two separate files for handling different parts of my site.

| Filename       | Purpose                       |
| -------------- | ----------------------------- |
| `blog.org`     | For any completed blog posts. |
| `projects.org` | For my portfolio.             |

Overall, my workflow looks a little something like this.

1.  Capture an idea for a blog post, and save that to `blog.org` in my dropbox.
2.  Add a TODO item to my todo list to finish that post.
3.  Finish writing the blog post, and refile with a hydra as appropriate.
4.  Publish the post with `org-export`.
5.  Commit the changes, and push to my gitlab.

## For Outlining Longer Works

Although I am not a very good writer, I do enjoy worldbuilding and writing campaign ideas. This is still very much in progress, but the idea is to capture an idea to a file called `writing.org` in my Dropbox which acts as a sort of inbox for any writing ideas I have. It's not perfect at all, but I am still figuring out the right workflow to have for this sort of thing. It acts fairly similarly to the way my task system does, where I review it at the end of the week and apply it to any relevant worldbuilding or writing projects I'm working on. I might try something with capturing into the current buffer I'm in, but I'm not entirely sure, though.
