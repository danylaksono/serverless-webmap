const style = {
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
      maxzoom: 20,
    },
    wmsRaster: {
      type: "raster",
      tiles: [
        "https://ppids-ugm.com/geoserver/ppids/wms?bbox={bbox-epsg-3857}&&format=image/png&service=WMS&transparent=true&version=1.1.1&request=GetMap&srs=EPSG:3857&width=256&height=256&layers=ppids%3Ajogja_1925_cog",
        // SERVICE=WMS&REQUEST=GetMap&VERSION=1.1.1&LAYERS=ppids%3Ajogja_1925_cog&STYLES=&SRS=EPSG%3A4326&bbox=bbox=110.32798548245933%2C-7.8334939429921615%2C110.40927177637579%2C-7.760966807896364&WIDTH=256&HEIGHT=256&FORMAT=image%2Fpng",
      ],
      tileSize: 256,
      maxzoom: 15,
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
        // this demonstrates how to add a raster layer
        id: "Jogja1925",
        type: "raster",
        source: "protomapsRaster",
        opacity: 0.65,
        minzoom: 0,
        maxzoom: 20,
      },
      // {
      //   // this demonstrates how to add a vector layer
      //   id: "buildings",
      //   type: "fill",
      //   source: "protomapsVector",
      //   "source-layer": "buildings",
      //   opacity: 0.65,
      //   paint: {
      //     "fill-color": "steelblue",
      //   },
      // },
    ],
};

export default style;
