$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });

  $(".clickable-2").click(function() {
    $("#initially-hidden-2").fadeToggle();
    $("#initially-showing-2").fadeToggle();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
