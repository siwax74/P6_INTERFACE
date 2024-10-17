// ################################################################################################################# //
// ################################################## MAIN.JS ###################################################### //
// ################################################################################################################# //

// IMPORT DES MODULES ############################################################################################## //
import { FetchBestMovies, fetchMovieDetails, FetchBestMoviesCategory, FetchAllCategories } from "./fetch.js";
import { sortBestMovies, sortBestMovie, sortMoviesCategory } from "./utils.js";
import { constructorElements } from "./constructor.js";
import { listenEvents } from "./events.js";

// FONCTIONS PRINCIPALES ########################################################################################### //
async function init() {
  try {
    const protocol = "http";
    const domain = "localhost:8000";
    const urlApi = "api/v1";

    // Récupère 50 films avec une note au dessu de 9
    const bestMoviesFetch = await FetchBestMovies(protocol, domain, urlApi);

    // Sort le film le mieu noté
    const bestMovie = sortBestMovie(bestMoviesFetch);
    const BestMovieDetailsFetch = await fetchMovieDetails(protocol, domain, urlApi, bestMovie);

    // Sort les films les mieux noté
    const bestMovies = sortBestMovies(bestMoviesFetch);

    // Récupère la Catégorie 1 et ces films
    const category1Name = "History";
    const datasCategory1 = await FetchBestMoviesCategory(protocol, domain, urlApi, category1Name);
    const datasCategory1Filter = sortMoviesCategory(datasCategory1, category1Name);

    // Récupère la Catégorie 2 et ces films
    const category2Name = "Action";
    const datasCategory2 = await FetchBestMoviesCategory(protocol, domain, urlApi, category2Name);
    const datasCategory2Filter = sortMoviesCategory(datasCategory2, category2Name);

    // Récupère la Catégorie 3 et ces films
    const category3Name = "Comedy";
    const datasCategory3 = await FetchBestMoviesCategory(protocol, domain, urlApi, category3Name);
    const datasCategory3Filter = sortMoviesCategory(datasCategory3, category3Name);

    // Récupère toutes les catégories
    const allCategories = await FetchAllCategories(protocol, domain, urlApi);

    // Construit les éléments du DOM
    const elements = constructorElements(
      BestMovieDetailsFetch,
      bestMovies,
      datasCategory1Filter,
      datasCategory2Filter,
      allCategories,
      datasCategory3Filter,
    );

    // Ecoute les évènements du DOM
    const events = listenEvents(elements, protocol, domain, urlApi);
  } catch (error) {
    console.error(error);
  }
}

// Appel direct de la fonction d'initialisation
init();
