document.addEventListener("DOMContentLoaded", function () {
    // Get the login form element
    const loginForm = document.getElementById("login-form");
  
    // Add a submit event listener to the form
    loginForm.addEventListener("submit", function (e) {
      // Prevent the default form submission behavior
      e.preventDefault();
  
      // Simulate a successful login (you should replace this with your actual login logic)
      const isLoggedIn = true; // Change this based on your authentication logic
  
      if (isLoggedIn) {
        // Redirect the user to the dashboard page
        window.location.href = "hello.html";
      } else {
        // Handle login failure (e.g., show an error message)
        alert("Login failed. Please check your credentials.");
      }
    });
  });
  