$(document).ready(function() {
  $("#clickme1").click(function() {
    $("#section1").fadeToggle();
  });
  $("#clickme2").click(function() {
    $("#section2").slideToggle();
  });
  $("#clickme3").click(function() {
    $("#section3").toggle();
  });
});