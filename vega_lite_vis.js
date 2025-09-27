// vega_lite_vis.js
var vg_1 = "specs/mys_crude_exports_2023_map.vg.json";
vegaEmbed("#export_map", vg_1)   // ← 这里改成 #export_map
  .then(function (result) {
    // result.view 可做进阶控制
  })
  .catch(console.error);
