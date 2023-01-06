const burger = document.querySelector(".burger-menu");
const sidebar = document.querySelector(".sidebar");

const toggleBurger = () => {
  burger.classList.toggle("burger-active");
};

const toggleSidebar = () => {
  sidebar.classList.toggle("side-show");
};

const burgerListen = () => {
  burger.addEventListener("click", () => {
    toggleBurger();
    toggleSidebar();
  });
};

export { burgerListen };
