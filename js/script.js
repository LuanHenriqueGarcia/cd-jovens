function revelarVideo(button) {
  var overlay = button.parentElement;
  overlay.style.display = "none";
}

const generos = ["professora", "professor"];

const texts = [
  "Realidade virtual, Robótica e IA",
  "Word, Excel e Lógica de programação"
];

const images = ["img/image.png", "img/image1.png"];

const names = ["Eduarda", "Cleber"];

let currentIndex = 0;

document.getElementById("next-btn").addEventListener("click", function (event) {
  event.preventDefault();

  currentIndex = (currentIndex + 1) % texts.length;

  document.getElementById("professor-genero").textContent = generos[currentIndex];
  document.getElementById("content-text").textContent = texts[currentIndex];
  document.getElementById("content-image").src = images[currentIndex];
  document.getElementById("professor-name").textContent = names[currentIndex];
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};


