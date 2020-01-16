$(document).ready(function() {
  $("form").submit(function(event) {
    var color = $("#color").val();
    var actor = $("#actor").val();

    if (actor === "Carrie Fisher") {
      $(".character").text("Princess Leah");
    } else if (actor === "Adam Driver") {
      $(".character").text("Kylo Ren");
    } else if (actor === "Harrison Ford") {
      $(".character").text("Han Solo");
    } else if (actor === "Daisy Ridley") {
      $(".character").text("Rey");
    }
    $("#result").show();
    event.preventDefault();
  })
});