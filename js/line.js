var vg_1 = "js/line.vg.json";

vegaEmbed("#line_chart", vg_1)
  .then(function (result) {
    // access the Vega view instance (www.vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
