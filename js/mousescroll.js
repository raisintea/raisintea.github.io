// window.onscroll = function() {
//     // Set the height to check for
//   var appear = 20
//   if (window.pageYOffset >= appear) {
//     // If more show the element
//     document.getElementById("mouse-scroll").style.opacity = '1'
//     document.getElementById("mouse-scroll").style.pointerEvents = 'all'
//   } else {
//     // Else hide it
//     document.getElementById("mouse-scroll").style.opacity = '0'
//     document.getElementById("mouse-scroll").style.pointerEvents = 'none'
//   }
// }

$(document).ready(function() {
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $('#mouse-scroll').addClass('fade');
    } else{
      $('#mouse-scroll').removeClass('fade');
    }
  })
});