// ################################################################################################################# //
// ################################################## EVENTS.JS #################################################### //
// ################################################################################################################# //

// CE FICHIER CONTIENT DES FONCTIONS POUR GÉRER LES ÉVÉNEMENTS DU DOM LIÉS À L'AFFICHAGE DES FILMS :
// FONCTION PRINCIPALE :
// - ÉTABLIT DES ÉCOUTEURS D'ÉVÉNEMENTS RÉCUPÉRÉS DEPUIS DISPLAY;
// FONCTIONS :
// - GÈRE L'ÉVÉNEMENT POUR AFFICHER LES DÉTAILS DU MEILLEUR FILM;
// - GÈRE L'ÉVÉNEMENT POUR AFFICHER LES DÉTAILS DES MEILLEURS FILMS;
// - GÈRENT L'AFFICHAGE DES DÉTAILS DES FILMS DANS LES CATÉGORIES SPÉCIFIQUES;
// - GÈRE LE CHANGEMENT DE CATÉGORIE VIA UN MENU DÉROULANT POUR ACTUALISER L'AFFICHAGE;

// IMPORT DES MODULES ############################################################################################## //
import { fetchBestMovies, fetchBestMoviesCategory, fetchMovieDetails, fetchMovieByName } from "./fetch.js";
import { createMovieDetailsCard } from "./constructor.js";
import {
  sortBestMovie,
  sortMoviesCategory,
  sortMovieFetchByName,
  updateThirdCategory,
  toggleFilmsVisibility,
} from "../utils/utils.js";
import { displayMovieDetails } from "./display.js";

// ################################################################################################################# //
// ############################################# FONCTION PRINCIPALE ############################################### //
// ################################################################################################################# //

// APPEL DES FONCTIONS ############################################################################################# //
export function listenEvents(elements, protocol, domain, urlApi) {
  const bestMovieElement = elements[0];
  const bestMoviesListElements = elements[1];
  const category1Elements = elements[2];
  const category2Elements = elements[3];
  const category3Elements = elements[4];

  // On appelle les fonctions pour attacher les écouteurs d'événements
  eventsListenerBestBook(bestMovieElement, protocol, domain, urlApi);
  eventsListenerBestBooks(bestMoviesListElements, protocol, domain, urlApi);
  eventsListenerCategory1(category1Elements, protocol, domain, urlApi);
  eventsListenerCategory2(category2Elements, protocol, domain, urlApi);
  eventsListenerCategory3(category3Elements, protocol, domain, urlApi);
}

// ################################################################################################################# //
// ################################################## FONCTIONS #################################################### //
// ################################################################################################################# //

// FONCTION QUI GERE L'ECOUTEUR POUR LE MEILLEUR FILM ############################################################## //
function eventsListenerBestBook(bestMovieElement, protocol, domain, urlApi) {
  const button = bestMovieElement.querySelector(".btn-details");
  button.addEventListener("click", async function () {
    const movies = await fetchBestMovies(protocol, domain, urlApi);
    const movie = sortBestMovie(movies);
    const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
    const elementsCreated = createMovieDetailsCard(movieDetails);
    const elementsDisplay = displayMovieDetails(bestMovieElement, elementsCreated);
  });
}

// FONCTION QUI GERE L'ECOUTEUR POUR LES 6 MEILLEURS FILMS ######################################################### //
function eventsListenerBestBooks(bestMoviesListElements, protocol, domain, urlApi) {
  const buttons = bestMoviesListElements.querySelectorAll(".btn-details");

  // Event listener for detail buttons
  buttons.forEach(function (button) {
    button.addEventListener("click", async function () {
      // Récupérer l'élément parent (details-item) du bouton cliqué
      const parentCard = button.closest(".best-movies__card");

      // Récupérer le titre du film à partir de l'élément <h3>
      const movieTitle = parentCard.querySelector("h3").textContent;

      // Attendre que la promesse soit résolue avant de continuer
      const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

      // Sort le film en tableau depuis la promesse
      const movie = sortMovieFetchByName(movieFetch);

      // Récupère les détails du film
      const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);

      const elementsCreated = createMovieDetailsCard(movieDetails);
      const elementsDisplay = displayMovieDetails(parentCard, elementsCreated);
    });
  });
  // Sélectionner le bouton "Voir plus" par son ID
  const showMoreBtn = document.getElementById("showMoreBtn");
  // Sélectionner tous les films cachés avec la classe 'hidden'
  const hiddenFilms = bestMoviesListElements.querySelectorAll(".best-movies__card.hidden");

  // Ajouter un écouteur d'événements pour gérer le clic sur le bouton
  showMoreBtn.addEventListener("click", function () {
    toggleFilmsVisibility(hiddenFilms, showMoreBtn);
  });
}

// FONCTION QUI GERE L'ECOUTEUR DE LA 1ERE CATEGORIE ############################################################### //
function eventsListenerCategory1(category1Elements, protocol, domain, urlApi) {
  const buttons = category1Elements.querySelectorAll(".btn-details");
  buttons.forEach(function (button) {
    button.addEventListener("click", async function () {
      // Récupérer l'élément parent (details-item) du bouton cliqué
      const parentCard = button.closest(".category__card");
      // Récupérer le titre du film à partir de l'élément <h3>
      const movieTitle = parentCard.querySelector("h3").textContent;
      // Attendre que la promesse soit résolue avant de continuer
      const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

      // Sort le film en tableau depuis la promesse
      const movie = sortMovieFetchByName(movieFetch);
      // Récupère les détails du film
      const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);

      const elementsCreated = createMovieDetailsCard(movieDetails);
      const elementsDisplay = displayMovieDetails(parentCard, elementsCreated);
    });
  });
  // Sélectionner le bouton "Voir plus" par son ID
  const showMoreBtn2 = document.getElementById("showMoreBtn2");
  // Sélectionner tous les films cachés avec la classe 'hidden'
  const hiddenFilmsCategory1 = category1Elements.querySelectorAll(".category__card.hidden");

  // Ajouter un écouteur d'événements pour gérer le clic sur le bouton
  showMoreBtn2.addEventListener("click", function () {
    toggleFilmsVisibility(hiddenFilmsCategory1, showMoreBtn2);
  });
}

// FONCTION QUI GERE L'ECOUTEUR DE LA 2EME CATEGORIE ############################################################### //
function eventsListenerCategory2(category2Elements, protocol, domain, urlApi) {
  const buttons = category2Elements.querySelectorAll(".btn-details");
  buttons.forEach(function (button) {
    button.addEventListener("click", async function () {
      // Récupérer l'élément parent (details-item) du bouton cliqué
      const parentCard = button.closest(".category__card");
      // Récupérer le titre du film à partir de l'élément <h3>
      const movieTitle = parentCard.querySelector("h3").textContent;
      // Attendre que la promesse soit résolue avant de continuer
      const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

      // Sort le film en tableau depuis la promesse
      const movie = sortMovieFetchByName(movieFetch);
      // Récupère les détails du film
      const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
      const elementsCreated = createMovieDetailsCard(movieDetails);
      const elementsDisplay = displayMovieDetails(parentCard, elementsCreated);
    });
  });

  // Sélectionner le bouton "Voir plus" par son ID
  const showMoreBtn3 = document.getElementById("showMoreBtn3");
  // Sélectionner tous les films cachés avec la classe 'hidden'
  const hiddenFilmsCategory2 = category2Elements.querySelectorAll(".category__card.hidden");

  // Ajouter un écouteur d'événements pour gérer le clic sur le bouton
  showMoreBtn3.addEventListener("click", function () {
    toggleFilmsVisibility(hiddenFilmsCategory2, showMoreBtn3);
  });
}

// FONCTION QUI GERE L'ECOUTEUR DE LA 3EME CATEGORIE ############################################################### //
function eventsListenerCategory3(category3Elements, protocol, domain, urlApi) {
  const select = document.getElementById("category-select");
  const showMoreBtn4 = document.getElementById("showMoreBtn4");

  // Fonction pour gérer le clic sur les boutons "Détails"
  const handleButtonClick = async (button) => {
    const parentCard = button.closest(".category__card");
    const movieTitle = parentCard.querySelector("h3").textContent;
    const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);
    const movie = sortMovieFetchByName(movieFetch);
    const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
    const elementsCreated = createMovieDetailsCard(movieDetails);
    displayMovieDetails(parentCard, elementsCreated);
  };

  // Fonction pour gérer les changements de catégorie
  const handleCategoryChange = async () => {
    const selectedCategory = select.value;
    const datasCategory3 = await fetchBestMoviesCategory(protocol, domain, urlApi, selectedCategory);
    const datasCategory3Filter = sortMoviesCategory(datasCategory3, selectedCategory);

    category3Elements = updateThirdCategory(datasCategory3Filter);
    attachEventListeners();
  };

  // Fonction pour attacher les écouteurs d'événements
  const attachEventListeners = () => {
    const buttons = category3Elements.querySelectorAll(".btn-details");
    const hiddenFilmsCategory3 = category3Elements.querySelectorAll(".category__card.hidden");

    buttons.forEach((button) => {
      button.removeEventListener("click", handleButtonClick);
      button.addEventListener("click", () => handleButtonClick(button));
    });

    // Utilisation de la fonction réutilisable toggleFilmsVisibility
    showMoreBtn4.removeEventListener("click", () => toggleFilmsVisibility(hiddenFilmsCategory3, showMoreBtn4));
    showMoreBtn4.addEventListener("click", () => toggleFilmsVisibility(hiddenFilmsCategory3, showMoreBtn4));
  };

  attachEventListeners();
  select.addEventListener("change", handleCategoryChange);
}

// ################################################################################################################# //
// ################################################## FIN EVENTS.JS ################################################ //
// ################################################################################################################# //
