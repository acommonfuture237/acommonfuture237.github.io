function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

function setHeaderHeight() {
  const header = document.querySelector("header");
  if (header) {
    document.documentElement.style.setProperty(
      "--header-height",
      header.offsetHeight + "px"
    );
  }
}

window.addEventListener("load", setHeaderHeight);
window.addEventListener("resize", setHeaderHeight);
