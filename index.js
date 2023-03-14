const accordionButtons = document.querySelectorAll(".button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("is-open")) {
      button.classList.remove("is-open");
    } else {
      const allElemsWithClass = document.querySelectorAll(".is-open");
      allElemsWithClass.forEach((allElemsWithClass) => {
        allElemsWithClass.classList.remove("is-open");
      });
      button.classList.add("is-open");
    }
  });
});
