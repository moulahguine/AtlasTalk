document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
      email: document.getElementById("email").value,
      name: document.getElementById("password").value,
  };

  const response = await fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  alert(result.message);
});
