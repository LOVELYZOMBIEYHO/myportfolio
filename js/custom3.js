// $(window).scroll(function () {
//   const scroll = $(window).scrollTop();
//   if ($(window).width() < 500) {
//     if (scroll >= 600) {
//       $(".card").css("visibility", "visible");
//       $(".card").addClass("text-focus-in");
//     }
//   }
// });

// if ($(window).width() >= 500) {
//   $(".card").css("visibility", "visible");
//   $(".card").addClass("text-focus-in");
// }

// $(window).scroll(function () {
//   const scroll = $(window).scrollTop();
// });

// -----------------------------------------------------
// if ($(window).width() < 991) {
//   $(".myRow").removeClass("slide-right");
//   $(".myRow").removeClass("slide-left");
//   $(".myRow").addClass("text-focus-in");
// }

// -----------scroll fade in/out Animation------------------------------------------

$(window).on("load", function () {
  function fade() {
    var animation_height = $(window).innerHeight() * 0.5;
    var ratio = Math.round((1 / animation_height) * 10000) / 10000;

    $(".myRow").each(function () {
      var objectTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height) {
          $(this).css({
            transition: "opacity 0.1s linear",
            opacity: 1,
          });
          $(this).addClass("slide-fwd-top");
        } else {
          $(this).css({
            transition: "opacity 0.25s linear",
            opacity: (windowBottom - objectTop) * ratio,
          });
        }
      } else {
        $(this).css("opacity", 0);
      }
    });
  }
  $(".myRow").css("opacity", 0);
  fade();
  $(window).scroll(function () {
    fade();
  });
});

// ---------scroll to top-------------------------------------------------------------------
let scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
