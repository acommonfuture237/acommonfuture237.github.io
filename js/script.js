function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

/* =========================
   VISIBLE CONTENT ANIMATION
   ========================= */

window.addEventListener("load", () => {
  document.querySelectorAll(".animate").forEach(el => {
    // force initial state
    el.classList.remove("show");

    // visible delay so animation can be seen
    setTimeout(() => {
      el.classList.add("show");
    }, 400);
  });
});
