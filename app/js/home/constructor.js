// ################################################################################################################# //
// ################################################## CONSTRUCTOR.JS ############################################### //
// ################################################################################################################# //

// APPELS DES FONCTIONNALITÉES ##################################################################################### //
export function constructorElements(
  BestMovieDetailsFetch,
  bestMovies,
  datasCategory1Filter,
  datasCategory2Filter,
  allCategories,
  datasCategory3Filter,
) {
  const bestMovieElement = createBestMovieElement(BestMovieDetailsFetch);
  const bestMoviesListElements = createBestMoviesListElements(bestMovies);
  const category1Elements = createBestMoviesCategory1(datasCategory1Filter);
  const category2Elements = createBestMoviesCategory2(datasCategory2Filter);
  const category3Elements = createBestMoviesCategory3(allCategories, datasCategory3Filter);
  // Retourne les éléments pour les écoutes.
  const elements = [];
  elements.push(bestMovieElement);
  elements.push(bestMoviesListElements);
  elements.push(category1Elements);
  elements.push(category2Elements);
  elements.push(category3Elements);
  return elements;
}

// FONCTIONNALITÉES MEILLEUR FILM ################################################################################## //
function createBestMovieElement(BestMovieDetailsFetch) {
  const rawBestMovieCard = document.querySelector(".best-movie__card");
  const rawColumnBestMovieCard = document.querySelector(".best-movie__details");

  const imageElement = document.createElement("img");
  imageElement.src = BestMovieDetailsFetch.image_url;
  rawBestMovieCard.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.innerText = BestMovieDetailsFetch.title;
  rawColumnBestMovieCard.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = BestMovieDetailsFetch.description;
  rawColumnBestMovieCard.appendChild(descriptionElement);

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn-details");
  buttonElement.textContent = "Détails";
  rawColumnBestMovieCard.appendChild(buttonElement);
  return rawColumnBestMovieCard;
}

// FONCTIONNALITÉES MEILLEUR FILMS ################################################################################# //
function createBestMoviesListElements(bestMovies) {
  const rawColumnTopRatedMoviesList = document.querySelector(".best-movies__cards");

  bestMovies.forEach((movie, index) => {
    const detailsItem = document.createElement("div");
    detailsItem.classList.add("best-movies__card");

    // Optionally add the hidden class to all but the first two movies
    if (index > 1) {
      detailsItem.classList.add("hidden"); // Add hidden class for movies 3 and above
    }

    const titleElement = document.createElement("h3");
    titleElement.innerText = movie.title;
    detailsItem.appendChild(titleElement);

    const imageElement = document.createElement("img");
    imageElement.src = movie.image_url;
    detailsItem.appendChild(imageElement);

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn-details");
    buttonElement.textContent = "Détails";
    detailsItem.appendChild(buttonElement);

    rawColumnTopRatedMoviesList.appendChild(detailsItem);
  });

  return rawColumnTopRatedMoviesList;
}

// FONCTIONNALITÉES MEILLEUR FILM CATEGORIE 1 ###################################################################### //
function createBestMoviesCategory1(datasCategory1Filter) {
  const listMoviesCategory1 = document.querySelector(".category1__cards");
  const categoryTitle = document.getElementById("category1__title");
  categoryTitle.textContent = datasCategory1Filter.categoryName;
  datasCategory1Filter.movies.forEach((movie, index) => {
    const detailsItem = document.createElement("div");
    detailsItem.classList.add("category__card");

    if (index > 1) {
      detailsItem.classList.add("hidden");
    }
    const titleElement = document.createElement("h3");
    titleElement.innerText = movie.title;
    detailsItem.appendChild(titleElement);
    const imageElement = document.createElement("img");
    imageElement.src = movie.image_url;
    detailsItem.appendChild(imageElement);
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn-details");
    buttonElement.textContent = "détails";
    detailsItem.appendChild(buttonElement);
    listMoviesCategory1.appendChild(detailsItem);
  });
  return listMoviesCategory1;
}

// FONCTIONNALITÉES MEILLEUR FILMS CATEGORIE 2 ###################################################################### //
function createBestMoviesCategory2(datasCategory2Filter) {
  const listMoviesCategory2 = document.querySelector(".category2__cards");
  const categoryTitle = document.getElementById("category2__title");
  categoryTitle.textContent = datasCategory2Filter.categoryName;
  datasCategory2Filter.movies.forEach((movie, index) => {
    const detailsItem = document.createElement("div");
    detailsItem.classList.add("category__card");
    if (index > 1) {
      detailsItem.classList.add("hidden");
    }
    const titleElement = document.createElement("h3");
    titleElement.innerText = movie.title;
    detailsItem.appendChild(titleElement);
    const imageElement = document.createElement("img");
    imageElement.src = movie.image_url;
    detailsItem.appendChild(imageElement);
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn-details");
    buttonElement.textContent = "détails";
    detailsItem.appendChild(buttonElement);
    listMoviesCategory2.appendChild(detailsItem);
  });
  return listMoviesCategory2;
}
// FONCTIONNALITÉES MEILLEUR FILMS CATEGORIE 3 ###################################################################### //
export function createBestMoviesCategory3(allCategories, datasCategory3Filter) {
  const listMoviesCategory3 = document.querySelector(".category3__cards");
  const categoryTitle = document.getElementById("category3__title");
  const categorySelect = document.getElementById("category-select");
  // Mise à jour du titre de la catégorie

  categoryTitle.textContent = datasCategory3Filter.categoryName;
  // Créer et ajouter les éléments de chaque film
  datasCategory3Filter.movies.forEach((movie, index) => {
    const detailsItem = document.createElement("div");
    detailsItem.classList.add("category__card");
    if (index > 1) {
      detailsItem.classList.add("hidden");
    }
    const titleElement = document.createElement("h3");
    titleElement.innerText = movie.title;
    detailsItem.appendChild(titleElement);

    const imageElement = document.createElement("img");
    imageElement.src = movie.image_url;
    detailsItem.appendChild(imageElement);

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn-details");
    buttonElement.textContent = "détails";
    detailsItem.appendChild(buttonElement);

    listMoviesCategory3.appendChild(detailsItem);
  });

  // Ajouter un message par défaut au menu déroulant (sélectionnez une catégorie)
  const defaultOption = document.createElement("option");
  defaultOption.innerText = "test";
  defaultOption.value = ""; // Valeur vide pour l'option par défaut
  defaultOption.textContent = "Sélectionnez une catégorie"; // Message à afficher
  defaultOption.disabled = true; // Empêche la sélection de cette option
  categorySelect.appendChild(defaultOption);

  // Ajouter les options de catégorie
  allCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;

    // Sélectionner automatiquement la catégorie actuelle
    if (category.name === datasCategory3Filter.categoryName) {
      option.selected = true; // Sélectionner si les noms correspondent
    }
    categorySelect.appendChild(option);
  });
  return listMoviesCategory3;
}




// FONCTIONNALITÉES MAJ MEILLEUR FILMS CATEGORIE 3 ################################################################# //
export function updateCategory3(datasCategory3Filter) {
  const listMoviesCategory3 = document.querySelector(".category3__cards");
  const categoryTitle = document.getElementById("category3__title");
  const categorySelect = document.getElementById("category-select");

  // Supprime les éléments précédent
  while (listMoviesCategory3.firstChild) {
    listMoviesCategory3.removeChild(listMoviesCategory3.firstChild);
  }
  // Mise à jour du titre de la catégorie
  categoryTitle.textContent = datasCategory3Filter.categoryName;

  if (datasCategory3Filter.movies.length === 0) {
    const noMoviesElement = document.createElement("p");
    noMoviesElement.textContent = "Aucun film trouvé dans cette catégorie.";
    listMoviesCategory3.appendChild(noMoviesElement);
  } else {
    // Remet a jour le bouton
    const btn = document.getElementById("showMoreBtn4");
    btn.textContent = "Voir plus +";
    console.log("ici", btn);

    // Créer et ajouter les éléments de chaque film
    datasCategory3Filter.movies.forEach((movie, index) => {
      const detailsItem = document.createElement("div");
      detailsItem.classList.add("category__card");
      if (index > 1) {
        detailsItem.classList.add("hidden");
      }
      const titleElement = document.createElement("h3");
      titleElement.innerText = movie.title;
      detailsItem.appendChild(titleElement);

      const imageElement = document.createElement("img");
      imageElement.src = movie.image_url;
      detailsItem.appendChild(imageElement);

      const buttonElement = document.createElement("button");
      buttonElement.classList.add("btn-details");
      buttonElement.textContent = "détails";
      detailsItem.appendChild(buttonElement);

      listMoviesCategory3.appendChild(detailsItem);
    });
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



// FONCTIONNALITÉES CREATION BOX DE DETAILS DES LIVRES ############################################################# //
export function createElementDetails(element, movieDetails) {
  // Sélectionner et supprimer tous les éléments existants ayant la classe "details" dans le document
  const allDetailsElements = document.querySelectorAll(".details");
  allDetailsElements.forEach((details) => {
    details.parentNode.removeChild(details); // Supprime chaque élément "details" trouvé
  });
  // Créer un nouvel élément div qui contiendra les détails du film
  const detailsElement = document.createElement("div");
  detailsElement.className = "details"; // Attribuer la classe "details" à ce nouvel élément

  // Créer un conteneur pour le titre et le bouton de fermeture (croix)
  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container"; // Attribuer la classe "title-container" pour le style

  // Créer le bouton de fermeture (la croix "×")
  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;"; // Le symbole de la croix

  // Ajouter un événement pour fermer la section des détails lorsque l'utilisateur clique sur la croix
  closeButton.addEventListener("click", () => {
    detailsElement.style.display = "none"; // Cache la section des détails
  });

  // Créer l'élément du titre (h4) et y insérer le titre du film
  const titleElement = document.createElement("h2");
  titleElement.innerText = `${movieDetails.title}`; // Utilise le titre du film depuis "movieDetails"

  // Ajouter le titre et la croix au conteneur du titre
  titleContainer.appendChild(titleElement);
  titleContainer.appendChild(closeButton);

  // Créer et ajouter les éléments de texte pour chaque propriété du film (année, genre, etc.)
  const yearGenreElement = document.createElement("span");
  yearGenreElement.innerText = `${movieDetails.year} - ${movieDetails.genres.join(", ")}`; // Année de sortie du film

  const classificationDurationCountryElement = document.createElement("span");
  // Vérifie si movieDetails.rated est défini et contient "Not rated" ou s'il est vide/indéfini
  if (!movieDetails.rated || movieDetails.rated.toLowerCase().includes("not rated")) {
    movieDetails.rated = "Non classifié"; // Si "Not rated" ou non défini, on remplace par "Non classifié"
  }
  classificationDurationCountryElement.innerText = `PG-${movieDetails.rated} - ${movieDetails.duration} minutes (${movieDetails.countries.join("/")})`;

  const imdbScoreElement = document.createElement("span");
  imdbScoreElement.innerText = `IMDB score: ${movieDetails.imdb_score}/10`; // Score IMDB du film

  const budgetElement = document.createElement("span");
  budgetElement.innerText = `Budget: ${movieDetails.budget} ${movieDetails.budget_currency}`; // Budget du film avec la devise

  const directorElement = document.createElement("p");
  directorElement.className = "director";
  const directorElementTitle = document.createElement("span");
  directorElementTitle.innerText = `Réalisé par: `;
  const director = document.createElement("span");
  director.innerText = `${movieDetails.directors.join(", ")}`; // Nom du réalisateur

  directorElement.appendChild(directorElementTitle);
  directorElement.appendChild(director);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = `${movieDetails.description}`; // Description du film

  const imageUrlElement = document.createElement("img");
  imageUrlElement.src = movieDetails.image_url; // URL de l'image du film

  const actorsElement = document.createElement("p");
  actorsElement.className = "actors";
  const actorsElementTitle = document.createElement("span");
  actorsElementTitle.innerText = `Avec: `;
  const actors = document.createElement("span");
  actors.innerText = `${movieDetails.actors.join(", ")}`; // Acteurs du film
  actorsElement.appendChild(actorsElementTitle);
  actorsElement.appendChild(actors);
  

  // Ajouter tous les éléments de détail créés (conteneur du titre, année, genre, etc.) dans l'élément principal des détails
  detailsElement.appendChild(titleContainer); // Ajout du conteneur de titre et du bouton de fermeture
  detailsElement.appendChild(yearGenreElement);
  detailsElement.appendChild(classificationDurationCountryElement);
  detailsElement.appendChild(imdbScoreElement);
  detailsElement.appendChild(budgetElement);
  detailsElement.appendChild(directorElement);
  detailsElement.appendChild(descriptionElement);
  detailsElement.appendChild(imageUrlElement);
  detailsElement.appendChild(actorsElement);

  // Enfin, ajouter cet élément de détails (avec toutes les infos du film) à l'élément parent fourni en paramètre
  element.appendChild(detailsElement);
}
