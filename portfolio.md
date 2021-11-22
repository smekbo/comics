---
layout: portfolio_index
title: Portfolio
permalink: /portfolio/
---
<p>A collection of GIFs that I consider my 'Animation Portfolio'</p>

<p>Most of these are done in Drawpile, though I am also familiar with Blender, OpenToonz and CSP for animation</p>

<div class="portfolio-wrapper">
  {% for piece in site.animation_portfolio %}
    {{ piece }}
  {% endfor %}
</div>