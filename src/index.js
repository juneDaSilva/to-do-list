import "./main.css";
import { myLibrary } from "./apps/list";
import { addCardListeners } from "./apps/cards";
import { loadHome } from "./apps/page-loader";
import { formListen } from "./apps/form";
import { burgerListen } from "./apps/burger";
export const content = document.getElementById("content");
const main = document.querySelector(".main");

// TODO
// -- DONE -- edit date-time format
// -- DONE -- Make popup for description viewing
// -- DONE -- make popup for details editing
// make different builder functions for today/week
// -- DONE -- group todo items into projects
// -- DONE -- make listBuilder accoding to project groups
// add priority property to todo items
// change "details" labels to "info"

loadHome();
// burgerListen();
// formListen();
// addCardListeners(main, myLibrary);

//today's date
