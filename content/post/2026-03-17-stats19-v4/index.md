---
title: "stats19 v4.0.0: 45 Years of UK Road Crash Data, Unified"
author: ''
date: '2026-03-17'
slug: stats19-v4
categories:
  - R
  - transport
  - road-safety
tags:
  - stats19
  - open-data
  - ropensci
  - road-safety
subtitle: 'A major release that unifies 45 years of UK road crash data into a single, consistent interface'
summary: 'The stats19 R package has reached version 4.0.0 — a ground-up refactor that unifies column names across 45 years of data, eliminates parsing warnings, fixes coordinate precision bugs, and adds powerful new tools for vehicle data cleaning and collision cost estimation.'
authors: []
lastmod: '2026-03-17T16:30:00+00:00'
featured: yes
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
---

Road safety research in the UK relies heavily on the STATS19 dataset — the official record of every reported road traffic collision, maintained by the Department for Transport (DfT). For decades, researchers have grappled with shifting schemas, inconsistent column names, and parsing quirks that made longitudinal analysis painful.

With **stats19 v4.0.0**, we've refactored the package from the ground up to be faster, cleaner, and more robust for the kind of longitudinal research that road safety demands.

<!--more-->

## The headline: one schema to rule them all

The biggest change is what we call the **Unified Longitudinal Schema**. Previously, if you wanted to compare collisions from 2005 with those from 2024, you'd hit a wall of mismatched column names: `carriageway_hazards` vs `carriageway_hazards_historic`, different code systems, and inconsistent handling of missing values.

In v4.0.0, the package automatically detects these "historic" variants, merges them into their modern counterparts, and drops the redundant columns. The result: you can now analyse **45 years of data (1979–2024)** using a single, consistent set of column names.

```r
library(stats19)

# This now just works — across all years
crashes = get_stats19(year = 1979:2024, type = "crashes")
```

## Zero-warning, high-precision loading

If you've used previous versions, you'll know the experience of seeing a wall of red warnings about unmatched column parsers. That's gone. `read_stats19()` now scans the actual CSV header first and builds a custom parser on the fly — no more guessing, no more warnings.

We also fixed a critical bug where **2024 Latitude/Longitude data was being truncated to integers**. Coordinates are now parsed with full floating-point precision, which matters a lot when you're mapping crash locations.

## Standardised missing values

DfT data files use a bewildering mix of `-1`, "Code deprecated", "Data missing or out of range", and other codes to represent missing data. In v4.0.0, we globally standardise all of these to `NA` during formatting. Your `is.na()` calls now work consistently across all variables and all years.

## Faster with readr Edition 2

By defaulting to the `readr` Edition 2 engine, the package now uses multi-threaded parsing. Large files that used to take minutes load in seconds, making the full 1979–2024 dataset much more practical to work with.

## New tools for research

Beyond the refactor, we've added two powerful new features:

- **`match_tag()`** — Join government TAG (Transport Analysis Guidance) cost estimates (RAS4001) directly to your collision data. Estimate the economic impact of collisions by severity and road type.

- **Vehicle cleaning** — `clean_make()`, `clean_model()`, and `clean_make_model()` standardise the 2,400+ unique raw strings in the vehicle dataset, making it easier to study trends in vehicle safety and composition.

## Intelligent multi-year support

Requesting a year range now automatically identifies bulk historic files, downloads them once, and filters efficiently. And the 1979 file (which contains all data) is correctly handled — it's only returned when you explicitly ask for 1979, not as a catch-all for older data.

## Try it now

We're releasing this as a development version and **would love your feedback before we submit to CRAN**. If you use stats19 in your work, please install the latest version and let us know about any issues:

```r
# install.packages("pak")
pak::pak("ropensci/stats19")
```

Report bugs and feedback at: [github.com/ropensci/stats19/issues](https://github.com/ropensci/stats19/issues)

## Acknowledgements

This release was shaped by the rOpenSci review process, with valuable contributions from reviewers David Ranzolin and Adam Sparks, and ongoing work by Malcolm Morgan, Layik Hama, and Blaise Kelly. The RAC Foundation provided funding support.

## Links

- **GitHub**: [github.com/ropensci/stats19](https://github.com/ropensci/stats19)
- **Documentation**: [docs.ropensci.org/stats19](https://docs.ropensci.org/stats19/)
- **Full changelog**: [NEWS.md](https://github.com/ropensci/stats19/blob/main/NEWS.md)
