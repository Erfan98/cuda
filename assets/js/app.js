$('.our-skill').circleProgress({
    size:150,
    thickness:15
  }).on('circle-animation-progress', function(event, progress) {
      var percentvalue=$(this).find('span').attr('data-value')
    $(this).find('span').html(Math.round(percentvalue * progress) + '<i>%</i>');
  });
 

  var mixer = mixitup('.item',{
    animation: {
     duration: 300
    }
  });

  var typed = new Typed('.type', {
    strings: ["A Programmer ^1000 ","An Observer ^1000 ","A Thinker ^1000 ","and Most Importantly^1000 ","A Human"],
    typeSpeed: 90
  });

  //JS for particle

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});