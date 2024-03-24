import "./style.css";
import "./style.css";
import * as pmtiles from "pmtiles";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// import layers from "protomaps-themes-base";

const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

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
    protomapsRaster: {
      type: "raster",
      url: "pmtiles://https://pub-ee5ad887928649d582242a69272f342c.r2.dev/jogja_1925.pmtiles",
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
      // {
      //   id: "osm",
      //   type: "raster",
      //   source: "osm",
      // },
      {
        id: "Jogja1925",
        type: "raster",
        source: "protomapsRaster",
        opacity: 0.65,
        minzoom: 0,
        maxzoom: 20,
      },

      // { // this demonstrates how to add a vector layer
      //   id: "buildings",
      //   type: "fill",
      //   source: "protomapsVector",
      //   "source-layer": "buildings",
      //opacity: 0.65,
      //   paint: {
      //     "fill-color": "steelblue",
      //   },
      // },
    ],
};

// Initialise the map
const map = new maplibregl.Map({
  container: "map",
  style: style,
  zoom: 12,
  center: [110.365685, -7.794314],
});

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

map.on("load", () => {
  const myBounds = [109.404327, -8.42347, 111.490357, -7.43056]; //myMap.getSource("protomaps").bounds;
  map.setMaxBounds(myBounds);

  slider.addEventListener("input", (e) => {
    map.setPaintProperty(
      "Jogja1925",
      "raster-opacity",
      parseInt(e.target.value, 10) / 100
    );

    // Value indicator
    sliderValue.textContent = e.target.value + "%";
  });

  map.addControl(new maplibregl.ScaleControl({ unit: "metric" }));
  map.addControl(new maplibregl.NavigationControl());
});
