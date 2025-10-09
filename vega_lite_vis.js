// vega_lite_vis.js
const specUrl = "specs/mys_crude_exports_2023_map.vg.json?v=1"; // v 参数防缓存
vegaEmbed("#export_map", specUrl, {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);
