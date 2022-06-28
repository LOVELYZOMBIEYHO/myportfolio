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

// -----------Jquery-------------------------------------------------------------

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
//   const scroll1 = $(window).scrollTop();
//   if ($(window).width() < 500) {
//     if (scroll1 >= 3000) {
//       $(".item").css("visibility", "visible");
//       $(".item").addClass("text-focus-in");
//     }
//   } else if ($(window).width() >= 500) {
//     if (scroll1 >= 500) {
//       $(".item").css("visibility", "visible");
//       $(".item").addClass("text-focus-in");
//     }
//   }
// });

// ----------Vanilla Js--------------------------------------------------------------

// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
// });

// window.addEventListener(
//   "scroll",
//   function () {
//     // (手機版)用scroll function ,然後選取第一張 card 的top- 過了第一張便會顯示 visible ,但因想由第一張顯示.因此在yoffset +500 用以在第一張時顯示
//     let cardFirst = document.querySelector(".card");
//     if (cardFirst.offsetTop <= window.pageYOffset + 500) {
//       let all = document.getElementsByClassName("card");
//       for (let i = 0; i < all.length; i++) {
//         all[i].className += " text-focus-in";
//         all[i].style.visibility = "visible";
//       }
//     }
//     // (手機版)用scroll function ,然後選取第一張 item 的top- 過了第一張便會顯示 visible ,但因想由第一張顯示.因此在yoffset +500 用以在第一張時顯示
//     let itemFirst = document.querySelector(".item");
//     if (itemFirst.offsetTop <= window.pageYOffset + 500) {
//       let all = document.getElementsByClassName("item");
//       for (let i = 0; i < all.length; i++) {
//         all[i].className += " text-focus-in";
//         all[i].style.visibility = "visible";
//       }
//     }
//   },
//   false
// );

// // Create a media condition that targets viewports at least 500px wide
// const mediaQuery = window.matchMedia("(min-width: 500px)");
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // allCard 全部一開始顯示
//   let allCard = document.getElementsByClassName("card");
//   for (let i = 0; i < allCard.length; i++) {
//     allCard[i].className += " text-focus-in";
//     allCard[i].style.visibility = "visible";
//   }
//   // allItem 全部一開始顯示
//   let allItem = document.getElementsByClassName("item");
//   for (let i = 0; i < allItem.length; i++) {
//     allItem[i].className += " text-focus-in";
//     allItem[i].style.visibility = "visible";
//   }
// }

// ----------Vanilla Js (last version1)--------------------------------------------------------------

// window.addEventListener(
//   "scroll",
//   function () {
//     // (手機版)用scroll function ,然後選取第一張 card 的top- 過了第一張便會顯示 visible ,但因想由第一張顯示.因此在yoffset +500 用以在第一張時顯示
//     let cardFirst = document.querySelector(".card");
//     if (cardFirst.offsetTop <= window.pageYOffset + 500) {
//       let all = document.getElementsByClassName("card");
//       for (let i = 0; i < all.length; i++) {
//         all[i].className += " text-focus-in";
//         all[i].style.visibility = "visible";
//       }
//     }
//     // (手機版)用scroll function ,然後選取第一張 item 的top- 過了第一張便會顯示 visible ,但因想由第一張顯示.因此在yoffset +500 用以在第一張時顯示
//     let itemFirst = document.querySelector(".item");
//     if (itemFirst.offsetTop <= window.pageYOffset + 500) {
//       let all = document.getElementsByClassName("item");
//       for (let i = 0; i < all.length; i++) {
//         all[i].className += " text-focus-in";
//         all[i].style.visibility = "visible";
//       }
//     }
//   },
//   false
// );

// // Create a media condition that targets viewports at least 500px wide
// const mediaQuery = window.matchMedia("(min-width: 500px)");
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // allCard 全部一開始顯示
//   let allCard = document.getElementsByClassName("card");
//   for (let i = 0; i < allCard.length; i++) {
//     allCard[i].className += " text-focus-in";
//     allCard[i].style.visibility = "visible";
//   }
//   // allItem 全部顯示 after .card first component
//   window.addEventListener(
//     "scroll",
//     function () {
//       // (電腦版)
//       let cardAfter = document.querySelector(".card");
//       if (cardAfter.offsetTop <= window.pageYOffset) {
//         let all = document.getElementsByClassName("item");
//         for (let i = 0; i < all.length; i++) {
//           all[i].className += " text-focus-in";
//           all[i].style.visibility = "visible";
//         }
//       }
//     },
//     false
//   );
// }

// ----------Vanilla Js (last version2)--------------------------------------------------------------

window.addEventListener(
  "scroll",
  function () {
    // (手機版)用scroll function ,然後選取第一張 card 的top- 過了第一張便會顯示 visible ,但因想由第一張顯示.因此在yoffset +500 用以在第一張時顯示
    let cardFirst = document.querySelector(".card");
    if (cardFirst.offsetTop <= window.pageYOffset + 500) {
      let all = document.getElementsByClassName("card");
      for (let i = 0; i < all.length; i++) {
        all[i].className += " text-focus-in";
        all[i].style.visibility = "visible";
      }
    }
  },
  false
);

// Create a media condition that targets viewports at least 500px wide
const mediaQuery = window.matchMedia("(min-width: 500px)");
// Check if the media query is true
if (mediaQuery.matches) {
  // allCard 全部一開始顯示
  let allCard = document.getElementsByClassName("card");
  for (let i = 0; i < allCard.length; i++) {
    allCard[i].className += " text-focus-in";
    allCard[i].style.visibility = "visible";
  }
}

// allItem 全部顯示 after .card last component 適用於手機版及電腦版全部
window.addEventListener(
  "scroll",
  function () {
    let cardAfter = document.querySelectorAll(".card");
    let lastCard = cardAfter[cardAfter.length - 1];
    if (lastCard.offsetTop <= window.pageYOffset) {
      let all = document.getElementsByClassName("item");
      for (let i = 0; i < all.length; i++) {
        all[i].className += " text-focus-in";
        all[i].style.visibility = "visible";
      }
    }
  },
  false
);

// ---------scroll to top-------------------------------------------------------------------
let scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
