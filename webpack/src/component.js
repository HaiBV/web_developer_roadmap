export default (text = "Hello webpack gggggggggg") => {
  const element = document.createElement("p");

  element.innerHTML = text;

  return element;
};