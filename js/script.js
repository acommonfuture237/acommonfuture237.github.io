function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// Close menu when a link is clicked (mobile UX fix)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});

// Scroll animations
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      sec.classList.add("show");
    }
  });
});
