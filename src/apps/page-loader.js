import { buildHiddenNav, buildHeader } from "./nav";
import { content } from "../index.js";
import { burgerListen } from "./burger";

export const loadHome = () => {
  content.append(buildHiddenNav(), buildHeader());
  // burgerListen();
};
