import { FetchDatas, FetchCategories } from './fetch.js';
import { getBestMovies, getBestMovie, getCategory1, getCategory2, getCategory3 } from './utils.js';
import { constructorElements } from './constructor.js';

async function init() {
  try {
    const allMovies = await FetchDatas();
    const allCategories = await FetchCategories();

    const bestMovies = getBestMovies(allMovies);

    const bestMovie = getBestMovie(allMovies);

    const moviesInCategory1 = getCategory1(allCategories, allMovies);
    const category1Name = moviesInCategory1.category.name;

    const moviesInCategory2= getCategory2(allCategories, allMovies);
    const category2Name = moviesInCategory2.category.name;

    const moviesInCategory3 = getCategory3(allCategories, allMovies);
    console.log("undif", moviesInCategory3)
    constructorElements(allMovies, allCategories, bestMovies, bestMovie, moviesInCategory1, category1Name, moviesInCategory2, category2Name, moviesInCategory3);
  } catch (error) {
    console.error(error);
  }
}

// Appel direct de la fonction d'initialisation
init();
