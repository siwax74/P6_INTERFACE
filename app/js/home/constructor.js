// ################################################################################################################# //
// ################################################## CONSTRUCTOR.JS ############################################### //
// ################################################################################################################# //

// CE FICHIER CONTIENT LES FONCTIONS RESPONSABLES DE LA CRÉATION D'ÉLÉMENTS DU DOM :
// FONCTION PRINCIPALE :
// - CRÉE LES ÉLÉMENTS NÉCESSAIRES POUR AFFICHER LES FILMS, LES CATÉGORIES ET LES DÉTAILS DU FILM.
// FONCTIONS :
// - CRÉE L'ÉLÉMENT REPRÉSENTANT LE MEILLEUR FILM AVEC SON IMAGE, TITRE, DESCRIPTION ET BOUTON "DÉTAILS".
// - CRÉE DES CARTES POUR LA LISTE DES MEILLEURS FILMS.
// - CRÉE DES CARTES POUR LES FILMS FILTRÉS PAR CATÉGORIE AVEC UN TITRE.
// - CRÉE DES CARTES POUR LA CATÉGORIE 3 ET UN MENU DÉROULANT POUR SÉLECTIONNER LES CATÉGORIES.
// - CRÉE UN ÉLÉMENT AFFICHANT LES DÉTAILS D'UN FILM LORSQUE L'UTILISATEUR CLIQUE SUR LE BOUTON "DÉTAILS".

// IMPORT DES MODULES ############################################################################################## //
import { createElement, createCardElements } from "../utils/utils.js";

// ################################################################################################################# //
// ############################################# FONCTION PRINCIPALE ############################################### //
// ################################################################################################################# //

// APPELS DES FONCTIONS ############################################################################################ //
export function createElements(
  BestMovieDetailsFetch,
  bestMovies,
  datasCategory1Filter,
  datasCategory2Filter,
  allCategories,
  datasCategory3Filter,
) {
  const bestMovieElementCreated = createBestMovieCard(BestMovieDetailsFetch);
  const bestMoviesListElementsCreated = createBestMoviesCards(bestMovies);
  const category1ListElementsCreated = createBestMoviesCardsByCategory(datasCategory1Filter);
  const category2ListElementsCreated = createBestMoviesCardsByCategory(datasCategory2Filter);
  const category3ListElementsCreated = createThirdBestMoviesCardsCategory(allCategories, datasCategory3Filter);

  // Retourne les éléments pour les display.
  const elementsCreated = [];
  elementsCreated.push(bestMovieElementCreated);
  elementsCreated.push(bestMoviesListElementsCreated);
  elementsCreated.push(category1ListElementsCreated);
  elementsCreated.push(category2ListElementsCreated);
  elementsCreated.push(category3ListElementsCreated);
  return elementsCreated;
}

// ################################################################################################################# //
// ################################################## FONCTIONS #################################################### //
// ################################################################################################################# //

// CRÉATION DES MEILLEUR FILM ###################################################################################### //
function createBestMovieCard(BestMovieDetailsFetch) {
  const bestMovieElementCreated = [];

  // Crée l'image
  const imageElement = createElement("img", { src: BestMovieDetailsFetch.image_url });
  bestMovieElementCreated.push(imageElement);

  // Crée le titre
  const titleElement = createElement("h2", {}, BestMovieDetailsFetch.title);
  bestMovieElementCreated.push(titleElement);

  // Crée la description
  const descriptionElement = createElement("p", {}, BestMovieDetailsFetch.description);
  bestMovieElementCreated.push(descriptionElement);

  // Crée le bouton "Détails"
  const buttonElement = createElement("button", { class: "btn-details" }, "Détails");
  bestMovieElementCreated.push(buttonElement);

  return bestMovieElementCreated;
}

// CRÉATION DES MEILLEURS FILMS #################################################################################### //
function createBestMoviesCards(bestMovies) {
  const bestMoviesListElementsCreated = [];
  const bestMoviesCardElements = createCardElements(bestMovies, "best-movies__card");
  bestMoviesListElementsCreated.push(bestMoviesCardElements);
  return bestMoviesListElementsCreated;
}

// CRÉATION DES MEILLEURS FILMS PAR CATEGORIE ###################################################################### //
export function createBestMoviesCardsByCategory(datasCategoryFilter) {
  const bestMoviesListElementsCreated = [];
  const categoryTitle = datasCategoryFilter.categoryName;
  const categoryCardElements = createCardElements(datasCategoryFilter.movies, "category__card");
  bestMoviesListElementsCreated.push(categoryCardElements);
  bestMoviesListElementsCreated.push(categoryTitle);
  return bestMoviesListElementsCreated;
}

// CRÉATION MEILLEURS FILMS DE LA CATÉGORIE 3 ###################################################################### //
export function createThirdBestMoviesCardsCategory(allCategories, datasCategory3Filter) {
  // Utilisation de la fonction générique pour créer la catégorie 3 (fragmentElement et title)
  const listMoviesCategory3 = createBestMoviesCardsByCategory(datasCategory3Filter, ".category3__cards");

  // Crée un tableau pour contenir les éléments créés (cartes de films, titre, et options de menu déroulant)
  const context = [];

  // Crée les options du menu déroulant
  const categorySelect = document.createElement("select"); // ou récupérer l'élément existant via son ID si nécessaire
  const defaultOption = createElement("option", { value: "", disabled: true }, "Sélectionnez une catégorie");

  // Prépare un tableau d'options à ajouter dans display
  const options = [defaultOption]; // Ajoute l'option par défaut dans un tableau

  // Utilisation du forEach pour préparer les options dynamiques
  allCategories.forEach((category) => {
    const option = createElement("option", { value: category.name }, category.name);
    if (category.name === datasCategory3Filter.categoryName) {
      option.selected = true; // Sélectionne la catégorie actuelle
    }
    options.push(option); // Ajoute les options dans le tableau
  });

  // Pousse les éléments dans le contexte pour les retourner
  context.push(listMoviesCategory3); // Fragment des cartes de films
  context.push(categorySelect); // Le select sans options encore ajoutées
  context.push(options); // Ajoute le tableau d'options pour gestion dans display

  return context; // Retourne le contexte contenant les éléments créés
}

// CRÉATION DÉTAILS FILM LORS DU CLIQUE SUR BOUTON "DÉTAILS" ####################################################### //
export function createMovieDetailsCard(movieDetails) {
  const elementsCreated = [];

  // Créer l'élément principal pour les détails
  const detailsElement = createElement("div", { class: "details" });
  elementsCreated.push(detailsElement);

  // Créer le conteneur pour le titre et le bouton de fermeture
  const titleContainer = createElement("div", { class: "title-container" });
  elementsCreated.push(titleContainer);

  // Créer le bouton de fermeture
  const closeButton = createElement("span", { class: "close" }, "×");
  closeButton.addEventListener("click", () => {
    detailsElement.style.display = "none"; // Cache la section des détails
  });
  elementsCreated.push(closeButton);

  // Créer l'élément du titre
  const titleElement = createElement("h2", {}, movieDetails.title);
  elementsCreated.push(titleElement);

  // Créer et ajouter les éléments de texte
  const yearGenreElement = createElement("span", {}, `${movieDetails.year} - ${movieDetails.genres.join(", ")}`);
  elementsCreated.push(yearGenreElement);

  const rated =
    !movieDetails.rated || movieDetails.rated.toLowerCase().includes("not rated")
      ? "Non classifié"
      : movieDetails.rated;
  const classificationDurationCountryElement = createElement(
    "span",
    {},
    `PG-${rated} - ${movieDetails.duration} minutes (${movieDetails.countries.join("/")})`,
  );
  elementsCreated.push(classificationDurationCountryElement);

  const imdbScoreElement = createElement("span", {}, `IMDB score: ${movieDetails.imdb_score}/10`);
  elementsCreated.push(imdbScoreElement);

  const budgetText = movieDetails.budget !== null ? `Budget: ${movieDetails.budget} ${movieDetails.budget_currency}` : "Budget: Non spécifié";
  const budgetElement = createElement("span", {}, budgetText);
  elementsCreated.push(budgetElement);

  // Réalisateurs
  const directorElement = createElement("p", { class: "director" });
  const directorElementTitle = createElement("span", {}, "Réalisé par: ");
  const director = createElement("span", {}, movieDetails.directors.join(", "));
  elementsCreated.push(directorElement);
  elementsCreated.push(directorElementTitle);
  elementsCreated.push(director);

  // Acteurs
  const actorsElement = createElement("p", { class: "actors" });
  const actorsElementTitle = createElement("span", {}, "Avec: ");
  const actors = createElement("span", {}, movieDetails.actors.join(", "));
  elementsCreated.push(actorsElement);
  elementsCreated.push(actorsElementTitle);
  elementsCreated.push(actors);

  const descriptionElement = createElement("p", {}, movieDetails.description);
  elementsCreated.push(descriptionElement);

  const imageUrlElement = createElement("img", { src: movieDetails.image_url });
  // Gestion de l'erreur de chargement de l'image (404 ou autre)
  imageUrlElement.onerror = function () {
    imageUrlElement.src = "/app/medias/home/images/no_image.png"; // Chemin vers une image par défaut
  };
  elementsCreated.push(imageUrlElement);

  // Retourne tous les éléments créés sous forme de tableau
  return elementsCreated;
}

// ################################################################################################################# //
// ############################################## FIN CONSTRUCTOR.JS ############################################### //
// ################################################################################################################# //