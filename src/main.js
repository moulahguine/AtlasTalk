document.querySelectorAll(".form_group").forEach((group) => {
  const input = group.querySelector("input");
  const label = group.querySelector("label");

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
      localStorage.removeItem(input.id); 
    } else {
      localStorage.setItem(input.id, input.value);
    }
  });
});
