require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
    $('code.lang-flowchart').each(function(index, element) {
      var $element = $(element),
          code = $element.value,
          chart;
      console.log($element.value);
      console.log(code);
      
      var wrapper = $("<div id='canvas'></div>");
      $element.parent().replaceWith(wrapper);

      chart = flowchart.parse(code);
      chart.drawSVG('canvas')
    });
  });
});
