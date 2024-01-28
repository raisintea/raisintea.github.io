// $(document).ready(function() {
  
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop() + $(window).height();
//     if (scroll == $(document).height()) {
//       $('#mouse-scroll').addClass('fade');
//     } else{
//       $('#mouse-scroll').removeClass('fade');
//     }
//   })
// });

$.scrollify({
    section : ".panel",
    scrollSpeed:1100,
    scrollbars:false,
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");

      $(".navbar-nav .active").removeClass("active");

      $(".navbar-nav").find("a[href=\"#" + ref + "\"]").addClass("active");

      if(ref == "others"){
        $('#mouse-scroll').addClass('fade');
      }
      else{
        $('#mouse-scroll').removeClass('fade');
      }
    },
    afterRender:function() {
      var navbar = "<ul class=\"navbar-nav\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
          activeClass = "active";
        }
        navbar += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      navbar += "</ul>";

      $(".home").append(navbar);

      $(".navbar a").on("click",$.scrollify.move);
    }
  });