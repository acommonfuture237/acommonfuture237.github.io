function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// FORCE animation after page load (no scroll required)
window.addEventListener("load", () => {
  document.querySelectorAll(".animate").forEach(el => {
    setTimeout(() => {
      el.classList.add("show");
    }, 300);
  });
});
