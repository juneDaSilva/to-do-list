import { buildElement } from "./element-builder";

export const buildCard = (title, due_date) => {
  const card = buildElement("div", ["card"]);
  const check = buildElement("div", ["check"]);
  const title_box = buildElement("div", ["title"], title);
  const tools = buildElement("div", ["tools"]);
  const details = buildElement("img", ["details"]);
  const due_date_box = buildElement("div", ["due-date"], due_date);
  const edit = buildElement("img", ["edit"]);
  const trash = buildElement("img", ["trash"]);

  tools.append(details, due_date_box, edit, trash);
  card.append(check, title_box, tools);

  return card;
};

export const buildList = () => {};
