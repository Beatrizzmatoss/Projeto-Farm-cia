let currentIndex = 0;
let cartCount = 0;

function nextSlide() {
  const carousel = document.getElementById("carouselInner");
  const slides = carousel.children;
  currentIndex = (currentIndex + 1) % slides.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
  const carousel = document.getElementById("carouselInner");
  const slides = carousel.children;
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function addToCart() {
  cartCount++;
  document.getElementById("cartCount").innerText = cartCount;
}

// Auto-slide functionality
setInterval(nextSlide, 5000);