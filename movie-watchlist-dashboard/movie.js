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

    const watchlist = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    runtime: 148,
    rating: 8.8,
    watched: true
  },
  {
    title: "The Office",
    genre: "Comedy",
    runtime: 22,
    rating: 9.0,
    watched: false
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    runtime: 169,
    rating: 8.7,
    watched: true
  },
  {
    title: "Coco",
    genre: "Animation",
    runtime: 105,
    rating: 8.4,
    watched: false
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    runtime: 152,
    rating: 9.0,
    watched: true
  },
  {
    title: "The Pursuit of Happyness",
    genre: "Drama",
    runtime: 117,
    rating: 8.0,
    watched: true
  },
  {
    title: "Free Solo",
    genre: "Documentary",
    runtime: 100,
    rating: 8.1,
    watched: false
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    runtime: 117,
    rating: 8.4,
    watched: true
  },
  {
    title: "Knives Out",
    genre: "Drama",
    runtime: 130,
    rating: 7.9,
    watched: false
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    runtime: 99,
    rating: 8.1,
    watched: true
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    runtime: 120,
    rating: 8.1,
    watched: false
  },
  {
    title: "Arrival",
    genre: "Sci-Fi",
    runtime: 116,
    rating: 7.9,
    watched: true
  }
];
function displayMovies(movies) {
  const movieGrid = document.querySelector("#movieGrid");
  const resultCount = document.querySelector("#resultCount");

  if (!movieGrid || !resultCount) {
    console.error("Movie grid or result count element not found.");
    return;
  }

  movieGrid.innerHTML = "";

  resultCount.textContent = `${movies.length} titles found`;

  movies.forEach(function(movie) {
    const card = document.createElement("article");

    card.className =
      "rounded-2xl border border-slate-700 bg-slate-800 p-5";

    card.innerHTML = `
      <h3 class="text-xl font-bold text-white">
        ${movie.title}
      </h3>

      <p class="mt-2 text-slate-400">
        Genre: ${movie.genre}
      </p>

      <p class="mt-1 text-slate-400">
        Runtime: ${movie.runtime} minutes
      </p>

      <p class="mt-1 text-amber-400 font-bold">
        Rating: ${movie.rating}/10
      </p>

      <p class="mt-2 ${movie.watched ? "text-green-400" : "text-amber-400"}">
        ${movie.watched ? "Watched" : "Not watched"}
      </p>
    `;

    movieGrid.appendChild(card);
  });
}

// Display all four movies when the page loads
displayMovies(watchlist);

//DASBOARD STATISTICS

function updateStats() {

  // Calculate the runtime of watched titles
  const totalRuntime = watchlist.reduce(
    function(total, movie) {
      return total + (movie.watched ? movie.runtime : 0);
    },
    0
  );

  // Add all movie ratings together
  const ratingTotal = watchlist.reduce(
    function(total, movie) {
      return total + movie.rating;
    },
    0
  );

  // Calculate the average rating
  const averageRating = watchlist.length > 0
    ? ratingTotal / watchlist.length
    : 0;

  // Count the titles that have not been watched
  const unwatchedCount = watchlist.reduce(
    function(count, movie) {
      return count + (movie.watched === false ? 1 : 0);
    },
    0
  );

  // Display the results in HTML
  document.querySelector("#totalRuntime").textContent =
    `${totalRuntime} min`;

  document.querySelector("#averageRating").textContent =
    `${averageRating.toFixed(1)}/10`;

  document.querySelector("#unwatchedCount").textContent =
    unwatchedCount;
}