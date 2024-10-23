// ################################################################################################################# //
// ################################################## UTILS.JS ##################################################### //
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
// ################################################## FONCTIONS #################################################### //
// ################################################################################################################# //

// TRIE ET SÉLECTIONNE LE MEILLEUR FILM D'UNE LISTE ############################################################### //
export function sortBestMovie(bestMovieFetch) {
  return bestMovieFetch.sort((a, b) => {
    // Trier d'abord par imdb_score
    if (b.imdb_score !== a.imdb_score) {
      return b.imdb_score - a.imdb_score;
    }
    // Si les imdb_scores sont égaux, trier par nombre de votes
    return b.votes - a.votes;
  })[0];
}

// TRIE ET SÉLECTIONNE LES MEILLEURS FILMS (HORS PREMIER) ######################################################### //
export function sortBestMovies(bestMoviesFetch) {
  return bestMoviesFetch
    .sort((a, b) => {
      if (b.imdb_score !== a.imdb_score) {
        return b.imdb_score - a.imdb_score;
      }
      return b.votes - a.votes;
    })
    .slice(1, 7); // Retourne les films de la 2ème à la 7ème place
}

// TRIE LES FILMS D'UNE CATÉGORIE ET RETOURNE LES 6 MEILLEURS ##################################################### //
export function sortMoviesCategory(data, categoryName) {
  const sortedMovies = data.results.sort((a, b) => {
    if (b.imdb_score !== a.imdb_score) {
      return b.imdb_score - a.imdb_score;
    }
    return b.votes - a.votes;
  });
  return {
    categoryName,
    movies: sortedMovies.slice(0, 6), // Retourne les 6 premiers films
  };
}

// TRIE ET SÉLECTIONNE UN FILM À PARTIR DE LA PROMESSE (PAR NOM) ################################################## //
export function sortMovieFetchByName(movieFetch) {
  // Vérifie si l'objet movieFetch est valide et contient des résultats
  if (movieFetch && movieFetch.results && movieFetch.results.length > 0) {
    return movieFetch.results[0]; // Retourne le premier film trouvé
  }
  return []; // Retourne un tableau vide si aucun film trouvé
}

// CRÉATION D'UN ÉLÉMENT HTML GÉNÉRIQUE AVEC ATTRIBUTS ET CONTENU TEXTUEL ######################################### //
export function createElement(tag, attributes = {}, textContent = "") {
  const element = document.createElement(tag);
  Object.keys(attributes).forEach((key) => element.setAttribute(key, attributes[key]));
  if (textContent) element.textContent = textContent;
  return element;
}

// CRÉATION D'UNE CARTE DE FILM (CARTE HTML) ###################################################################### //
export function createCardElements(movies, className) {
  const fragment = document.createDocumentFragment();

  movies.forEach((movie, index) => {
    const card = createElement("div", { class: className });

    if (index > 1) {
      card.classList.add("hidden");
    }

    // Ajoute le titre du film
    const titleElement = createElement("h3", {}, movie.title);
    card.appendChild(titleElement);

    // Ajoute l'image du film
    const imageElement = createElement("img", { src: movie.image_url });
    card.appendChild(imageElement);

    // Ajoute un bouton "Détails"
    const buttonElement = createElement("button", { class: "btn-details" }, "Détails");
    card.appendChild(buttonElement);

    fragment.appendChild(card);
  });

  return fragment;
}

// MISE À JOUR DE LA TROISIÈME CATÉGORIE DE FILMS ################################################################# //
export function updateThirdCategory(datasCategory3Filter) {
  const listMoviesCategory3 = document.querySelector(".category3__cards");
  const categoryTitle = document.querySelector(".category3__cards__title");
  const categorySelect = document.getElementById("category-select");

  // Supprime les anciens éléments de la catégorie
  while (listMoviesCategory3.firstChild) {
    listMoviesCategory3.removeChild(listMoviesCategory3.firstChild);
  }

  // Met à jour le titre de la catégorie
  categoryTitle.textContent = datasCategory3Filter.categoryName;

  // Crée et affiche les cartes de films
  const categoryCardElements = createCardElements(datasCategory3Filter.movies, "category__card");

  if (datasCategory3Filter.movies.length === 0) {
    const noMoviesElement = createElement("p", {}, "Aucun film trouvé dans cette catégorie.");
    listMoviesCategory3.appendChild(noMoviesElement);
  } else {
    // Remet à jour le bouton "Voir plus"
    const btn = document.getElementById("showMoreBtn4");
    btn.textContent = "Voir plus +";

    // Ajoute les cartes de films à la catégorie
    listMoviesCategory3.appendChild(categoryCardElements);
  }

  // Sélectionne automatiquement la catégorie correspondante dans le menu déroulant
  const options = categorySelect.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].text === datasCategory3Filter.categoryName) {
      options[i].selected = true; // Sélectionne l'option si les noms correspondent
      break;
    }
  }

  return listMoviesCategory3;
}

// ################################################################################################################# //
// ################################################## FIN UTILS.JS ################################################# //
// ################################################################################################################# //
