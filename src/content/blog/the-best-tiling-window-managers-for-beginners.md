---
title: "The Best Tiling Window Managers For Beginners"
pubDate: 2021-12-23T10:41:00-05:00
lastModDate: 2021-12-23T10:41:00-05:00
slug: "the-best-tiling-window-managers-for-beginners"
tags: ["tiling-window-managers", "software", "twms"]
draft: false
featured: false
enableToc: false
description: "Tiling window managers have greatly improved my productivity as a dev. Here are a couple I recommend."
---

Anyone who knows me knows that I like to use a tiling window manager whenever I can. Having the ability to organize my programs into general categories, combined with the fact that none of the windows were overlapping, makes development so much easier compared to using a floating window manager in my opinion. However, the sheer number of choices presented when I was researching which window manager to use made it incredibly overwhelming for me to figure out where to start.

For absolute beginners to tiling window managers, I would suggest [Regolith Linux](https:regolith-linux.org), which uses the i3 window manager on top of Ubuntu. I'd also suggest [Qtile](https:docs.qtile.org), for anyone who would rather use a dynamic TWM rather than a manual one like i3. I've also heard that [BSPWM](https://github.com/Baskerville/bspwm) is good for beginners; however, along with basically being a shell script, BSPWM doesn't handle keybindings, instead handing that off to an external program by the same author, [SXHKD](https://github.com/Baskerville/sxhkd), or the Simple X HotKey Daemon. I also don't have that much experience with it, hence why I'm not including as much about it.

i3 is nice (and especially the Regolith config), because it gives you everything you need to get started learning (most) tiling window managers along with a way of checking your keybindings while in the window manager. However, i3 is written in its own language and not a traditional programming language, which means you'll need an extra package or plugin for syntax highlighting in your text editor of choice (whether Vim or Emacs).

I also like Qtile because I don't manually have to set up layouts the way I would with i3, and because it's written in Python, which means that it's easy to configure. It also means it's easy to hack on to, so for instance you could create custom layouts that aren't already available, or custom modules for the bar, etc. My personal favorite features are the ease of configuration, and the layouts feature like I said.

So if you are interested in trying out a tiling window manager, install Regolith Linux and try out either i3 (which it uses) or install Qtile and try it out.
