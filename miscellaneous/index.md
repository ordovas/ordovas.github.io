---
title: Beyond work
eyebrow: Miscellaneous
lead: Personal things that don't fit anywhere else.
description: "Hobbies of Ignacio Ordovás Pascual: painting miniatures."
permalink: /miscellaneous/
---

## Painting miniatures

One of my hobbies is painting miniatures. Here are a few of the *good* ones.

<div class="gallery" data-gallery>
{%- for i in (1..6) %}
  <a href="{{ '/assets/img/misc/' | append: i | append: '.jpg' | relative_url }}"><img src="{{ '/assets/img/misc/' | append: i | append: '.jpg' | relative_url }}" alt="Painted miniature {{ i }}" loading="lazy"></a>
{%- endfor %}
</div>
