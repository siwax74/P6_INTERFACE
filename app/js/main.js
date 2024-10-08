import { FetchBestMovies, FetchBestMoviesCategory, FetchAllCategories } from './fetch.js';
import { sortBestMovies, sortBestMovie, sortMoviesCategory, sortSeletedCategory } from './utils.js';
import { constructorElements } from './constructor.js';
import { listenEvents } from './events.js';

async function init() {
  try {
    // Récupère 50 films avec une note au dessu de 9
    const bestMoviesFetch = await FetchBestMovies();
    // Sort le film le mieu noté
    const bestMovie = sortBestMovie(bestMoviesFetch);
    // Sort les films les mieux noté
    const bestMovies = sortBestMovies(bestMoviesFetch);

    // Récupère la Catégorie 1
    const category1Name = "history"
    const datasCategory1 = await FetchBestMoviesCategory(category1Name);
    const datasCategory1Filter = sortMoviesCategory(datasCategory1, category1Name)

    // Récupère la Catégorie 2
    const category2Name = "action"
    const datasCategory2 = await FetchBestMoviesCategory(category2Name);
    const datasCategory2Filter = sortMoviesCategory(datasCategory2, category2Name)
    console.log(datasCategory2Filter)

    // Récupère la Catégorie 3
    const allCategories = await FetchAllCategories();
    let selectedCategory = sortSeletedCategory(allCategories);
    const datasCategory3 = await FetchBestMoviesCategory(selectedCategory.name);
    const datasCategory3Filter = sortMoviesCategory(datasCategory3, selectedCategory)
    console.log(datasCategory3Filter)
    // Construit les éléments du DOM
    const elements = constructorElements(bestMovie, bestMovies, datasCategory1Filter, datasCategory2Filter, allCategories, selectedCategory, datasCategory3Filter);

    // Ecoute les évènements du DOM
    listenEvents(elements)

  } catch (error) {
    console.error(error);
  }
}

// Appel direct de la fonction d'initialisation
init();
