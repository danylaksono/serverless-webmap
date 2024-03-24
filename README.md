# Serverless WebMap Prototype

A prototype and proof of concept of a serverless web map app based on PMTiles, using Maplibre GL JS and Cloudflare Workers.
Heavily inspired by this [Simon Willison’s TILs](https://github.com/simonw/til/blob/main/gis/pmtiles.md).

## Components

- **PMTiles**: A specification for serving raster tiles from a key-value store.
- **Maplibre GL JS**: A JavaScript library for interactive, customizable vector maps.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Cloudflare Workers**: A serverless platform for deploying and running code at the edge of the network.

## Data

The data is stored in a PMTiles file, which is a single-file format for storing raster tiles in a key-value store. The PMTiles file is hosted on Cloudflare Workers KV.

- **Jogjakarta en Omstreken 1925**: [A colonial map of Yogyakarta](https://nla.gov.au/nla.obj-649375951/view), georeferenced and converted to mbtiles using QGIS. Converted to PMTiles using [pmtiles-cli](https://docs.protomaps.com/pmtiles/create#mbtiles)
- **Yogyakarta**: A modern map of Yogyakarta [from OpenStreetMap](https://www.openstreetmap.org/#map=13/-7.7954/110.3691), extracted using `pmtiles extract` and converted to PMTiles format using [pmtiles-cli](https://docs.protomaps.com/guide/getting-started#_3-extract-any-area)

## Storage

Cloudflare R2 public bucket with limited availability (since it's free).

## Deployment

Deployed as Github pages for demo purposes. Github workflow at `main.yml`. Ideally this should be deployed as a Cloudflare Worker.

---

TODO: Use Cloudflare Workers KV for storing the PMTiles file.
