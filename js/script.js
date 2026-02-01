function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// Scroll-in animation (safe)
const animatedSections = document.querySelectorAll(".animate");

function animateOnScroll() {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
