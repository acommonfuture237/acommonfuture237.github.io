// Hamburger Menu
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// Scroll animations
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
