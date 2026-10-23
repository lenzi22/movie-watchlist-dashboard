
const users = [
  { email: "admin@example.com", password: "admin123" },
  { email: "student@example.com", password: "student123" },
  { email: "team@example.com", password: "team123" }
];

const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorMessage = document.querySelector("#errorMessage");

const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");
const logoutButton = document.querySelector("#logoutButton");

const searchInput = document.querySelector("#searchInput");
const genreFilter = document.querySelector("#genreFilter");
const statusFilter = document.querySelector("#statusFilter");
const clearFiltersButton = document.querySelector("#clearFilters");

const addTitleForm = document.querySelector("#addTitleForm");
const formMessage = document.querySelector("#formMessage");

function searchMovies(movies, query) {
  const text = query.trim().toLowerCase();

  return movies.filter(function(movie) {
    return String(movie.title).toLowerCase().includes(text);
  });
}

function filterMovies(movies, search, genre, status) {
  return searchMovies(movies, search).filter(function(movie) {
    const genreMatch = genre === "all" || movie.genre === genre;

    const statusMatch =
      status === "all" ||
      (status === "watched" && movie.watched === true) ||
      (status === "unwatched" && movie.watched === false);

    return genreMatch && statusMatch;
  });
}

function refreshMovieDisplay() {
  if (typeof watchlist === "undefined" ||
      !Array.isArray(watchlist) ||
      typeof displayMovies !== "function") {
    const resultCount = document.querySelector("#resultCount");
    if (resultCount) {
      resultCount.textContent = "Movie data could not be loaded.";
    }
    return;
  }

  const movies = filterMovies(
    watchlist,
    searchInput ? searchInput.value : "",
    genreFilter ? genreFilter.value : "all",
    statusFilter ? statusFilter.value : "all"
  );

  displayMovies(movies);

  const resultCount = document.querySelector("#resultCount");
  if (resultCount) {
    resultCount.textContent =
      movies.length + " of " + watchlist.length + " titles found";
  }

  if (typeof updateStats === "function") {
    updateStats();
  }
}

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  const user = users.find(function(account) {
    return account.email === email && account.password === password;
  });

  if (user) {
    loginView.classList.add("hidden");
    dashboardView.classList.remove("hidden");

    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");

    loginForm.reset();
    refreshMovieDisplay();
  } else {
    errorMessage.textContent = "Incorrect email or password.";
    errorMessage.classList.remove("hidden");
  }
});

logoutButton.addEventListener("click", function() {
  dashboardView.classList.add("hidden");
  loginView.classList.remove("hidden");

  loginForm.reset();
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
});

searchInput.addEventListener("input", refreshMovieDisplay);
genreFilter.addEventListener("change", refreshMovieDisplay);
statusFilter.addEventListener("change", refreshMovieDisplay);

clearFiltersButton.addEventListener("click", function() {
  searchInput.value = "";
  genreFilter.value = "all";
  statusFilter.value = "all";
  refreshMovieDisplay();
});

addTitleForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.querySelector("#titleInput").value.trim();
  const genre = document.querySelector("#genreInput").value;
  const runtime = Number(document.querySelector("#runtimeInput").value);
  const rating = Number(document.querySelector("#ratingInput").value);
  const watched = document.querySelector("#watchedInput").checked;

  if (!title || !genre || runtime <= 0 || rating < 0 || rating > 10) {
    formMessage.textContent = "Please enter valid movie details.";
    return;
  }

  if (typeof watchlist === "undefined" || !Array.isArray(watchlist)) {
    formMessage.textContent = "Movie data could not be loaded.";
    return;
  }

  watchlist.push({
    title: title,
    genre: genre,
    runtime: runtime,
    rating: rating,
    watched: watched
  });

  formMessage.textContent = "Movie added successfully!";
  addTitleForm.reset();

  searchInput.value = "";
  genreFilter.value = "all";
  statusFilter.value = "all";

  refreshMovieDisplay();
});
