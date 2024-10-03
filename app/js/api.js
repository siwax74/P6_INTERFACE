import { constructorElements } from './constructor.js';

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const allMovies = await FetchDatas();
    const allCategories = await FetchCategories();
    const BestMovies = getBestMovies(allMovies);
    const bestMovie = getBestMovie(allMovies);
    const category1 = getCategory1(allCategories, allMovies)
    const category2 = getCategory2(allCategories, allMovies)
    const category3 = getCategory3(allCategories, allMovies)
    
    constructorElements(allMovies, allCategories, BestMovies, bestMovie, category1, category2, category3);
  } catch (error) {
    console.error(error);
  }
});

async function FetchDatas() {
  const url = "http://localhost:8000/api/v1/titles/";
  const allMovies = [];
  let nextPageUrl = url;
  let pageCount = 10; // Compteur pour limiter à 50 pages

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

function getBestMovies(allMovies) {
  const sortedMovies = allMovies.sort((a, b) => parseFloat(b.imdb_score) - parseFloat(a.imdb_score));
  console.log(sortedMovies.slice(1, 7));
  return sortedMovies.slice(1, 7); // Retourne les films trié de 1 a 7 avec la meilleure note
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

function getCategory1(allCategories, allMovies) {
  const category1 = allCategories.find(category => category.id === 1);
  const moviesInCategory = allMovies.filter(movie => {
    return movie.genres.includes(category1.name); // Retourne la catégorie id=1 avec la meilleure note
  });
  console.log(moviesInCategory);
}

function getCategory2(allCategories, allMovies) {
  const category1 = allCategories.find(category => category.id === 2);
  const moviesInCategory = allMovies.filter(movie => {
    return movie.genres.includes(category1.name); // Retourne la catégorie id=2 avec la meilleure note
  });
  console.log(moviesInCategory);
}

function getCategory3(allCategories, allMovies) {
  const category1 = allCategories.find(category => category.id === 3);
  const moviesInCategory = allMovies.filter(movie => {
    return movie.genres.includes(category1.name); // Retourne la catégorie id=3 avec la meilleure note
  });
  console.log(moviesInCategory);
}


