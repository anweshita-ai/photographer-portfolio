// -------------------- Responsive Navbar Toggle --------------------
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// -------------------- Smooth Scrolling --------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// -------------------- Modal Logic: Open, Navigate, Close --------------------
let currentImageIndex = 0;
const images = [
  'images/portrait.jpg',
  'images/landscape.jpg',
  'images/wedding.jpg',
  'images/travel.jpg'
];

function openModal(src) {
  currentImageIndex = images.indexOf(src);
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
  if (direction === 'prev') {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  } else if (direction === 'next') {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  document.getElementById("modal-img").src = images[currentImageIndex];
}

// Optional: Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  navLinks.classList.toggle('mobile');
});



  // script.js
$(document).ready(function () {
  $("#hamburger").click(function () {
    $("#nav-links").toggleClass("active");
  });
});


// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
  
    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  

  function cameraFlash() {
    const flash = $('<div class="flash"></div>');
    $('body').append(flash);
    setTimeout(() => flash.remove(), 300);
  }
  
  $('.photo').click(cameraFlash);
  
  
  