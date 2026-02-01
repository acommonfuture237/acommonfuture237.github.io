function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

/* =========================
   SCROLL ANIMATION (WORKING)
   ========================= */

const animatedElements = document.querySelectorAll(".animate");

function handleScrollAnimation() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("load", handleScrollAnimation);
window.addEventListener("scroll", handleScrollAnimation);
