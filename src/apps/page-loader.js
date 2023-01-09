import { content } from "../index.js";
import { buildHiddenNav, buildHeader } from "./nav";
import { buildSidebar } from "./sidebar";
import { buildMainContainer } from "./main-section.js";
import { buildFooter } from "./footer.js";
import { burgerListen } from "./burger";

export const loadHome = () => {
  content.append(
    buildHiddenNav(),
    buildHeader(),
    buildSidebar(),
    buildMainContainer(),
    buildFooter()
  );
  burgerListen();
};
