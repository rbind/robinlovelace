---
title: Population Synthesis with Quasirandom Integer Sampling

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Andrew Smith
- Robin Lovelace
- Mark Birkin

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2017-01-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2026-03-12T13:11:19.736301Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- "0"

# Publication name and optional abbreviated publication name.
publication: ''
publication_short: ''

doi: 10.18564/jasss.3550

abstract: Established methods for synthesising a population from geographically aggregated
  data are robust and well understood. However, most rely on the potentially detrimental
  process of integerisation if a whole individual population is required, e.g. for
  use in agent-based modelling (ABM). This paper describes and investigates the use
  of quasirandom sequences to sample populations from known marginal constraints whilst
  preserving those marginal distributions. We call this technique Quasirandom Integer
  Without-replacement Sampling (QIWS) and show that the statistical properties of
  quasirandomly sampled populations to be superior to those of pseudorandomly sampled
  ones in that they tend to yield entropies much closer to populations generated using
  the entropy-maximising iterative proportional fitting (IPF) algorithm. The implementation
  is extremely efficient, easily outperforming common IPF implementations. It is freely
  available as an open source R package called humanleague. Finally, we suggest how
  the current limitations of the implementation can be overcome, providing a direction
  for future work.

# Summary. An optional shortened abstract.
summary: ''

tags:
- Microsimulation
- Population synthesis
- Quasirandom numbers
- Statistical sampling

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
  url: http://jasss.soc.surrey.ac.uk/20/4/14.html
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
