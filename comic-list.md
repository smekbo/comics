---
layout: page
title: Comics
permalink: /listing/
---

{%- for comic in site.collections -%}
    {%- if comic.label != "posts" -%}
    <div>
        <a href="{{ site.baseurl }}/{{ comic.label }}">{{ comic.label }}</a>
    </div>
    {%- endif -%}
{%- endfor -%}
