---
layout: page
title: work
permalink: /work/
description: Selected open-source and challenge work. Production work at Pearl AI and Allisone.ai is described on the home page and CV.
nav: true
nav_order: 1
horizontal: true
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
