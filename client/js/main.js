$(document).ready(function() {
  $.get("/stuff", function(data) {
    console.log(data);
    console.log('word');
  });
});