---
layout: page
title: code
permalink: /code/
description: Open-source work.
nav: true
nav_order: 3
---

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="container">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
</div>
