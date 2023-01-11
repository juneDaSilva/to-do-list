import "./main.css";
import { loadHome } from "./apps/page-loader";
import { formListen } from "./apps/toggleForm";
import { burgerListen } from "./apps/burger";
export const content = document.getElementById("content");

// Make a factory/constructor/class module to make todo items
// Create properties that these items will have

// Make categories? for sublists of todos
// Default category has everything
// should be able to create new category and choose which one item goes into

// Keep DOM related things seperate from application logic. maybe a mediator module?

burgerListen();
formListen();
