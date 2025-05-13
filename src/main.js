document.querySelectorAll(".form_group").forEach((group) => {
  const input = group.querySelector("input");
  const label = group.querySelector("label");

  // On page load, restore saved input value (if any)
  const savedValue = localStorage.getItem(input.id);
  if (savedValue) {
    input.value = savedValue;
    label.classList.add("stay-up");
  }

  input.addEventListener("focus", () => {
    label.classList.add("stay-up");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      label.classList.remove("stay-up");
      localStorage.removeItem(input.id); // Clean up if empty
    } else {
      localStorage.setItem(input.id, input.value);
    }
  });
});

