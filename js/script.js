/* ================= MOBILE MENU ================= */
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}

/* ================= SCROLL REVEAL ANIMATIONS ================= */
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });
});
// Page loader hide when fully loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.4s ease";
    setTimeout(() => {
      loader.style.display = "none";
    }, 400);
  }
});
