export const buildElement = (element_type, class_names, content, value) => {
  const element = document.createElement(element_type);
  if (class_names) {
    for (const myClass in class_names) {
      element.classList.add(class_names[myClass]);
    }
  }

  if (content) element.innerText = content;
  if (value) element.value = value;

  return element;
};

export const buildFormElement = (
  element,
  el_id,
  el_name,
  el_type,
  el_placeholder
) => {
  if (el_id) {
    element.id = el_id;
  }
  if (el_name) {
    element.name = el_name;
  }
  if (el_type) {
    element.type = el_type;
  }
  if (el_placeholder) {
    element.placeholder = el_placeholder;
  }
};
