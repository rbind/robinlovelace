

bibs = RefManageR::ReadBib("~/robinlovelace/static/bibs/robin-lovelaces-publications.bib")
bibs_df = as.data.frame(bibs)
View(bibs_df)
