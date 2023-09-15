function scrollToElement(elements, instance = 0) {
  elements = document.querySelectorAll(elements);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("link-0").addEventListener("click", () => {
  scrollToElement("html");
});

document.getElementById("link-1").addEventListener("click", () => {
  scrollToElement("section", 0);
});

document.getElementById("link-2").addEventListener("click", () => {
  scrollToElement("section", 1);
});

document.getElementById("link-3").addEventListener("click", () => {
  scrollToElement("footer");
});
