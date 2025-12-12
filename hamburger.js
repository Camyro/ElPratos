// If it it works, don't fix it

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

function evento(){
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
};

window.addEventListener("scroll", function(){
  nav.classList.toggle("rolagem",window.scrollY > 35);
  menu.classList.toggle("rolagem",window.scrollY > 35);
});
