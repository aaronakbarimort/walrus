$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });

  $(".clickable-2").click(function() {
    $("#initially-hidden-2").fadeToggle();
    $("#initially-showing-2").fadeToggle();
  });

});
