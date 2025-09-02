// Toggle menu untuk mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ====== POPUP IMAGE VIEW ======
const galleryItems = document.querySelectorAll(".gallery-item img");
const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");
const closePopup = document.querySelector(".close-popup");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    popup.style.display = "block";
    popupImg.src = item.src;
  });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// === TESTIMONI CAROUSEL ===
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".testimoni-card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  let autoSlide;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if (i === index) card.classList.add("active");
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  // Event Listeners
  nextBtn.addEventListener("click", nextCard);
  prevBtn.addEventListener("click", prevCard);

  // Auto Slide
  function startAutoSlide() {
    autoSlide = setInterval(nextCard, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Start autoplay
  startAutoSlide();

  // Pause on hover
  document
    .querySelector(".testimoni-carousel")
    .addEventListener("mouseenter", stopAutoSlide);
  document
    .querySelector(".testimoni-carousel")
    .addEventListener("mouseleave", startAutoSlide);
});
