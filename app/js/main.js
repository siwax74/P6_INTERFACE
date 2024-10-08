import { FetchBestMovies, FetchBestMoviesCategory, FetchAllCategories} from './fetch.js';
import { sortBestMovies, sortBestMovie, sortMoviesCategory } from './utils.js';
import { constructorElements } from './constructor.js';
import { listenEvents } from './events.js';

async function init() {
  try {
    const bestMoviesFetch = await FetchBestMovies();
    const bestMovie = sortBestMovie(bestMoviesFetch);
    const bestMovies = sortBestMovies(bestMoviesFetch);
    const category1Name = "history"
    const category2Name = "action"
    const datasCategory1 = await FetchBestMoviesCategory(category1Name);
    const datasCategory2 = await FetchBestMoviesCategory(category2Name);
    const datasCategory1Filter = sortMoviesCategory(datasCategory1, category1Name)
    const datasCategory2Filter = sortMoviesCategory(datasCategory2, category2Name)

    const allCategories = await FetchAllCategories();
    console.log(allCategories)

    const elements = constructorElements(bestMovie, bestMovies, datasCategory1Filter, datasCategory2Filter, allCategories);

    listenEvents(elements)
  } catch (error) {
    console.error(error);
  }
}

// Appel direct de la fonction d'initialisation
init();
