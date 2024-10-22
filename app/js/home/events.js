// ################################################################################################################# //
// ################################################## EVENTS.JS #################################################### //
// ################################################################################################################# //

// IMPORT DES MODULES ############################################################################################## //
import { FetchBestMovies, FetchBestMoviesCategory, fetchMovieDetails, fetchMovieByName } from "./fetch.js";
import { updateThirdCategory, displayMovieDetails } from "./constructor.js";
import { sortBestMovie, sortMoviesCategory, sortMovieFetchByName } from "../utils/utils.js";

// ECOUTEURS D'EVENEMENTS DU DOM ################################################################################### //
export function listenEvents(elements, protocol, domain, urlApi) {
  const bestMovieElement = elements[0];
  const bestMoviesListElements = elements[1];
  const category1Elements = elements[2];
  const category2Elements = elements[3];
  const category3Elements = elements[4];

  // On appelle les fonctions pour attacher les écouteurs d'événements
  eventsListenerBestBook(bestMovieElement);
  eventsListenerBestBooks(bestMoviesListElements);
  eventsListenerCategory1(category1Elements);
  eventsListenerCategory2(category2Elements);
  eventsListenerCategory3(category3Elements);

  // Fonction qui gère l'écouteur pour le meilleur film
  function eventsListenerBestBook(bestMovieElement) {
    console.log(bestMovieElement);
    const button = bestMovieElement.querySelector(".btn-details");
    button.addEventListener("click", async function () {
      console.log("Clic sur le bouton du premier élément");
      const movies = await FetchBestMovies(protocol, domain, urlApi);
      const movie = sortBestMovie(movies);
      console.log(movie);
      const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
      console.log(movieDetails);
      displayMovieDetails(bestMovieElement, movieDetails);
    });
  }

  // Fonction qui gère l'écouteur pour les 6 meilleurs films
  function eventsListenerBestBooks(bestMoviesListElements) {
    const buttons = bestMoviesListElements.querySelectorAll(".btn-details");

    // Event listener for detail buttons
    buttons.forEach(function (button) {
      button.addEventListener("click", async function () {
        // Récupérer l'élément parent (details-item) du bouton cliqué
        const detailsItem = button.closest(".best-movies__card");

        // Récupérer le titre du film à partir de l'élément <h3>
        const movieTitle = detailsItem.querySelector("h3").textContent;
        console.log("Titre du film cliqué :", movieTitle);

        // Attendre que la promesse soit résolue avant de continuer
        const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

        // Sort le film en tableau depuis la promesse
        const movie = sortMovieFetchByName(movieFetch);
        console.log(movie);

        // Récupère les détails du film
        const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);

        displayMovieDetails(detailsItem, movieDetails);
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

  // Fonction qui gère l'écouteur pour la première catégorie
  function eventsListenerCategory1(category1Elements) {
    const buttons = category1Elements.querySelectorAll(".btn-details");
    buttons.forEach(function (button) {
      button.addEventListener("click", async function () {
        // Récupérer l'élément parent (details-item) du bouton cliqué
        const detailsItem = button.closest(".category__card");
        // Récupérer le titre du film à partir de l'élément <h3>
        const movieTitle = detailsItem.querySelector("h3").textContent;
        console.log("Titre du film cliqué :", movieTitle);
        // Attendre que la promesse soit résolue avant de continuer
        const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

        // Sort le film en tableau depuis la promesse
        const movie = sortMovieFetchByName(movieFetch);
        console.log(movie);
        // Récupère les détails du film
        const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
        console.log("Clic sur le bouton du troisième élément");

        displayMovieDetails(detailsItem, movieDetails);
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

  // Fonction qui gère l'écouteur pour la deuxieme catégorie
  function eventsListenerCategory2(category2Elements) {
    const buttons = category2Elements.querySelectorAll(".btn-details");
    buttons.forEach(function (button) {
      button.addEventListener("click", async function () {
        // Récupérer l'élément parent (details-item) du bouton cliqué
        const detailsItem = button.closest(".category__card");
        // Récupérer le titre du film à partir de l'élément <h3>
        const movieTitle = detailsItem.querySelector("h3").textContent;
        console.log("Titre du film cliqué :", movieTitle);
        // Attendre que la promesse soit résolue avant de continuer
        const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

        // Sort le film en tableau depuis la promesse
        const movie = sortMovieFetchByName(movieFetch);
        console.log(movie);
        // Récupère les détails du film
        const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
        console.log("Clic sur le bouton du troisième élément");

        displayMovieDetails(detailsItem, movieDetails);
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

  // Gestion spécifique des événements pour la troisième catégorie (catégorie sélectionnable)
  function eventsListenerCategory3(category3Elements) {
    const select = document.getElementById("category-select");
    const buttons = category3Elements.querySelectorAll(".btn-details");
    buttons.forEach(function (button) {
      button.addEventListener("click", async function () {
        // Récupérer l'élément parent (details-item) du bouton cliqué
        const detailsItem = button.closest(".category__card");
        // Récupérer le titre du film à partir de l'élément <h3>
        const movieTitle = detailsItem.querySelector("h3").textContent;
        console.log("Titre du film cliqué :", movieTitle);
        // Attendre que la promesse soit résolue avant de continuer
        const movieFetch = await fetchMovieByName(protocol, domain, urlApi, movieTitle);

        // Sort le film en tableau depuis la promesse
        const movie = sortMovieFetchByName(movieFetch);
        console.log(movie);
        // Récupère les détails du film
        const movieDetails = await fetchMovieDetails(protocol, domain, urlApi, movie);
        console.log("Clic sur le bouton du troisième élément");

        displayMovieDetails(detailsItem, movieDetails);
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
      const datasCategory3 = await FetchBestMoviesCategory(protocol, domain, urlApi, selectedCategory);
      const datasCategory3Filter = sortMoviesCategory(datasCategory3, selectedCategory);
      // Créer et afficher les films de la nouvelle catégorie
      updateThirdCategory(datasCategory3Filter);
      eventsListenerCategory3(category3Elements);
    });
  }
}
