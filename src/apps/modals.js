import { buildElement } from "./element-builder";

export const buildDetailsModal = () => {
  const mod_container = buildElement("div", ["modal-container"]);
  const modal = buildElement("div", ["modal"]);
  modal.id = "modal";

  const mod_head = buildElement("div", ["modal-header"]);
  const title = buildElement("div", ["details-title"], "Title");
  const cls_button = buildElement("img", ["close-button"]);
  cls_button.setAttribute("data-close-button", "");
  mod_head.append(title, cls_button);

  const mod_bod = buildElement("div", ["modal-body"]);
  const description = buildElement(
    "div",
    ["details-description"],
    "Description"
  );

  const dp_row = buildElement("div", ["date-project-row"]);
  const deet_bund1 = buildElement("div", ["details-bundle"]);
  const due = buildElement("div", ["details-label"], "Due:");
  const due_cont = buildElement("div", ["details-content", "due"]);
  deet_bund1.append(due, due_cont);

  const deet_bund2 = buildElement("div", ["details-bundle"]);
  const proj = buildElement("div", ["details-label"], "Project:");
  const proj_cont = buildElement("div", ["details-content", "project"], "gym");
  deet_bund2.append(proj, proj_cont);
  dp_row.append(deet_bund1, deet_bund2);

  const deet_bund3 = buildElement("div", ["details-bundle"]);
  const prior = buildElement("div", ["details-label"], "Priority:");
  const prior_cont = buildElement(
    "div",
    ["details-content", "priority"],
    "high"
  );

  const overlay = buildElement("div");
  overlay.id = "overlay";

  deet_bund3.append(prior, prior_cont);
  mod_bod.append(description, dp_row, deet_bund3);
  modal.append(mod_head, mod_bod);
  mod_container.append(modal, overlay);

  return mod_container;
};
