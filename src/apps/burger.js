import { toggleForm } from "./sidebar";

const toggleBurger = () => {
  const burger = document.querySelector(".burger-menu");
  burger.classList.toggle("burger-active");
};

const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("side-overlay");

  if (overlay) {
    console.log("still here");
  }
  console.log(overlay);
  sidebar.classList.toggle("side-show");
  overlay.classList.toggle("active");

  if (overlay) {
    AddOverlayListener(overlay);
  }
};

export const toggleMenu = () => {
  const form = document.querySelector(".form-unfolded");

  // if form is open
  if (form) {
    toggleForm();
  }
  toggleBurger();
  toggleSidebar();
};

export const burgerListen = () => {
  const burger = document.querySelector(".burger-menu");
  burger.addEventListener("click", () => {
    toggleMenu();
  });
};

export const AddOverlayListener = (overlay) => {
  overlay.addEventListener("click", () => {
    toggleMenu();
  });
};
