// GSAP
// document.addEventListener("DOMContentLoaded", function () {
//   gsap.fromTo(".introBoxCss", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
//   gsap.fromTo(".card", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
// });

// document.addEventListener("DOMContentLoaded", function () {});

// let body = document.querySelector("body");

// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 500) {
//     document.getElementById("#1").classList.add("text-focus-in");
//   }
// });

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  if ($(window).width() < 500) {
    if (scroll >= 600) {
      $(".card").css("visibility", "visible");
      $(".card").addClass("text-focus-in");
    }
  }
});

if ($(window).width() >= 500) {
  $(".card").css("visibility", "visible");
  $(".card").addClass("text-focus-in");
}
