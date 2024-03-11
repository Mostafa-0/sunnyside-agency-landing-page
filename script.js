const navBar = document.querySelector("nav");
const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
