const open = document.querySelector(".nav__close__icon");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

function openList() {
   open.classList.toggle("bi-x");
   nav.classList.toggle("nav__active");
   main.classList.toggle("main__active");
   
};

open.addEventListener("click", openList);