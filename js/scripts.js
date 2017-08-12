// Business (or back-end) logic:
var po = function(number1) {
  return number1 * 16;
}

var og = function(number1) {
  return number1  / 0.035274;
}

var cl = function(number1) {
  return number1 * 0.236588;
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#poundsToOunces").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#po1").val());
    var result = po(number1);
    $("#output1").text(result + " ounces").fadeIn(1000);
  });

  $("form#ouncesToGrams").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#og1").val());
    var result = og(number1);
    $("#output2").text(result + " grams").fadeIn(1000);
  });

  $("form#cupsToLiters").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#cl1").val());
    var result = cl(number1);
    $("#output3").text(result + " liters").fadeIn(1000);
  });

});
