// ################################################################################################################# //
// ################################################## MAIN.JS ###################################################### //
// ################################################################################################################# //

// CE FICHIER CONTIENT LA FONCTION PRINCIPALE init() :
// CETTE FONCTION EST RESPONSABLE DE :
// - RÉCUPÉRER LES FILMS AVEC UNE NOTE SUPÉRIEURE À 9;
// - RÉCUPÉRER LES DÉTAILS DU MEILLEUR FILM;
// - RÉCUPÉRER LES FILMS PAR CATÉGORIE (HISTORY, ACTION, COMEDY);
// - RÉCUPÉRER TOUTES LES CATÉGORIES DISPONIBLES;
// - CONSTRUIRE LES ÉLÉMENTS DU DOM POUR AFFICHER LES FILMS ET LES CATÉGORIES;
// - AFFICHER CES ÉLÉMENTS DANS LE DOM;
// - AJOUTER LES ÉCOUTEURS D'ÉVÉNEMENTS POUR INTERAGIR AVEC LES ÉLÉMENTS DU DOM.

// IMPORT DES MODULES ############################################################################################## //
import { fetchBestMovies, fetchMovieDetails, fetchBestMoviesCategory, fetchAllCategories } from "./fetch.js";
import { sortBestMovies, sortBestMovie, sortMoviesCategory } from "../utils/utils.js";
import { createElements } from "./constructor.js";
import { displayElements } from "./display.js";
import { listenEvents } from "./events.js";

// ################################################################################################################# //
// ############################################# FONCTION PRINCIPALE ############################################### //
// ################################################################################################################# //

// FONCTIONS PRINCIPALES ########################################################################################### //
async function init() {
  try {
    const protocol = "http";
    const domain = "localhost:8000";
    const urlApi = "api/v1";

    // Récupère les films avec une note au dessu de 9
    const bestMoviesFetch = await fetchBestMovies(protocol, domain, urlApi);

    // Sort le film le mieu noté
    const bestMovie = sortBestMovie(bestMoviesFetch);
    const BestMovieDetailsFetch = await fetchMovieDetails(protocol, domain, urlApi, bestMovie);

    // Sort les films les mieux noté
    const bestMovies = sortBestMovies(bestMoviesFetch);
    console.log(bestMovies);

    // Récupère la Catégorie 1 et ces films
    const category1Name = "History";
    const datasCategory1 = await fetchBestMoviesCategory(protocol, domain, urlApi, category1Name);
    const datasCategory1Filter = sortMoviesCategory(datasCategory1, category1Name);

    // Récupère la Catégorie 2 et ces films
    const category2Name = "Action";
    const datasCategory2 = await fetchBestMoviesCategory(protocol, domain, urlApi, category2Name);
    const datasCategory2Filter = sortMoviesCategory(datasCategory2, category2Name);

    // Récupère la Catégorie 3 et ces films
    const category3Name = "Comedy";
    const datasCategory3 = await fetchBestMoviesCategory(protocol, domain, urlApi, category3Name);
    const datasCategory3Filter = sortMoviesCategory(datasCategory3, category3Name);

    // Récupère toutes les catégories
    const allCategories = await fetchAllCategories(protocol, domain, urlApi);

    // Construit les éléments du DOM
    const elementsCreated = createElements(
      BestMovieDetailsFetch,
      bestMovies,
      datasCategory1Filter,
      datasCategory2Filter,
      allCategories,
      datasCategory3Filter,
    );

    // Affiche les éléments du DOM
    const elementsDisplay = displayElements(elementsCreated);

    // Ecoute les évènements du DOM
    const events = listenEvents(elementsDisplay, protocol, domain, urlApi);
  } catch (error) {
    console.error(error);
  }
}

// Appel direct de la fonction d'initialisation
init();

// ################################################################################################################# //
// ################################################## FIN MAIN.JS ################################################## //
// ################################################################################################################# //