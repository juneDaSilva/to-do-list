import { content } from "../index.js";
import { formListen, buildSidebar, listenSidebar } from "./sidebar";
import {
  buildHeader,
  buildHiddenNav,
  buildMainContainer,
  buildFooter,
} from "./main-section.js";
import { burgerListen } from "./burger";
import { addCardListeners } from "./cards.js";
import { myLibrary } from "./list.js";
import { buildDetailsModal, buildEditModal } from "./modals.js";

export const loadHome = () => {
  content.append(
    buildDetailsModal(),
    buildEditModal(),
    buildHiddenNav(),
    buildHeader(),
    buildSidebar(),
    buildMainContainer(),
    buildFooter()
  );
  const main = document.querySelector(".main");
  burgerListen();
  formListen();
  listenSidebar();
  addCardListeners(main, myLibrary);
};
