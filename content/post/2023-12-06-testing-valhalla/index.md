# testing-valhalla

date: ‘2023-12-06’ slug: testing-valhalla categories: \[\] tags: \[\]
subtitle: ’’ summary: ’’ authors: \[\] lastmod: ‘2023-12-06T22:51:49Z’
featured: no image: caption: ’’ focal_point: ’’ preview_only: no
projects: \[\]

------------------------------------------------------------------------

``` r
library(sf)
```

    Linking to GEOS 3.11.1, GDAL 3.6.4, PROJ 9.1.1; sf_use_s2() is TRUE

``` bash
# download a file to custom_files and start valhalla
mkdir custom_files
wget -O custom_files/andorra-latest.osm.pbf https://download.geofabrik.de/europe/andorra-latest.osm.pbf
docker run -dt --name valhalla_gis-ops -p 8002:8002 -v $PWD/custom_files:/custom_files ghcr.io/gis-ops/docker-valhalla/valhalla:latest
# or let the container download the file for you
docker run -dt --name valhalla_gis-ops -p 8002:8002 -v $PWD/custom_files:/custom_files -e tile_urls=https://download.geofabrik.de/europe/andorra-latest.osm.pbf ghcr.io/gis-ops/docker-valhalla/valhalla:latest
```

After that navigate to http://localhost:8002/ and you’ll see the
endpoint.

![](images/paste-1.png)

Let’s calculate a single route in Andorra, between two well known
places: Andorra la Vella and Pas de la Casa.

``` r
andorra_la_vella = c(1.5218, 42.5075)
pas_de_la_casa = c(1.7333, 42.5425)
```

With reference to the
[documentation](https://valhalla.github.io/valhalla/api/optimized/api-reference/)
which states that it takes queries in the form of:

    localhost:8002/optimized_route?json={}

With contents such as

``` json
{"locations":[{"lat":40.042072,"lon":-76.306572},{"lat":39.992115,"lon":-76.781559},{"lat":39.984519,"lon":-76.6956},{"lat":39.996586,"lon":-76.769028},{"lat":39.984322,"lon":-76.706672}],"costing":"auto","directions_options":{"units":"miles"}}
```

We can construct a query URL as follows:

``` r
url_raw = 'http://localhost:8002/optimized_route?json={"locations":[{"lon":1.5218,"lat":42.5075},{"lon":1.7333,"lat":42.5425}],"costing":"auto","directions_options":{"units":"miles"}}'
json = jsonlite::fromJSON(url_raw)
names(json)
```

    [1] "trip"

``` r
names(json$trip)
```

    [1] "locations"      "legs"           "summary"        "status_message"
    [5] "status"         "units"          "language"      

``` r
names(json$trip$legs)
```

    [1] "maneuvers" "summary"   "shape"    

``` r
length(json$trip$legs$shape)
```

    [1] 1

``` r
str(json)
```

    List of 1
     $ trip:List of 7
      ..$ locations     :'data.frame':  2 obs. of  4 variables:
      .. ..$ type          : chr [1:2] "break" "break"
      .. ..$ lat           : num [1:2] 42.5 42.5
      .. ..$ lon           : num [1:2] 1.52 1.73
      .. ..$ original_index: int [1:2] 0 1
      ..$ legs          :'data.frame':  1 obs. of  3 variables:
      .. ..$ maneuvers:List of 1
      .. .. ..$ :'data.frame':  55 obs. of  17 variables:
      .. .. .. ..$ type                                  : int [1:55] 1 10 9 26 27 9 26 27 26 27 ...
      .. .. .. ..$ instruction                           : chr [1:55] "Drive east on Avinguda del Princep Benlloch." "Turn right." "Bear right onto Carrer Dr. Vilanova." "Enter Rotonda de Govern and take the 2nd exit." ...
      .. .. .. ..$ verbal_succinct_transition_instruction: chr [1:55] "Drive east. Then Turn right." "Turn right. Then Bear right onto Carrer Dr. Vilanova." "Bear right. Then Enter Rotonda de Govern and take the 2nd exit." "Enter the roundabout and take the 2nd exit." ...
      .. .. .. ..$ verbal_pre_transition_instruction     : chr [1:55] "Drive east on Avinguda del Princep Benlloch. Then Turn right." "Turn right. Then Bear right onto Carrer Dr. Vilanova." "Bear right onto Carrer Dr. Vilanova. Then Enter Rotonda de Govern and take the 2nd exit." "Enter Rotonda de Govern and take the 2nd exit." ...
      .. .. .. ..$ verbal_post_transition_instruction    : chr [1:55] "Continue for 100 feet." "Continue for 80 feet." "Continue for 500 feet." NA ...
      .. .. .. ..$ street_names                          :List of 55
      .. .. .. .. ..$ : chr "Avinguda del Princep Benlloch"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "Carrer Dr. Vilanova"
      .. .. .. .. ..$ : chr "Rotonda de Govern"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "Carrer Doctor Vilanova"
      .. .. .. .. ..$ : chr "Rotonda de Casadet"
      .. .. .. .. ..$ : chr [1:2] "Avinguda de Tarragona" "CG-1"
      .. .. .. .. ..$ : chr "Rotonda els Marginets"
      .. .. .. .. ..$ : chr [1:2] "Avinguda de Tarragona" "CG-1"
      .. .. .. .. ..$ : chr "Rotonda Josep Escaler"
      .. .. .. .. ..$ : chr "CG-1"
      .. .. .. .. ..$ : chr "Rotonda Km. 0"
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : chr "Rotonda del Gall"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "CG-2"
      .. .. .. .. ..$ : chr "CG-2a"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "Avinguda del Consell General"
      .. .. .. .. ..$ : chr "Avinguda del Consell General"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : chr "Carrer de les Abelletes"
      .. .. .. .. ..$ : chr "Carrer de Sant Jordi"
      .. .. .. .. ..$ : NULL
      .. .. .. .. ..$ : NULL
      .. .. .. ..$ time                                  : num [1:55] 2.88 2.572 12.183 1.876 0.981 ...
      .. .. .. ..$ length                                : num [1:55] 0.024 0.015 0.101 0.013 0.008 0.092 0.025 0.269 0.007 0.218 ...
      .. .. .. ..$ cost                                  : num [1:55] 2.74 11.71 38.15 7.5 6.55 ...
      .. .. .. ..$ begin_shape_index                     : int [1:55] 0 3 9 29 41 44 54 64 83 87 ...
      .. .. .. ..$ end_shape_index                       : int [1:55] 3 9 29 41 44 54 64 83 87 103 ...
      .. .. .. ..$ verbal_multi_cue                      : logi [1:55] TRUE TRUE TRUE NA TRUE TRUE ...
      .. .. .. ..$ travel_mode                           : chr [1:55] "drive" "drive" "drive" "drive" ...
      .. .. .. ..$ travel_type                           : chr [1:55] "car" "car" "car" "car" ...
      .. .. .. ..$ verbal_transition_alert_instruction   : chr [1:55] NA "Turn right." "Bear right onto Carrer Dr. Vilanova." "Enter Rotonda de Govern and take the 2nd exit." ...
      .. .. .. ..$ roundabout_exit_count                 : int [1:55] NA NA NA 2 NA NA 2 NA 2 NA ...
      .. .. .. ..$ toll                                  : logi [1:55] NA NA NA NA NA NA ...
      .. ..$ summary  :'data.frame':    1 obs. of  11 variables:
      .. .. ..$ has_time_restrictions: logi FALSE
      .. .. ..$ has_toll             : logi TRUE
      .. .. ..$ has_highway          : logi FALSE
      .. .. ..$ has_ferry            : logi FALSE
      .. .. ..$ min_lat              : num 42.5
      .. .. ..$ min_lon              : num 1.52
      .. .. ..$ max_lat              : num 42.6
      .. .. ..$ max_lon              : num 1.74
      .. .. ..$ time                 : num 1714
      .. .. ..$ length               : num 17.2
      .. .. ..$ cost                 : num 1854
      .. ..$ shape    : chr "_mmapAai{{A[iEuBsTIu@?uBNqAb@_Av@k@|@e@dBUd@?bAEbDCrELpCh@fBn@bBrAjAzAfBhE~@jC~@lCtIxZv@|@n@Rt@@|@KtHw@~@HpAh@p"| __truncated__
      ..$ summary       :List of 11
      .. ..$ has_time_restrictions: logi FALSE
      .. ..$ has_toll             : logi TRUE
      .. ..$ has_highway          : logi FALSE
      .. ..$ has_ferry            : logi FALSE
      .. ..$ min_lat              : num 42.5
      .. ..$ min_lon              : num 1.52
      .. ..$ max_lat              : num 42.6
      .. ..$ max_lon              : num 1.74
      .. ..$ time                 : num 1714
      .. ..$ length               : num 17.2
      .. ..$ cost                 : num 1854
      ..$ status_message: chr "Found route between points"
      ..$ status        : int 0
      ..$ units         : chr "miles"
      ..$ language      : chr "en-US"

We can convert the `$shape` column to a `sf` object and plot it.

``` r
remotes::install_cran("googlePolylines")
```

    Skipping install of 'googlePolylines' from a cran remote, the SHA1 (0.8.4) has not changed since last install.
      Use `force = TRUE` to force installation

``` r
remotes::install_cran("gepaf")
```

    Skipping install of 'gepaf' from a cran remote, the SHA1 (0.1.1) has not changed since last install.
      Use `force = TRUE` to force installation

``` r
line = googlePolylines::decode(json$trip$legs$shape)
class(line)
```

    [1] "list"

``` r
length(line)
```

    [1] 1

``` r
class(line[[1]])
```

    [1] "data.frame"

``` r
line_sf = sfheaders::sf_linestring(line[[1]])
plot(line_sf)
```

![](index_files/figure-commonmark/unnamed-chunk-4-1.png)

We can parse the
