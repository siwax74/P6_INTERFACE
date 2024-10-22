// ################################################################################################################# //
// ################################################## CONSTRUCTOR.JS ############################################### //
// ################################################################################################################# //

import { createElement, createCardsElements } from '../utils/utils.js';

// APPELS DES FONCTIONNALITÉES ##################################################################################### //
export function displayElements(
  BestMovieDetailsFetch,
  bestMovies,
  datasCategory1Filter,
  datasCategory2Filter,
  allCategories,
  datasCategory3Filter,
) {
  const bestMovieElement = displayBestMovie(BestMovieDetailsFetch);
  const bestMoviesListElements = displayBestMoviesList(bestMovies);
  const category1Elements = displayMoviesByCategory(datasCategory1Filter, ".category1__cards");
  const category2Elements = displayMoviesByCategory(datasCategory2Filter, ".category2__cards");
  const category3Elements = displayThirdCategoryMovies(allCategories, datasCategory3Filter);

  
  // Retourne les éléments pour les écoutes.
  const elements = [];
  elements.push(bestMovieElement);
  elements.push(bestMoviesListElements);
  elements.push(category1Elements);
  elements.push(category2Elements);
  elements.push(category3Elements);
  return elements;
}

function displayBestMovie(BestMovieDetailsFetch) {
  context = []
  const rawBestMovieCard = document.querySelector(".best-movie__card");
  const rawColumnBestMovieCard = document.querySelector(".best-movie__details");

  // Crée l'image
  const imageElement = createElement('img', { src: BestMovieDetailsFetch.image_url });
  context.push(imageElement)
  rawBestMovieCard.appendChild(imageElement);

  // Crée le titre
  const titleElement = createElement('h2', {}, BestMovieDetailsFetch.title);
  rawColumnBestMovieCard.appendChild(titleElement);

  // Crée la description
  const descriptionElement = createElement('p', {}, BestMovieDetailsFetch.description);
  rawColumnBestMovieCard.appendChild(descriptionElement);

  // Crée le bouton "Détails"
  const buttonElement = createElement('button', { class: 'btn-details' }, 'Détails');
  rawColumnBestMovieCard.appendChild(buttonElement);

  return rawColumnBestMovieCard;
}

// FONCTIONNALITÉS MEILLEUR FILMS ################################################################################# //
function displayBestMoviesList(bestMovies) {
  const bestMoviesCards = document.querySelector(".best-movies__cards");
  const bestMoviesCardElements = createCardsElements(bestMovies, "best-movies__card");
  bestMoviesCards.appendChild(bestMoviesCardElements);
  return bestMoviesCards;
}

// FONCTIONNALITÉE MEILLEURS FILMS PAR CATEGORIE ###################################################################### //
function displayMoviesByCategory(datasCategoryFilter, selector) {
  const listMoviesCategory = document.querySelector(selector);
  const categoryTitle = document.querySelector(`${selector}__title`);
  categoryTitle.textContent = datasCategoryFilter.categoryName;
  const categoryCardElements = createCardsElements(datasCategoryFilter.movies, "category__card");
  listMoviesCategory.appendChild(categoryCardElements);
  return listMoviesCategory;
}

// FONCTIONNALITÉE MEILLEUR FILMS CATEGORIE 3 ###################################################################### //
export function displayThirdCategoryMovies(allCategories, datasCategory3Filter) {
  // Utilisation de la fonction générique pour créer la catégorie 3
  const listMoviesCategory3 = displayMoviesByCategory(datasCategory3Filter, '.category3__cards'); // Appelle la fonction pour créer les cartes de films
  const categorySelect = document.getElementById("category-select");

  // Ajouter un message par défaut au menu déroulant (sélectionnez une catégorie)
  const defaultOption = createElement('option', { value: "", disabled: true }, "Sélectionnez une catégorie");
  categorySelect.appendChild(defaultOption);

  // Ajouter les options de catégories dynamiquement
  allCategories.forEach((category) => {
    const option = createElement('option', { value: category.name }, category.name);

    // Sélectionner automatiquement la catégorie actuelle
    if (category.name === datasCategory3Filter.categoryName) {
      option.selected = true; // Sélectionner si les noms correspondent
    }
    categorySelect.appendChild(option);
  });

  return listMoviesCategory3; // Retourne la liste des films de la catégorie 3
}

// FONCTIONNALITÉS MAJ MEILLEUR FILMS CATEGORIE 3 ################################################################# //
export function updateThirdCategory(datasCategory3Filter) {
  const listMoviesCategory3 = document.querySelector(".category3__cards");
  const categoryTitle = document.querySelector(".category3__cards__title");
  const categorySelect = document.getElementById("category-select");

  // Supprime les éléments précédents
  while (listMoviesCategory3.firstChild) {
    listMoviesCategory3.removeChild(listMoviesCategory3.firstChild);
  }

  // Mise à jour du titre de la catégorie
  categoryTitle.textContent = datasCategory3Filter.categoryName;

  // Utiliser la fonction createCardsElements pour afficher les films
  const categoryCardElements = createCardsElements(datasCategory3Filter.movies, "category__card");
  
  if (datasCategory3Filter.movies.length === 0) {
    const noMoviesElement = createElement('p', {}, "Aucun film trouvé dans cette catégorie.");
    listMoviesCategory3.appendChild(noMoviesElement);
  } else {
    // Remet à jour le bouton
    const btn = document.getElementById("showMoreBtn4");
    btn.textContent = "Voir plus +";

    // Ajouter les éléments de chaque film
    listMoviesCategory3.appendChild(categoryCardElements);
  }

  // Sélectionner automatiquement la catégorie actuelle
  const options = categorySelect.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].text === datasCategory3Filter.categoryName) {
      options[i].selected = true; // Sélectionner si les noms correspondent
      break;
    }
  }
  
  return listMoviesCategory3;
}

export function displayMovieDetails(element, movieDetails) {
  // Supprimer tous les éléments existants ayant la classe "details"
  const allDetailsElements = document.querySelectorAll(".details");
  allDetailsElements.forEach((details) => {
    details.parentNode.removeChild(details);
  });

  // Créer l'élément principal pour les détails
  const detailsElement = createElement("div", { class: "details" });

  // Créer le conteneur pour le titre et le bouton de fermeture
  const titleContainer = createElement("div", { class: "title-container" });

  // Créer le bouton de fermeture
  const closeButton = createElement("span", { class: "close" }, "×");
  closeButton.addEventListener("click", () => {
    detailsElement.style.display = "none"; // Cache la section des détails
  });

  // Créer l'élément du titre
  const titleElement = createElement("h2", {}, movieDetails.title);

  // Ajouter le titre et la croix au conteneur du titre
  titleContainer.appendChild(titleElement);
  titleContainer.appendChild(closeButton);

  // Créer et ajouter les éléments de texte
  const yearGenreElement = createElement("span", {}, `${movieDetails.year} - ${movieDetails.genres.join(", ")}`);
  
  const rated = (!movieDetails.rated || movieDetails.rated.toLowerCase().includes("not rated")) 
    ? "Non classifié" 
    : movieDetails.rated;
  const classificationDurationCountryElement = createElement("span", {}, `PG-${rated} - ${movieDetails.duration} minutes (${movieDetails.countries.join("/")})`);

  const imdbScoreElement = createElement("span", {}, `IMDB score: ${movieDetails.imdb_score}/10`);
  const budgetElement = createElement("span", {}, `Budget: ${movieDetails.budget} ${movieDetails.budget_currency}`);

  const directorElement = createElement("p", { class: "director" });
  const directorElementTitle = createElement("span", {}, "Réalisé par: ");
  const director = createElement("span", {}, movieDetails.directors.join(", "));
  directorElement.appendChild(directorElementTitle);
  directorElement.appendChild(director);

  const descriptionElement = createElement("p", {}, movieDetails.description);
  const imageUrlElement = createElement("img", { src: movieDetails.image_url });
  
  const actorsElement = createElement("p", { class: "actors" });
  const actorsElementTitle = createElement("span", {}, "Avec: ");
  const actors = createElement("span", {}, movieDetails.actors.join(", "));
  actorsElement.appendChild(actorsElementTitle);
  actorsElement.appendChild(actors);

  // Ajouter tous les éléments de détail créés dans l'élément principal
  detailsElement.appendChild(titleContainer);
  detailsElement.appendChild(yearGenreElement);
  detailsElement.appendChild(classificationDurationCountryElement);
  detailsElement.appendChild(imdbScoreElement);
  detailsElement.appendChild(budgetElement);
  detailsElement.appendChild(directorElement);
  detailsElement.appendChild(descriptionElement);
  detailsElement.appendChild(imageUrlElement);
  detailsElement.appendChild(actorsElement);

  // Ajouter cet élément de détails à l'élément parent fourni
  element.appendChild(detailsElement);
}