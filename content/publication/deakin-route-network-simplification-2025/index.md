---
title: Route network simplification for transport planning

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Will Deakin
- Zhao Wang
- Josiah Parry
- Robin Lovelace

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2025-10-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2026-03-12T13:08:47.860840Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- "0"

# Publication name and optional abbreviated publication name.
publication: '*Environment and Planning B: Urban Analytics and City Science*'
publication_short: ''

doi: 10.1177/23998083251387986

abstract: Route network datasets are fundamental to transport models, serving as both
  inputs for analysis and outputs for visualization and decision-making. The increasing
  complexity of route network data from sources like OpenStreetMap allows for more
  detailed modelling of sustainable transport modes such as walking and cycling. However,
  this level of detail can introduce challenges for the clear visualization and interpretation
  of model results. A common problem is the representation of single transport corridors
  by multiple parallel lines, which can create visual clutter and obscure important
  patterns in transport flows. The purpose of the work presented in this paper is
  to provide a basis for computationally efficient analysis and visualization of route
  networks for strategic transport planning, where intricate geometries, such as parallel
  or ‘braided’ linestrings, are unhelpful. We present and evaluate two distinct methods
  for simplifying complex route networks that are intended to be used as a ‘pre-processing’
  step to speed up and improve the results of strategic transport network analysis,
  modelling, and visualization workflows. First, we present skeletonization, an approach
  that uses ‘thinning’ of rasterized network data to extract a simplified representation
  of the network. Second, we present a Voronoi-based approach using Voronoi diagrams
  to identify centrelines. We demonstrate the practical application of these methods
  using the ‘Simplified network’ layer in the Transport for Scotland-funded Network
  Planning Tool, a publicly accessible resource at https://www.npt.scot. To support
  reproducible research, we implement the methods in the open-source parenx Python
  package, enabling their use alongside other open source tools for transport planning,
  research, and educational applications.

# Summary. An optional shortened abstract.
summary: ''

tags: []

# Display this page in a list of Featured pages?
featured: false

# Links
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# Publication image
# Add an image named `featured.jpg/png` to your page's folder then add a caption below.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects: ['internal-project']` links to `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
links:
- name: URL
  url: https://doi.org/10.1177/23998083251387986
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
