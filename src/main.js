document.querySelectorAll(".form_group").forEach((group) => {
  const input = group.querySelector("input");
  const label = group.querySelector("label");

  // Check if the input has a value saved in localStorage
  if (input.value !== "") {
    label.classList.add("stay-up");
  }

  input.addEventListener("focus", () => {
    label.classList.add("stay-up");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      label.classList.remove("stay-up");
    } else {
      // Save value to localStorage
      localStorage.setItem(input.id, input.value);
    }
  });

  // On page load, check if there's a value in localStorage and apply the class
  window.addEventListener("load", () => {
    if (localStorage.getItem(input.id)) {
      label.classList.add("stay-up");
    }
  });
});
