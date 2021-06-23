---
layout: page
title: Comics
permalink: /listing/
---
{%- assign collections = site.collections | where: "type", "comic" -%}

{%- for collection in collections -%}
    {%- if collection.label != "posts" -%}
    <div class="comic-list__comic">
        <h2 class="comic-list__title">
            <a href="{{ site.baseurl }}/{{ collection.docs[0].url }}">
            {{ collection.title }}
            </a>
        </h2>
        <div class="comic-list__authors">
            {%- include authors.html -%}
        </div>
        <p>{{ collection.description }}</p>
    </div>
    {%- endif -%}
{%- endfor -%}
