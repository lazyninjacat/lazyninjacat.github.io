$(function() {
  $("a[href*=#]").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function() {
  $("#nav-icon3").click(function() {
    $(this).toggleClass("open");
    $(".menu").slideToggle("fast");
  });
});

$(document).ready(function() {
  $(".menu").click(function() {
    $("#nav-icon3").toggleClass("open");
    $(".menu").slideToggle("fast");
  });
});

// window.onscroll = function() {
//   hideHeaderOnScrollDown();
// };

// function hideHeaderOnScrollDown() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").className = "slideUp";
//   } else if(document.documentElement.scrollTo  {
//     document.getElementById("header").className = "slideDown";
//   }
// }

var position = $(window).scrollTop();

// should start at 0

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > position) {
    document.getElementById("header").slideToggle("fast");

  position = scroll;
});
