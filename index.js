window.addEventListener("scroll", function () {
  this.document
    .querySelector("nav")
    .classList.toggle("active", window.scrollY > 50);
});

let nav = document.querySelector("nav");
let navigators = document.querySelectorAll(".nav-el");
let link_con = document.querySelector(".links");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector(".menu-bar");

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  if (window.scrollY < 50) {
    nav.classList.toggle("active");
  }
  link_con.classList.toggle("active");
  overlay.classList.toggle("active");
});

navigators.forEach(function (i) {
  i.addEventListener("click", function () {
    menu.classList.toggle("active");
    if (window.scrollY < 50) {
      nav.classList.toggle("active");
    }
    link_con.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});
