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
    const dashboardView = document.getElementById("dashboardView");
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
    
/* Nicholas: Search movies by title */
function searchMovies(movies, query) {
  const searchText = query.trim().toLowerCase();

  if (searchText === "") {
    return movies;
  }

  return movies.filter(function(movie) {
    return movie.title.toLowerCase().includes(searchText);
  });
}

/* Nicholas: Connect search and add-title controls */
const searchInput = document.querySelector("#searchInput");
const clearFiltersButton = document.querySelector("#clearFilters");
const addTitleForm = document.querySelector("#addTitleForm");
const formMessage = document.querySelector("#formMessage");

function refreshMovieDisplay() {
  const filteredMovies = searchMovies(
    watchlist,
    searchInput.value
  );

  displayMovies(filteredMovies);
}

searchInput.addEventListener("input", refreshMovieDisplay);

clearFiltersButton.addEventListener("click", function() {
  searchInput.value = "";

  const genreFilter = document.querySelector("#genreFilter");
  const statusFilter = document.querySelector("#statusFilter");

  if (genreFilter) genreFilter.value = "all";
  if (statusFilter) statusFilter.value = "all";

  refreshMovieDisplay();
});

addTitleForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newMovie = {
    title: document.querySelector("#titleInput").value.trim(),
    genre: document.querySelector("#genreInput").value,
    runtime: Number(document.querySelector("#runtimeInput").value),
    rating: Number(document.querySelector("#ratingInput").value),
    watched: document.querySelector("#watchedInput").checked
  };

  if (!newMovie.title) {
    formMessage.textContent = "Enter a movie title.";
    return;
  }

  watchlist.push(newMovie);

  formMessage.textContent = "Title added successfully!";
  addTitleForm.reset();

  searchInput.value = "";
  refreshMovieDisplay();

  if (typeof updateStats === "function") {
    updateStats();
  }
});
