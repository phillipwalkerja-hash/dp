// ==================== Slideshow ====================
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// ==================== Hamburger Menu Toggle ====================
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active"); // Toggle the 'active' class
}

// ==================== Page Skip Animations ====================
document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  if (nextBtn) {
    nextBtn.addEventListener("click", function(event) {
      event.preventDefault();
      document.body.classList.add("slide-left");
      setTimeout(() => {
        // Pass info to next page
        window.location.href = this.href + "?enter=right";
      }, 600);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function(event) {
      event.preventDefault();
      document.body.classList.add("slide-right");
      setTimeout(() => {
        window.location.href = this.href + "?enter=left";
      }, 600);
    });
  }

  // Handle incoming animation
  const params = new URLSearchParams(window.location.search);
  const enter = params.get("enter");
  if (enter === "left") {
    document.body.classList.add("page-enter-left");
  } else if (enter === "right") {
    document.body.classList.add("page-enter-right");
  }
});
document.querySelector(".flip-btn").addEventListener("click", function(event) {
  event.preventDefault();
  document.body.classList.add("page-flip");
  setTimeout(() => {
    window.location.href = this.href;
  }, 800); // match animation duration
});