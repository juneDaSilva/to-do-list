const burger = document.querySelector(".burger-menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");

const toggleBurger = () => {
  burger.classList.toggle("burger-active");
};

const toggleSidebar = () => {
  sidebar.classList.toggle("side-show");
};

const toggleMain = () => {
  main.classList.toggle("inactive-main");
};

const burgerListen = () => {
  burger.addEventListener("click", () => {
    toggleBurger();
    toggleSidebar();
    toggleMain();
  });
};

export { burgerListen };
