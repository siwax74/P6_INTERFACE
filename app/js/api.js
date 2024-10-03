document.addEventListener("DOMContentLoaded", async function () {
  try {
    const allMovies = await FetchDatas();
    const allCategories = await FetchCategories()
    console.log(allCategories)
    const bestMovie = getBestMovie(allMovies);
    
    console.log("Best Movie:", bestMovie);
  } catch (error) {
    console.error(error);
  }
});

async function FetchDatas() {
  const url = "http://localhost:8000/api/v1/titles/";
  const allMovies = [];
  let nextPageUrl = url;
  let pageCount = 0; // Compteur pour limiter à 50 pages

  // Boucle pour récupérer les données, limitée à 50 pages
  while (nextPageUrl && pageCount < 50) {
    const response = await fetch(nextPageUrl);
    const data = await response.json();

    // Ajoute les films de la page actuelle
    allMovies.push(...data.results); // Utilisation de spread pour ajouter les films individuellement

    // Met à jour l'URL pour la page suivante
    nextPageUrl = data.next;
    pageCount++; // Incrémente le compteur de pages
  }

  return allMovies; // Retourne tous les films collectés
}

async function FetchCategories() {
  const url = "http://localhost:8000/api/v1/genres/";
  const allCategories = []
  let nextPageUrl = url;
  while (nextPageUrl !== null) {
    const response = await fetch(nextPageUrl);
    const data = await response.json();
    allCategories.push(...data.results);
    nextPageUrl = data.next;
  }
  return allCategories
}

function getBestMovie(allMovies) {
  let bestMovie = null;
  let highestRating = 0;

  allMovies.forEach((movie) => {
    const rating = parseFloat(movie.imdb_score);
    if (rating > highestRating) {
      highestRating = rating;
      bestMovie = movie;
    }
  });
  return bestMovie; // Retourne le film avec la meilleure note
}


