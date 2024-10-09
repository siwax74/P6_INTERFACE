export function sortBestMovie(bestMovieFetch) {
  return bestMovieFetch[0];
}

export function sortBestMovies(bestMoviesFetch) {
  return bestMoviesFetch.slice(1, 7);
}
export function sortMoviesCategory(data, categoryName) {
  return {
    categoryName,
    movies: data.results.slice(0, 6)
  };
}