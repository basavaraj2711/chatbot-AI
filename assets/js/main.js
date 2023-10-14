/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPassword = (inputPassword, inputIcon) => {
  const input = document.getElementById(inputPassword),
        iconEye = document.getElementById(inputIcon)

  iconEye.addEventListener('click', () => {
    // Change password to text
    if (input.type === 'password') {
      // Switch to text
      input.type = 'text'

      // Add icon
      iconEye.classList.add('ri-eye-line')

      // Remove icon
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      // Change to password
      input.type = 'password'

      // Remove icon
      iconEye.classList.remove('ri-eye-line')

      // Add icon
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}
document.addEventListener("DOMContentLoaded", function () {
  // Get the login form element
  const loginform = document.getElementById("loginform");

  // Add a submit event listener to the form
  loginform.addEventListener("submit", function (e) {
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

showHiddenPassword('password', 'input-icon')