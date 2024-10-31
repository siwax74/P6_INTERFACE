// ################################################################################################################# //
// ################################################## DISPLAY.JS ################################################### //
// ################################################################################################################# //

// CE FICHIER CONTIENT LES FONCTIONS UTILES POUR LE PROJET "RÉUTILISABLE" :
// - TRIE DU MEILLEUR FILM (sortBestMovie)
// - TRIE DES MEILLEURS FILMS (sortBestMovies)
// - TRIE DES MEILLEURS FILMS D'UNE CATÉGORIE (sortMoviesCategory)
// - TRIE D'UN FILM PAR NOM (sortMovieFetchByName)
// - CRÉATION D'ÉLÉMENTS HTML GÉNÉRIQUES (createElement)
// - CRÉATION DE CARTES POUR LES FILMS (createCardElements)
// - MISE À JOUR DE LA TROISIÈME CATÉGORIE (updateThirdCategory)

// ################################################################################################################# //
// ############################################# FONCTION PRINCIPALE ############################################### //
// ################################################################################################################# //

// APPELS DES FONCTIONS ############################################################################################ //
export function displayElements(elementsCreated) {
    const bestMovieElementCreated = elementsCreated[0]; // Element du meilleur film ('img, h2, p, button')
    const bestMoviesListElementsCreated = elementsCreated[1]; // Element des meilleurs films (DocumentFragment)
    const category1ListElementsCreated = elementsCreated[2];  // Element de la catégorie 1 (DocumentFragment)
    const category2ListElementsCreated = elementsCreated[3];  // Element de la catégorie 2 (DocumentFragment)
    const category3ListElementsCreated = elementsCreated[4];  // Element de la catégorie 3 (DocumentFragment)

    const bestMovieDisplay = displayBestMovieCard(bestMovieElementCreated);
    const bestMoviesDisplay = displayBestMoviesCards(bestMoviesListElementsCreated);
    const bestMoviesCategory1 = displayBestMoviesCardsCategory(category1ListElementsCreated, ".category1__cards");
    const bestMoviesCategory2 = displayBestMoviesCardsCategory(category2ListElementsCreated, ".category2__cards");
    const { listMoviesCategory3, categorySelect } = displayThirdCategory(
      category3ListElementsCreated,
      ".category3__cards",
    );
  
    // Retourne les éléments pour les écoutes.
    const elementsDisplay = [];
    elementsDisplay.push(bestMovieDisplay);
    elementsDisplay.push(bestMoviesDisplay);
    elementsDisplay.push(bestMoviesCategory1);
    elementsDisplay.push(bestMoviesCategory2);
    elementsDisplay.push(listMoviesCategory3);
    elementsDisplay.push(categorySelect);
  
    return elementsDisplay;
  }
  
  // ################################################################################################################# //
  // ################################################## FONCTIONS #################################################### //
  // ################################################################################################################# //
  
  // AFFICHAGE DU MEILLEUR FILM ###################################################################################### //
  export function displayBestMovieCard(bestMovieElement) {
    const BestMovieCard = document.querySelector(".best-movie__card");
    const bestMovieDetails = document.querySelector(".best-movie__details");
    // Ajoute l'image au BestMovieCard
    BestMovieCard.appendChild(bestMovieElement[0]); // imageElement
    // Ajoute le titre, la description et le bouton au bestMovieDetails
    bestMovieDetails.appendChild(bestMovieElement[1]); // titleElement
    bestMovieDetails.appendChild(bestMovieElement[2]); // descriptionElement
    bestMovieDetails.appendChild(bestMovieElement[3]); // buttonElement
    return bestMovieDetails;
  }
  
  // AFFICHAGE DU MEILLEUR FILM ###################################################################################### //
  export function displayBestMoviesCards(bestMoviesListElements) {
    const bestMoviesCards = document.querySelector(".best-movies__cards");
    bestMoviesCards.appendChild(bestMoviesListElements[0]); // fragmentElement
    return bestMoviesCards;
  }
  
  // AFFICHAGE DES MEILLEURS FILMS ################################################################################### //
  export function displayBestMoviesCardsCategory(categoryListElementsCreated, selector) {
    const listMoviesCategory = document.querySelector(selector);
    const categoryTitle = document.querySelector(`${selector}__title`);
    categoryTitle.textContent = categoryListElementsCreated[1]; // titleElement
    listMoviesCategory.appendChild(categoryListElementsCreated[0]); // fragmentElement
    return listMoviesCategory;
  }
  
  // AFFICHAGE DE LA TROISIEME CATEGORIE ############################################################################# //
  export function displayThirdCategory(thirdCategoryElements, selector) {
    const listMoviesCategory3 = document.querySelector(selector);
    const categoryTitle = document.querySelector(`${selector}__title`);
    categoryTitle.textContent = thirdCategoryElements[0][1]; // titleElement
    listMoviesCategory3.appendChild(thirdCategoryElements[0][0]); // fragmentElement
    const categorySelect = document.getElementById("category-select"); // Bouton Select
    const options = thirdCategoryElements[2]; // Options "Genres"
  
    // Ajouter les options au select
    options.forEach((option) => {
      categorySelect.appendChild(option);
    });
    return { listMoviesCategory3, categorySelect };
  }
  // AFFICHAGE DÉTAILS FILM LORS DU CLIQUE SUR BOUTON "DÉTAILS" ###################################################### //
  export function displayMovieDetails(parentElement, elementsCreated) {
    // Supprimer tous les éléments existants ayant la classe "details"
    const allDetailsElements = document.querySelectorAll(".details");
    allDetailsElements.forEach((details) => {
      details.parentNode.removeChild(details);
    });
  
    // Les éléments créés sont dans un tableau, on les récupère et on les insère dans le DOM
    const [
      detailsElement,
      titleContainer,
      closeButton,
      titleElement,
      yearGenreElement,
      classificationDurationCountryElement,
      imdbScoreElement,
      budgetElement,
      directorElement,
      directorElementTitle,
      director,
      actorsElement,
      actorsElementTitle,
      actors,
      descriptionElement,
      imageUrlElement,
    ] = elementsCreated;
  
    // Ajouter les éléments dans leur conteneur respectif
    parentElement.appendChild(detailsElement);
    detailsElement.appendChild(titleContainer);
    titleContainer.appendChild(titleElement);
    titleContainer.appendChild(closeButton);
    detailsElement.appendChild(yearGenreElement);
    detailsElement.appendChild(classificationDurationCountryElement);
    detailsElement.appendChild(imdbScoreElement);
    detailsElement.appendChild(budgetElement);
  
    // Ajout des réalisateurs
    directorElement.appendChild(directorElementTitle);
    directorElement.appendChild(director);
    detailsElement.appendChild(directorElement);
  
    detailsElement.appendChild(descriptionElement);
    detailsElement.appendChild(imageUrlElement);
  
    // Ajout des acteurs
    actorsElement.appendChild(actorsElementTitle);
    actorsElement.appendChild(actors);
    detailsElement.appendChild(actorsElement);
  }

// ################################################################################################################# //
// ################################################## FIN DISPLAY.JS ############################################### //
// ################################################################################################################# //
  