import "./main.css";
import { loadHome } from "./apps/page-loader";
import { formListen } from "./apps/form";
import { burgerListen } from "./apps/burger";
export const content = document.getElementById("content");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

// openModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });

// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }

// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }

// TODO
// edit date-time format -- DONE --
// Make popup for description viewing
// make popup for details editing
// make different builder functions for today/week
// group todo items into projects
// make listBuilder accoding to project groups
// add priority property to todo items

// loadHome();
burgerListen();
formListen();

//today's date
