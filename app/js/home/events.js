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
import { sortBestMovie, sortMoviesCategory, sortMovieFetchByName, updateThirdCategory } from "../utils/utils.js";
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
  eventsListenerBestBooks(bestMoviesListElements);
  eventsListenerCategory1(category1Elements);
  eventsListenerCategory2(category2Elements);
  eventsListenerCategory3(category3Elements);
}

// ################################################################################################################# //
// ################################################## FONCTIONS #################################################### //
// ################################################################################################################# //

// FONCTION QUI GERE L'ECOUTEUR POUR LE MEILLEUR FILM ############################################################## //
function eventsListenerBestBook(bestMovieElement, protocol, domain, urlApi) {
  console.log("test", bestMovieElement);
  const button = bestMovieElement.querySelector(".btn-details");
  button.addEventListener("click", async function () {
    console.log("Clic sur le bouton du premier élément");
    const movies = await fetchBestMovies(protocol, domain, urlApi);
    const movie = sortBestMovie(movies);
    const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
    const elementsCreated = createMovieDetailsCard(movieDetails);
    const elementsDisplay = displayMovieDetails(bestMovieElement, elementsCreated);
  });
}

// FONCTION QUI GERE L'ECOUTEUR POUR LES 6 MEILLEURS FILMS ######################################################### //
function eventsListenerBestBooks(bestMoviesListElements) {
  const buttons = bestMoviesListElements.querySelectorAll(".btn-details");

  // Event listener for detail buttons
  buttons.forEach(function (button) {
    button.addEventListener("click", async function () {
      // Récupérer l'élément parent (details-item) du bouton cliqué
      const parentCard = button.closest(".best-movies__card");

      // Récupérer le titre du film à partir de l'élément <h3>
      const movieTitle = parentCard.querySelector("h3").textContent;
      console.log("Titre du film cliqué :", movieTitle);

      // Attendre que la promesse soit résolue avant de continuer
      const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

      // Sort le film en tableau depuis la promesse
      const movie = sortMovieFetchByName(movieFetch);
      console.log(movie);

      // Récupère les détails du film
      const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);

      const elementsCreated = createMovieDetailsCard(movieDetails);
      const elementsDisplay = displayMovieDetails(parentCard, elementsCreated);
    });
  });
  // Sélectionner le bouton "Voir plus" par son ID
  const showMoreBtn = document.getElementById("showMoreBtn");
  console.log(showMoreBtn);
  // Sélectionner tous les films cachés avec la classe 'hidden'
  const hiddenFilms = bestMoviesListElements.querySelectorAll(".best-movies__card.hidden");

  // Variable pour stocker l'état actuel du bouton
  let isShowingMore = false;

  // Ajouter un écouteur d'événements pour gérer le clic sur le bouton
  showMoreBtn.addEventListener("click", function () {
    // Basculer la classe 'hidden' sur chaque film pour l'afficher ou le cacher
    hiddenFilms.forEach((film) => {
      film.classList.toggle("hidden");
    });
    // Mettre à jour l'état actuel du bouton
    isShowingMore = !isShowingMore;
    // Changer le texte du bouton en fonction de l'état actuel
    if (isShowingMore) {
      showMoreBtn.textContent = "Voir moins -";
    } else {
      showMoreBtn.textContent = "Voir plus +";
    }
  });
}

// FONCTION QUI GERE L'ECOUTEUR DE LA 1ERE CATEGORIE ############################################################### //
function eventsListenerCategory1(category1Elements) {
  const buttons = category1Elements.querySelectorAll(".btn-details");
  buttons.forEach(function (button) {
    button.addEventListener("click", async function () {
      // Récupérer l'élément parent (details-item) du bouton cliqué
      const parentCard = button.closest(".category__card");
      // Récupérer le titre du film à partir de l'élément <h3>
      const movieTitle = parentCard.querySelector("h3").textContent;
      console.log("Titre du film cliqué :", movieTitle);
      // Attendre que la promesse soit résolue avant de continuer
      const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

      // Sort le film en tableau depuis la promesse
      const movie = sortMovieFetchByName(movieFetch);
      console.log(movie);
      // Récupère les détails du film
      const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
      console.log("Clic sur le bouton du troisième élément");

      const elementsCreated = createMovieDetailsCard(movieDetails);
      const elementsDisplay = displayMovieDetails(parentCard, elementsCreated);
    });
  });
  // Sélectionner le bouton "Voir plus" par son ID
  const showMoreBtn2 = document.getElementById("showMoreBtn2");
  console.log(showMoreBtn2);
  // Sélectionner tous les films cachés avec la classe 'hidden'
  const hiddenFilmsCategory1 = category1Elements.querySelectorAll(".category__card.hidden");

  // Variable pour stocker l'état actuel du bouton
  let isShowingMore = false;

  // Ajouter un écouteur d'événements pour gérer le clic sur le bouton
  showMoreBtn2.addEventListener("click", function () {
    // Basculer la classe 'hidden' sur chaque film pour l'afficher ou le cacher
    hiddenFilmsCategory1.forEach((film) => {
      film.classList.toggle("hidden");
    });
    // Mettre à jour l'état actuel du bouton
    isShowingMore = !isShowingMore;
    // Changer le texte du bouton en fonction de l'état actuel
    if (isShowingMore) {
      showMoreBtn2.textContent = "Voir moins -";
    } else {
      showMoreBtn2.textContent = "Voir plus +";
    }
  });
}

// FONCTION QUI GERE L'ECOUTEUR DE LA 2EME CATEGORIE ############################################################### //
function eventsListenerCategory2(category2Elements) {
  const buttons = category2Elements.querySelectorAll(".btn-details");
  buttons.forEach(function (button) {
    button.addEventListener("click", async function () {
      // Récupérer l'élément parent (details-item) du bouton cliqué
      const parentCard = button.closest(".category__card");
      // Récupérer le titre du film à partir de l'élément <h3>
      const movieTitle = parentCard.querySelector("h3").textContent;
      console.log("Titre du film cliqué :", movieTitle);
      // Attendre que la promesse soit résolue avant de continuer
      const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

      // Sort le film en tableau depuis la promesse
      const movie = sortMovieFetchByName(movieFetch);
      console.log(movie);
      // Récupère les détails du film
      const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
      console.log("Clic sur le bouton du troisième élément");

      const elementsCreated = createMovieDetailsCard(movieDetails);
      const elementsDisplay = displayMovieDetails(parentCard, elementsCreated);
    });
  });
  // Sélectionner le bouton "Voir plus" par son ID
  const showMoreBtn3 = document.getElementById("showMoreBtn3");
  console.log(showMoreBtn3);
  // Sélectionner tous les films cachés avec la classe 'hidden'
  const hiddenFilmsCategory2 = category2Elements.querySelectorAll(".category__card.hidden");

  // Variable pour stocker l'état actuel du bouton
  let isShowingMore = false;

  // Ajouter un écouteur d'événements pour gérer le clic sur le bouton
  showMoreBtn3.addEventListener("click", function () {
    // Basculer la classe 'hidden' sur chaque film pour l'afficher ou le cacher
    hiddenFilmsCategory2.forEach((film) => {
      film.classList.toggle("hidden");
    });
    // Mettre à jour l'état actuel du bouton
    isShowingMore = !isShowingMore;
    // Changer le texte du bouton en fonction de l'état actuel
    if (isShowingMore) {
      showMoreBtn3.textContent = "Voir moins -";
    } else {
      showMoreBtn3.textContent = "Voir plus +";
    }
  });
}

// FONCTION QUI GERE L'ECOUTEUR DE LA 3EME CATEGORIE ############################################################### //
function eventsListenerCategory3(category3Elements) {
  const select = document.getElementById("category-select");
  const buttons = category3Elements.querySelectorAll(".btn-details");
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
      console.log(movie);
      // Récupère les détails du film
      const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
      console.log("Clic sur le bouton du troisième élément");

      const elementsCreated = createMovieDetailsCard(movieDetails);
      const elementsDisplay = displayMovieDetails(parentCard, elementsCreated);
    });
  });
  // Sélectionner le bouton "Voir plus" par son ID
  const showMoreBtn4 = document.getElementById("showMoreBtn4");
  console.log(showMoreBtn4);
  // Sélectionner tous les films cachés avec la classe 'hidden'
  const hiddenFilmsCategory3 = category3Elements.querySelectorAll(".category__card.hidden");

  // Variable pour stocker l'état actuel du bouton
  let isShowingMore = false;

  // Ajouter un écouteur d'événements pour gérer le clic sur le bouton
  showMoreBtn4.addEventListener("click", function () {
    // Basculer la classe 'hidden' sur chaque film pour l'afficher ou le cacher
    hiddenFilmsCategory3.forEach((film) => {
      film.classList.toggle("hidden");
    });
    // Mettre à jour l'état actuel du bouton
    isShowingMore = !isShowingMore;
    // Changer le texte du bouton en fonction de l'état actuel
    if (isShowingMore) {
      showMoreBtn4.textContent = "Voir moins -";
    } else {
      showMoreBtn4.textContent = "Voir plus +";
    }
  });

  // Gérer le changement de catégorie via le menu déroulant
  select.addEventListener("change", async function () {
    const selectedCategory = select.value;
    const datasCategory3 = await fetchBestMoviesCategory(protocol, domain, urlApi, selectedCategory);
    const datasCategory3Filter = sortMoviesCategory(datasCategory3, selectedCategory);
    // Créer et afficher les films de la nouvelle catégorie
    updateThirdCategory(datasCategory3Filter);
    eventsListenerCategory3(category3Elements);
  });
}

// ################################################################################################################# //
// ################################################## FIN EVENTS.JS ################################################ //
// ################################################################################################################# //