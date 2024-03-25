import "./style.css";
import * as pmtiles from "pmtiles";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// import layers from "protomaps-themes-base";
import style from "./components/style";

const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

// Initialise the map
const map = new maplibregl.Map({
  container: "map",
  style: style,
  // style: "https://openmaptiles.github.io/osm-bright-gl-style/style-cdn.json",
  zoom: 12,
  center: [110.365685, -7.794314],
});

map.once("load", () => {
  // map.addSource("protomapsRaster", { // this is defined in style.js
  //   type: "raster",
  //   url: "pmtiles://https://pub-ee5ad887928649d582242a69272f342c.r2.dev/jogja_1925.pmtiles",
  // });
  map.addLayer({
    id: "wmsRaster",
    type: "raster",
    source: "wmsRaster",
    opacity: 0.65,
    paint: {},
    minzoom: 0,
    maxzoom: 15,
  });
});

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

map.on("load", () => {
  const myBounds = [109.404327, -8.42347, 111.490357, -7.43056]; // from bboxfinder.com
  //other: myMap.getSource("protomaps").bounds;
  map.setMaxBounds(myBounds);

  slider.addEventListener("input", (e) => {
    // alternatively, https://github.com/mug-jp/maplibre-gl-opacity can be used
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
