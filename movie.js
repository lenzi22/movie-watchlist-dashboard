 // 1. Sample users for this learning project
    const users = [
      {
        email: "admin@example.com",
        password: "admin123"
      },
      {
        email: "student@example.com",
        password: "student123"
      },
      {
        email: "team@example.com",
        password: "team123"
      }
    ];

    // 2. Select the HTML elements
    const loginForm = document.querySelector("#loginForm");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const errorMessage = document.querySelector("#errorMessage");

    const loginView = document.querySelector("#loginView");
    const dashboardView = document.querySelector("#dashboardView");
    const logoutButton = document.querySelector("#logoutButton");

    // 3. Listen for form submission
    loginForm.addEventListener("submit", function(event) {

      // Prevent the page from refreshing
      event.preventDefault();

      // Read the values entered by the user
      const email = emailInput.value.trim().toLowerCase();
      const password = passwordInput.value;

      // Check whether the credentials match a sample user
      const matchedUser = users.find(function(user) {
        return user.email === email &&
               user.password === password;
      });

      // 4. Handle successful or unsuccessful login
      if (matchedUser) {

        loginView.classList.add("hidden");
        dashboardView.classList.remove("hidden");

        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");

        loginForm.reset();

      } else {

        errorMessage.textContent =
          "Incorrect email or password. Please try again.";

        errorMessage.classList.remove("hidden");
      }
    });

    // 5. Log out and return to the login screen
    logoutButton.addEventListener("click", function() {

      dashboardView.classList.add("hidden");
      loginView.classList.remove("hidden");

      loginForm.reset();
      errorMessage.textContent = "";
      errorMessage.classList.add("hidden");
    });