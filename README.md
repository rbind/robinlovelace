
<!-- README.md is generated from README.Rmd. Please edit that file -->

# robinlovelace

This is the source code of my website. I plan to store notes on how to
use it here.

New talk:

``` bash
hugo new  --kind event event/ogh23
cp -Rv content/event/glasgow2024 content/event/st-andrews2025
code content/event/st-andrews2025/index.md
```

``` r
# Equivalent copying code in R:
system("cp -Rv content/event/glasgow2024 content/event/st-andrews-2025")
file.copy("content/event/st-andrews-2025/index.qmd", "content/event/st-andrews-2025/index.Rmd", overwrite = TRUE)
#> [1] TRUE
```

``` r
remotes::install_cran("blogdown")
file.edit("content/event/modeshift-2022/index.md")
blogdown::install_hugo()

# new blog post:
blogdown::new_post(title = "2024-retrospective", ext = ".Rmd")

blogdown::new_content(path = "software/index.Rmd")

# serve site
blogdown::serve_site()
blogdown::stop_server()

# build site
blogdown::build_site()
```

To update publications run:

``` bash
# pip3 install academic==0.5.1
# pip3 install academic==0.11.2
# Update:
pip install --upgrade academic
# overwrite existing:
# academic import --bibtex static/bibs/my-citations-for-web.bib --over 
academic import --bibtex static/bibs/my-citations-for-web.bib
```
