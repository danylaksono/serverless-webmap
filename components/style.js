export default style = {
  version: 8,
  glyphs: "https://cdn.protomaps.com/fonts/pbf/{fontstack}/{range}.pbf",
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap Contributors",
      maxzoom: 19,
    },
    osmvt: {
      type: "vector",
      tiles: [
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.pbf",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.pbf",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.pbf",
      ],
      // tiles: [ // other tile sources
      //     [
      //       "https://tile.mapzen.com/mapzen/vector/v1/{layers}/{zoom}/{x}/{y}.mvt",
      //     ],
      //   ],
      maxzoom: 14,
    },
    protomapsRaster: {
      type: "raster",
      url: "pmtiles://https://pub-ee5ad887928649d582242a69272f342c.r2.dev/jogja_1925.pmtiles", // cloudflare
      // url: `pmtiles://${location.protocol}//${location.host}${location.pathname}jogja_1925.pmtiles`,
    },
    protomapsVector: {
      type: "vector",
      url: "pmtiles://https://pub-ee5ad887928649d582242a69272f342c.r2.dev/yogyakarta.pmtiles",
      attribution:
        '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
    },
  },
  layers:
    // layers("protomaps", "light") // if protomaps-themes-base is used
    [
      {
        id: "osm",
        type: "raster",
        source: "osm",
      },
      {
        id: "Jogja1925",
        type: "raster",
        source: "protomapsRaster",
        opacity: 0.65,
        minzoom: 0,
        maxzoom: 20,
      },
      {
        // this demonstrates how to add a vector layer
        id: "buildings",
        type: "fill",
        source: "protomapsVector",
        "source-layer": "buildings",
        opacity: 0.65,
        paint: {
          "fill-color": "steelblue",
        },
      },
    ],
};
