---
title: Writing Literate Configs with Org-mode
pubDate: 2023-10-13T17:35:03.282Z
description: Want to write once and generate docs and code? Org-mode can do it - here's how.
tags:
  - Emacs
  - Org-mode
draft: false
keywords:
  - Org-mode
  - Config
categories:
  - Emacs
  - Org-mode
---

Although you can use org-mode for note-taking, as I talked about in , one of the features I have recently come to love about org-mode is the ability to extract source code to a particular file with `org-babel` in Emacs. Simply having the ability to keep my source code and documentation in the same file is incredibly useful, even if I won't necessarily use it all that often.

The most important part of setting up a literate config file is setting the `header-args` in your org-mode frontmatter. In short, it looks like this:

```
#+property: header-args{:language} :{option} {value}
```

Those options can be any number of things mentioned in the [org-mode documentation](https://orgmode.org/org.html#Using-Header-Arguments); however, here is what I like to use:
  - `:mkdirp yes`
  - `:tangle no`

Now you might be wondering why I don't set a relevant file to tangle my source code to - after all, that's the point of keeping everything in one document. I wanted to be able to document everything **AND** I wanted to keep my source code all in one document, and if that code isn't getting tangled, then it makes it _just a bit_ harder to use whatever I'm configuring, whether it's Emacs itself, something like Polybar, etc.

That is because I like to use named blocks for whatever it is I'm configuring. Let's say I'm using Qtile as an example. Instead of simply having this:
```
#+begin_src python
from libqtile import layout, bar
#+end_src python
```

I can name the block and then reference it elsewhere in the code:

```
#+name: qtile-ui-imports
#+begin_src python
from libqtile import layout, bar
#+end_src
...
#+begin_src python
<<qtile-ui-imports>>
#+end_src
```

And it makes it much easier to reference throughout the file. Once I have it set up, I can hit `C-c` on the header-args line at the top of the file, and then run `C-c C-v t` and tangle that file and get an updated config file.