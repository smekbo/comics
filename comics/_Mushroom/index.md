---
layout: comic_landing
title:  "Musroom"
author: bob
categories: mushroom comic
---

{%- assign pages = site.Mushroom | where: "layout", "comic_page" -%}

<div>
<a href="{{ site.baseurl }}{{ pages[0].url }}">First Page</a>
</div>

<div>
<a href="{{ site.baseurl }}{{ pages[-1].url }}">Latest Page</a>
</div>