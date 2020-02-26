///////////////////////////////////////////////////////////////////////////////////////////////////
// Smooth scrolling

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

// Add smooth scrolling to all links
$(document).ready(function() {
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault(); // Prevent default anchor click behavior
      var hash = this.hash; // Store hash

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },

        800, // specifies the number of milliseconds it takes to scroll to the specified area

        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});

////////////////////////////////////////////////////////////////////////////////////////////
// Mobile menu open/close

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

/////////////////////////////////////////////////////////////
// Show / Hide the header upon scroll up/down.

$(function() {
  var lastScrollTop = 0,
    delta = 5;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop) {
      // downscroll code
      // document.querySelector(".headerContainer").classList.remove("sticky");

      document
        .querySelector(".headerContainer")
        .classList.add("closeMobileHeader");
    } else {
      // upscroll code
      // document.querySelector(".headerContainer").classList.add("sticky");

      document
        .querySelector(".headerContainer")
        .classList.remove("closeMobileHeader");
    }
    lastScrollTop = st;
  });
});

////////////////////////////////////////////////////////////////

// // TODO:
// function animateIfInView() {
//   $.each($(".wow"), function(key, value) {
//     if (isElementInViewport($(value))) {
//       $(value).addClass("wow-in-view");
//     } else {
//       // (Optional) Fade out when out of view
//       $(value).removeClass("wow-in-view");
//     }
//   });
// }

// // TODO:
// // http://stackoverflow.com/a/7557433/5628
// function isElementInViewport(el) {
//   //special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }

//   var rect = el.getBoundingClientRect();

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight ||
//         document.documentElement.clientHeight) /*or $(window).height() */ &&
//     rect.right <=
//       (window.innerWidth ||
//         document.documentElement.clientWidth) /*or $(window).width() */
//   );
// }
