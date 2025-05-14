document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("userName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        window.location.href = "/public/login.html";
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong. Please try again.");
    }
  });
});
