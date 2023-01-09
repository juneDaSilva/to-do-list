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

const toggleMenu = () => {
  toggleBurger();
  toggleSidebar();
  toggleMain();
};

const burgerListen = () => {
  burger.addEventListener("click", () => {
    toggleMenu();
  });
};

export { burgerListen };
