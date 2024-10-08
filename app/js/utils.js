export function sortBestMovie(bestMovieFetch) {
  return bestMovieFetch.sort((a, b) => parseFloat(b.imdb_score) - parseFloat(a.imdb_score))[0];
}

export function sortBestMovies(bestMoviesFetch) {
  return bestMoviesFetch.sort((a, b) => parseFloat(b.imdb_score) - parseFloat(a.imdb_score)).slice(1, 7);
}

export function sortMoviesCategory(data, categoryName) {
  return {
    categoryName,
    movies: data.results.sort((a, b) => b.imdb_score - a.imdb_score).slice(0, 6)
  };
}