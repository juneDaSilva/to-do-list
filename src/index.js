import "./main.css";
import { loadHome } from "./apps/page-loader";
export const content = document.getElementById("content");

loadHome();

// BUGS
// TODO:  when editing, if project isnt changed,
//        items in project lists arent changed
// TODO:  in home display, 'remove' buttons dont
//        work for cards below a certain point
