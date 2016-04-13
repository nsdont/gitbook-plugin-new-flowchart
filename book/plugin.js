require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
    $('code.lang-flow').each(function(index, element) {
      var $element = $(element),
          code = $element.text(),
          chart;
      
      var wrapper = $("<div id='canvas'></div>");
      $element.parent().replaceWith(wrapper);

      chart = flowchart.parse(code);
      chart.drawSVG('canvas')
    });
  });
});
