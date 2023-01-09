import { buildElement } from "./element-builder";
import { buildCard } from "./cards";

export const buildMainContainer = () => {
  const main_container = buildElement("div", ["main-container"]);
  const main = buildElement("main", ["main"]);
  main.append(buildCard("Title", "JAN 20th"));
  main_container.append(main);

  return main_container;
};
