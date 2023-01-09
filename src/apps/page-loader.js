import { content } from "../index.js";
import { buildHiddenNav, buildHeader } from "./nav";
import { buildSidebar } from "./sidebar";
import { burgerListen } from "./burger";

export const loadHome = () => {
  content.append(buildHiddenNav(), buildHeader(), buildSidebar());
  // burgerListen();
};
