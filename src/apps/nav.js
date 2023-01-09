import { buildElement } from "./element-builder";

const buildHiddenNav = () => {
  const nav = document.buildElement("nav", "hidden-nav");
  const burger = document.buildElement("div", "burger-menu");
  const fa1 = document.buildElement("div", ["fa", "fa-bars"]);
  const fa2 = document.buildElement("div", ["fa", "fa-bars"]);
  const fa3 = document.buildElement("div", ["fa", "fa-bars"]);
};
