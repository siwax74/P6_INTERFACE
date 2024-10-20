// TRIE ET SORT LE MEILLEUR FILM ################################################################################### //
export function sortBestMovie(bestMovieFetch) {
  return bestMovieFetch.sort((a, b) => {
    // D'abord, trier par imdb_score
    if (b.imdb_score !== a.imdb_score) {
      return b.imdb_score - a.imdb_score;
    }
    // Si imdb_score est égal, trier par un autre attribut, par exemple votes
    return b.votes - a.votes; // ou un autre critère que vous souhaitez
  })[0];
}

// TRIE ET SORT LES MEILLEURS FILMS ################################################################################ //
export function sortBestMovies(bestMoviesFetch) {
  console.log("fetch", bestMoviesFetch.sort((a, b) => {
    if (b.imdb_score !== a.imdb_score) {
      return b.imdb_score - a.imdb_score;
    }
    return b.votes - a.votes;
  }).slice(1, 7));
  return bestMoviesFetch.sort((a, b) => {
    if (b.imdb_score !== a.imdb_score) {
      return b.imdb_score - a.imdb_score;
    }
    return b.votes - a.votes;
  }).slice(1, 7);
}

// TRIE ET SORT LES MEILLEURS FILMS D'UNE CATEGORY ################################################################# //
export function sortMoviesCategory(data, categoryName) {
  const sortedMovies = data.results.sort((a, b) => {
    if (b.imdb_score !== a.imdb_score) {
      return b.imdb_score - a.imdb_score;
    }
    return b.votes - a.votes;
  });
  return {
    categoryName,
    movies: sortedMovies.slice(0, 6),
  };
  
}

// TRIE ET SORT LE FILM EN TABLEAU DEPUIS LA PROMESSE ############################################################## //
export function sortMovieFetchByName(movieFetch) {
  // Vérifiez si movie est un objet et contient les informations nécessaires
  if (movieFetch) {
    return movieFetch.results[0]; // Retourne un tableau avec le premier élément
  }
  return []; // Retourne un tableau vide si movie n'est pas valide
}
