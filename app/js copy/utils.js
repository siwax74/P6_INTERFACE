export function getBestMovies(allMovies) {
    const sortedMovies = allMovies.sort((a, b) => parseFloat(b.imdb_score) - parseFloat(a.imdb_score));
    console.log(sortedMovies.slice(1, 7));
    return sortedMovies.slice(1, 7); // Retourne les films trié de 1 a 7 avec la meilleure note
  }
  
export function getBestMovie(allMovies) {
    let bestMovie = null;
    let highestRating = 0;
  
    allMovies.forEach((movie) => {
      const rating = parseFloat(movie.imdb_score);
      if (rating > highestRating) {
        highestRating = rating;
        bestMovie = movie;
      }
    });
    return bestMovie; // Retourne le film avec la meilleure note
  }
  
export function getCategory1(allCategories, allMovies) {
    const category1 = allCategories.find(category => category.id === 1);
    const moviesInCategory = allMovies.filter(movie => {
      return movie.genres.includes(category1.name); // Retourne la catégorie id=1 avec la meilleure note
    });
    console.log(moviesInCategory)
    return {
      category: category1,
      moviesInCategory: moviesInCategory.sort((a, b) => parseFloat(b.imdb_score) - parseFloat(a.imdb_score)).slice(0, 6)
    };
}

export function getCategory2(allCategories, allMovies) {
  const category2 = allCategories.find(category => category.id === 2);
  const moviesInCategory = allMovies.filter(movie => {
    return movie.genres.includes(category2.name); // Retourne la catégorie id=1 avec la meilleure note
  });
  console.log(moviesInCategory)
  return {
    category: category2,
    moviesInCategory: moviesInCategory.sort((a, b) => parseFloat(b.imdb_score) - parseFloat(a.imdb_score)).slice(0, 6)
  };
}
export function getCategory3(allCategories, allMovies) {
    const category3 = allCategories.find(category => category.id > 2);
    const moviesInCategory = allMovies.filter(movie => {
      return movie.genres.includes(category3.name);
    });
    return {
      category: category3,
      moviesInCategory: moviesInCategory.sort((a, b) => parseFloat(b.imdb_score) - parseFloat(a.imdb_score)).slice(0, 6)
    };

}