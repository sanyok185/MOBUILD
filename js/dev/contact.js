import "./popup.min.js";
const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
function addTouchAttr() {
  if (isMobile.any())
    document.documentElement.setAttribute("data-fls-touch", "");
}
const items = document.querySelectorAll(".item-about");
if (items.length) {
  if (isMobile.any()) {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  } else {
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        items.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  addTouchAttr();
});
