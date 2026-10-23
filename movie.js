const watchlist = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    runtime: 148,
    rating: 8.8,
    watched: true,
    image: "inception.png"
  },
  {
    title: "The Office",
    genre: "Comedy",
    runtime: 22,
    rating: 9.0,
    watched: false,
    image: "the-office.png"
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    runtime: 169,
    rating: 8.7,
    watched: true,
    image: "interstellar.png"
  },
  {
    title: "Coco",
    genre: "Animation",
    runtime: 105,
    rating: 8.4,
    watched: false,
    image: "coco.png"
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    runtime: 152,
    rating: 9.0,
    watched: true,
    image: "the-dark-knight.png"
  },
  {
    title: "The Pursuit of Happyness",
    genre: "Drama",
    runtime: 117,
    rating: 8.0,
    watched: true,
    image: "the-pursuit-of-happyness.png"
  },
  {
    title: "Free Solo",
    genre: "Documentary",
    runtime: 100,
    rating: 8.1,
    watched: false,
    image: "free-solo.png"
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    runtime: 117,
    rating: 8.4,
    watched: true,
    image: "spider-man-into-the-spider-verse.png"
  },
  {
    title: "Knives Out",
    genre: "Drama",
    runtime: 130,
    rating: 7.9,
    watched: false,
    image: "knives-out.png"
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    runtime: 99,
    rating: 8.1,
    watched: true,
    image: "the-grand-budapest-hotel.png"
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    runtime: 120,
    rating: 8.1,
    watched: false,
    image: "mad-max-fury-road.png"
  },
  {
    title: "Arrival",
    genre: "Sci-Fi",
    runtime: 116,
    rating: 7.9,
    watched: true,
    image: "arrival.png"
  }
];

function displayMovies(movies) {
  const movieGrid = document.querySelector("#movieGrid");
  const resultCount = document.querySelector("#resultCount");

  movieGrid.innerHTML = "";
  resultCount.textContent = movies.length + " titles found";

  if (movies.length === 0) {
    const message = document.createElement("p");
    message.className = "text-slate-400";
    message.textContent = "No movies match your search.";git 
    movieGrid.appendChild(message);
    return;
  }

  movies.forEach(function(movie) {
    
const card = document.createElement("article");

card.className =
  "relative min-h-80 overflow-hidden rounded-2xl " +
  "border border-slate-700 bg-cover bg-center p-5 " +
  "flex flex-col justify-end";

if (movie.image) {
  card.style.backgroundImage =
    "linear-gradient(to top, rgba(2,6,23,0.95), rgba(2,6,23,0.1)), " +
    "url('" + movie.image + "')";
}


    const title = document.createElement("h3");
    title.className = "text-xl font-bold";
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.className = "mt-2 text-slate-400";
    genre.textContent = "Genre: " + movie.genre;

    const runtime = document.createElement("p");
    runtime.className = "mt-1 text-slate-400";
    runtime.textContent = "Runtime: " + movie.runtime + " minutes";

    const rating = document.createElement("p");
    rating.className = "mt-1 font-bold text-amber-400";
    rating.textContent = "Rating: " + movie.rating + "/10";

    const status = document.createElement("p");
    status.className = movie.watched
      ? "mt-2 text-green-400"
      : "mt-2 text-amber-400";
    status.textContent = movie.watched ? "Watched" : "Not watched";

    card.append(title, genre, runtime, rating, status);
    movieGrid.appendChild(card);
  });
}

function updateStats() {
  const totalRuntime = watchlist.reduce(function(total, movie) {
    return total + (movie.watched ? movie.runtime : 0);
  }, 0);

  const ratingTotal = watchlist.reduce(function(total, movie) {
    return total + movie.rating;
  }, 0);

  const averageRating = watchlist.length
    ? ratingTotal / watchlist.length
    : 0;

  const unwatchedCount = watchlist.filter(function(movie) {
    return !movie.watched;
  }).length;

  document.querySelector("#totalRuntime").textContent =
    totalRuntime + " min";

  document.querySelector("#averageRating").textContent =
    averageRating.toFixed(1) + "/10";

  document.querySelector("#unwatchedCount").textContent =
    unwatchedCount;
}

displayMovies(watchlist);
updateStats();
