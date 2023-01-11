export const buildElement = (element_type, class_names, content) => {
  const element = document.createElement(element_type);
  if (class_names) {
    for (const myClass in class_names) {
      element.classList.add(class_names[myClass]);
    }
  }

  if (content) element.innerText = content;

  return element;
};
