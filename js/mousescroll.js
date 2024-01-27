$(document).ready(function() {
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop() + $(window).height();
    if (scroll == $(document).height()) {
      $('#mouse-scroll').addClass('fade');
    } else{
      $('#mouse-scroll').removeClass('fade');
    }
  })
});