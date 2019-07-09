let count = 0;

$(document).ready (() => {

  new WOW().init();

  $('.burger-nav').on('click', function() {
    $('.container nav ul').toggleClass('open')
  });

  $('.js-wp-2').waypoint((direction) => {
    $('.js-wp-2').addClass('animated slideInUp');
  }, {
    offset: '70%'
  });

  $('.js-wp-3').waypoint((direction) => {
    $('.js-wp-3').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });

  $(".iphone-btn").delay(2000).animate( {top: "+=+3"}, 250);
  $(".iphone-btn").delay(200).animate( {top: "+=-3"}, 200);


  //Some extra things.
  $('.download-btn').on('click', () => {
    count++;
    if (count === 1) {
      $('.download-btn').text('You clicked '+count+ " time.");
    }
    else {
      $('.download-btn').text('Wow, you clicked '+count+ " times!");
    }   
  });
});