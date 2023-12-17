export function createElement(elem, classNamesEl, textElem, parent) {
  const element = document.createElement(elem);

  if (classNamesEl.length !== 0) {
    classNamesEl.forEach(classN => {
      element.classList.add(classN);
    })
  }

  if (textElem) {
    element.textContent = textElem;
  }

  if (parent) {
    parent.append(element);
  }

  return element;
}