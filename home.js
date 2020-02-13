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

// TODO:

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

$(document).ready(function() {
  $(window).scrollTop(0);
});

////////////////////////////////////////////////////////////////

// TODO:
function animateIfInView() {
  $.each($(".wow"), function(key, value) {
    if (isElementInViewport($(value))) {
      $(value).addClass("wow-in-view");
    } else {
      // (Optional) Fade out when out of view
      $(value).removeClass("wow-in-view");
    }
  });
}

// TODO:
// http://stackoverflow.com/a/7557433/5628
function isElementInViewport(el) {
  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  );
}
