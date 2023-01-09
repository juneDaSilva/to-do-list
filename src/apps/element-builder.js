export const buildElement = (el_type, class_names, content) => {
  const element = document.createElement(el_type);
  if (class_names) {
    class_names.forEach((myClass) => element.classList.add(myClass));
  }
  if (content) element.innerText = content;

  return element;
};
