---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'ClockBoard: A Zoning System for Urban Analysis'
subtitle: ''
summary: ''
authors:
- Robin Lovelace
- Martijn Tennekes
- Dustin Carlino
tags:
- modifiable area unit problem
categories: []
date: '2022-06-20'
lastmod: 2024-09-30T12:19:24+01:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2024-09-30T11:23:15.931077Z'
publication_types:
- '2'
abstract: "Zones are the building blocks of urban analysis. Fields ranging from demographics\
  \ to transport planning routinely use zones - spatially contiguous areal units that\
  \ break-up continuous space into discrete chunks - as the foundation for diverse\
  \ analysis techniques. Key methods such as origin-destination analysis and choropleth\
  \ mapping rely on zones with appropriate sizes, shapes and coverage. However, existing\
  \ zoning systems are sub-optimal in many urban analysis contexts, for three main\
  \ reasons: 1) administrative zoning systems are often based on somewhat arbitrary\
  \ factors; 2) zoning systems that are evidence-based (e.g., based on equal population\
  \ size) are often highly variable in size and shape, reducing their utility for\
  \ inter-city comparison; and 3) official zoning systems in many places simply do\
  \ not exist or are unavailable. We set out to develop a flexible, open and scalable\
  \ solution to these problems. The result is the zonebuilder project (with R, Rust\
  \ and Python implementations), which was used to create the ClockBoard zoning system.\
  \ ClockBoard consists of 12 segments emanating from a central place and divided\
  \ by concentric rings with radii that increase in line with the triangular number\
  \ sequence (1, 3, 6 km etc). 'ClockBoards' thus create a consistent visual frame\
  \ of reference for monocentric cities that is reminiscent of clocks and a dartboard.\
  \ This paper outlines the design and potential uses of the ClockBoard zoning system\
  \ in the historical context, and discusses future avenues for research into the\
  \ design and assessment of zoning systems."
publication: ''
doi: 10.5311/JOSIS.2022.24.172
links:
- name: URL
  url: https://josis.org/index.php/josis/article/view/172
---
