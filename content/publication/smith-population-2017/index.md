---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Population Synthesis with Quasirandom Integer Sampling
subtitle: ''
summary: ''
authors:
- Andrew Smith
- Robin Lovelace
- Mark Birkin
tags:
- '"microsimulation"'
- '"Microsimulation"'
- '"Population Synthesis"'
- '"Quasirandom Numbers"'
- '"Statistical Sampling"'
categories: []
date: '2017-01-01'
lastmod: 2020-12-30T16:27:38Z
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
publishDate: '2020-12-30T16:27:38.150638Z'
publication_types:
- '2'
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
publication: '*Journal of Artificial Societies and Social Simulation*'
doi: 10.18564/jasss.3550
---
