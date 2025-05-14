document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
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
