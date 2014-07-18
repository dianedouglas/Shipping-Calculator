$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputWeight = parseInt($("#weight").val());
    var inputHeight = parseInt($("#height").val());
    var inputWidth = parseInt($("#width").val());
    var inputDepth = parseInt($("#depth").val());
    var box = { weight: inputWeight, height: inputHeight, width: inputWidth, depth: inputDepth };
    if (inputWeight && inputHeight && inputWidth && inputDepth) {
      var outputCost = 1.5*box.height*box.width*box.depth + .5*box.weight;
      $("#cost-output").fadeIn();
      $(".cost").text(outputCost);
    } else {
      $("#cost-output").hide();
      $(".displayError").fadeIn();
    }
  });
});
