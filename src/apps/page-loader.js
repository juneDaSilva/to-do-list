import { content } from "../index.js";
import { buildHiddenNav, buildHeader } from "./nav";
import { buildSidebar } from "./sidebar";
import { buildMainContainer } from "./main-section.js";
import { buildFooter } from "./footer.js";
import { burgerListen } from "./burger";
import { formListen } from "./form.js";
import { addCardListeners } from "./cards.js";
import { myLibrary } from "./list.js";

export const loadHome = () => {
  content.append(
    buildHiddenNav(),
    buildHeader(),
    buildSidebar(),
    buildMainContainer(),
    buildFooter()
  );
  const main = document.querySelector(".main");
  burgerListen();
  formListen();
  addCardListeners(main, myLibrary);
};
