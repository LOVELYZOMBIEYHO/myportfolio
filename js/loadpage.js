//選取h1, /\S/g為regular expression
const h1 = document.querySelector("h1");
h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>");
// 將字一個個出特效，不加這個會變第二個特效
let delay = 0;
document.querySelectorAll("span").forEach((span, index) => {
  delay += 0.08;
  //   模擬打字停頓效果
  if (index === 9) delay += 0.3;

  span.style.setProperty("--delay", `${delay}s`);
});

//Jquery 停止BODY進行任何SCROLL
$("body").on("scroll touchmove mousewheel", function (e) {
  e.preventDefault();
  e.stopPropagation();
});

//Jquery 3.5秒後執行 解除LOCK SCROLL
setTimeout(() => {
  $("body").unbind("scroll touchmove mousewheel").scroll();
}, 3500);

//Jquery 3.5秒後 fadeout loading-wrapper
$(document).ready(function () {
  setTimeout(function () {
    $(".loading-wrapper").fadeOut(500);
  }, 3500);
});
