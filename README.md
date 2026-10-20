hey Guys

Movie Watchlist Dashboard — Team Responsibilities & Integration Guide

 1. Project Team Members and Responsibilities

Our project is divided into four main contributions. Each team member is responsible for developing and testing their assigned functionality while following the agreed HTML IDs, JavaScript function names, and shared data structure.

 David : Login and Authentication Interface

**Responsibilities:**

- Maintain the original login interface and its design.
- Manage the sample users and login credentials.
- Validate login details.
- Display error messages for incorrect credentials.
- Handle login and logout functionality.
- Connect successful login to the integrated dashboard.

**HTML IDs:**

- `loginView`
- `dashboardView`
- `loginForm`
- `email`
- `password`
- `errorMessage`
- `logoutButton`

**JavaScript variable:** `users`

Charlotte: Dashboard Statistics

**Responsibilities:**

- Calculate the total runtime of watched titles.
- Calculate the average rating across all titles.
- Count titles that have not been watched.
- Update the statistics whenever a movie is added or its watched status changes.

**HTML IDs:**

- `totalRuntime`
- `averageRating`
- `unwatchedCount`

**JavaScript function:** `updateStats()`

Shukri: Dynamic Movie Cards and Filters

**Responsibilities:**

- Generate movie cards dynamically using JavaScript.
- Display movie titles, genres, runtimes, ratings, and watched status.
- Allow users to filter titles by genre.
- Allow users to filter titles by watched or unwatched status.
- Allow users to update watched status using checkboxes.
- Display a message when no titles match the selected filters.

**HTML IDs:**

- `movieGrid`
- `genreFilter`
- `statusFilter`
- `resultCount`

**JavaScript functions:**

- `renderMovies(movies)`
- `filterMovies(movies, genre, status)`

 Nicholas: Live Search and Adding Titles

**Responsibilities:**

- Implement live search by movie or show title.
- Allow users to add new movies and shows to the watchlist.
- Validate title, genre, runtime, and rating inputs.
- Allow users to mark new titles as watched or unwatched.
- Display success and validation messages.
- Implement the clear-search-and-filters button.
- Ensure new titles appear in the movie cards and update the statistics.

**HTML IDs:**

- `searchInput`
- `clearFilters`
- `addTitleForm`
- `titleInput`
- `genreInput`
- `runtimeInput`
- `ratingInput`
- `watchedInput`
- `formMessage`

**JavaScript functions:**

- `searchMovies(movies, query)`
- `showFormMessage(message, success)`


 2. Shared Integration Requirements

All team members must follow these standards to prevent conflicts when combining their work.

 **Shared movie data structure**

Every movie must use the same property names:
{
  title: "Inception",
  genre: "Sci-Fi",
  runtime: 148,
  rating: 8.8,
  watched: true
}

The properties represent the title, genre, runtime in minutes, rating out of 10, and watched status.

**Shared JavaScript array**

The final integrated project must declare the following array only once:


const watchlist = [
  // Movie objects will be stored here.
];
```

All four features must use the same `watchlist` array. Do not create separate arrays for statistics, cards, search, or adding titles.

Shared integration function

The final project must have only one `refreshMovies()` function. It coordinates the filters, search, and card rendering.

function refreshMovies() {
  const genre = document.querySelector("#genreFilter").value;
  const status = document.querySelector("#statusFilter").value;
  const query = document.querySelector("#searchInput").value;

  const filteredMovies = filterMovies(watchlist, genre, status);
  const searchedMovies = searchMovies(filteredMovies, query);

  renderMovies(searchedMovies);
}

 Integration rules

1. Preserve David's original login interface and existing login element IDs.
2. Use the agreed HTML IDs exactly as documented.
3. Do not declare `watchlist` more than once.
4. Do not duplicate JavaScript function declarations.
5. Ensure the dashboard calls `refreshMovies()` and `updateStats()` after successful login.
6. Ensure adding a title or changing watched status refreshes the movie cards and statistics.
7. Test each feature independently and then test the complete integrated website.

3. Final Project Objective

The goal is to deliver one functional, responsive Movie Watchlist Dashboard that combines login and logout, dashboard statistics, dynamically generated movie cards, genre and watched-status filters, live search, and the ability to add new titles.

Each team member is responsible for their assigned contribution, while successful integration depends on all four members following the same project structure and coding conventions.
