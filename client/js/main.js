$(document).ready(function() {
  var words = $('#bio > p');
  var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
  

  function getSupportedPropertyName(properties) {
      for (var i = 0; i < properties.length; i++) {
          if (typeof document.body.style[properties[i]] != "undefined") {
              return properties[i];
          }
      }
      return null;
  }
  animateDiv();
  function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    $container = ($container || $(window));
    var h = $container.height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * 50);

    return [nh, nw];

  }

  function animateDiv() {
    var $target = $('#bio');


    $('#bio > p').each(function(){
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $(this).animate({
        top: newq[0],
        left: newq[1]
      }, speed, function() {
        animateDiv();
      });
    });
  }

  function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

  }

  // function randomNum() {
  //   return Math.floor(Math.random() * 5);
  // }

  // words.each(function() { 
  //   var transformProperty = getSupportedPropertyName(transform);
  //   var randomX = randomNum();
  //   var randomY = randomNum();
  //   console.log(transformProperty);
  //   $(this).animate({
  //       'opacity': '320'
  //   }, {
  //       step: function (now, fx) {
  //         $(this).css({transform: "translate3d(" + randomX * now + "px, " + randomY * now + "px," + "0px)"});

  //       },
  //       duration: 10000,
  //       easing: 'linear',
  //       queue: false
  //   }, 'linear');
  
  // });

});