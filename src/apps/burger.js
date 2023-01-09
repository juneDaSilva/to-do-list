const toggleBurger = () => {
  const burger = document.querySelector(".burger-menu");
  burger.classList.toggle("burger-active");
};

const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("side-show");
};

const toggleMain = () => {
  const main = document.querySelector(".main");
  main.classList.toggle("inactive-main");
};

const toggleMenu = () => {
  toggleBurger();
  toggleSidebar();
  toggleMain();
};

export const burgerListen = () => {
  const burger = document.querySelector(".burger-menu");
  burger.addEventListener("click", () => {
    toggleMenu();
  });
};
