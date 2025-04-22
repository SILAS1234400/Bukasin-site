document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
  
    // Registration
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
  
        if (!username || !email || !password) {
          alert("All fields are required.");
          return;
        }
  
        const users = JSON.parse(localStorage.getItem("users")) || [];
  
        const userExists = users.find(
          user => user.username === username || user.email === email
        );
  
        if (userExists) {
          alert("User with this username or email already exists.");
          return;
        }
  
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        window.location.href = "index.html";
      });
    }
  
    // Login
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginInput = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
  
        const users = JSON.parse(localStorage.getItem("users")) || [];
  
        const matchedUser = users.find(
          user =>
            (user.username === loginInput || user.email === loginInput) &&
            user.password === password
        );
  
        if (matchedUser) {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("currentUser", JSON.stringify(matchedUser));
          window.location.href = "dashboard.html";
        } else {
          alert("Invalid username/email or password.");
        }
      });
    }
  });