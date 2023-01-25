const toggleBurger = () => {
  const burger = document.querySelector(".burger-menu");
  burger.classList.toggle("burger-active");
};

const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("side-show");
};

const toggleMenu = () => {
  toggleBurger();
  toggleSidebar();
};

export const burgerListen = () => {
  const burger = document.querySelector(".burger-menu");
  burger.addEventListener("click", () => {
    toggleMenu();
  });
};
