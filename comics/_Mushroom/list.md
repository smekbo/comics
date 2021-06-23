---
layout: comic_landing
---
{%- assign pages = site.Mushroom | where: "layout", "comic_page" -%}

{%- for page in pages -%}
<div>
    <a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }} {{ page.pagenum }}</a>
</div>
{%- endfor -%}