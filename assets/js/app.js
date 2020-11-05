$('.our-skill').circleProgress({
    size:150,
    thickness:15
  }).on('circle-animation-progress', function(event, progress) {
      var percentvalue=$(this).find('span').attr('data-value')
    $(this).find('span').html(Math.round(percentvalue * progress) + '<i>%</i>');
    console.log(progress);
  });
 

  var mixer = mixitup('.item',{
    animation: {
     duration: 300
    }
  });