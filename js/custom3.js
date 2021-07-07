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

if ($(window).width() < 991) {
  $(".myRow").removeClass("slide-right");
  $(".myRow").removeClass("slide-left");
  $(".myRow").addClass("text-focus-in");
}
