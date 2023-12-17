const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const html = document.querySelector(".html");
const nav = document.querySelector(".nav");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");

function evento(){
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
  html.classList.toggle("active");
  nav.classList.toggle("active");
};

hamburger.addEventListener("click", function() {
  evento();
});

link1.addEventListener("click", function() {
  evento();
});

link2.addEventListener("click", function() {
  evento();
});

link3.addEventListener("click", function() {
  evento();
});

link4.addEventListener("click", function() {
  evento();
});

window.addEventListener("scroll", function(){
  nav.classList.toggle("rolagem",window.scrollY > 35);
  menu.classList.toggle("rolagem",window.scrollY > 35);
});
