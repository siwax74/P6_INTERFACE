export function constructorElements(allMovies, allCategories, bestMovies, bestMovie, category1, category2, category3) {
    createBestMovieElement(bestMovie);
    createBestMoviesListElements(bestMovies);

    function createBestMovieElement(bestMovie) {
        const sectionBestMovieCard = document.querySelector(".column-best-movie-card");
        const rawBestMovieCard = document.querySelector(".raw-best-movie-card")
        const rawColumnBestMovieCard = document.querySelector(".raw-column-best-movie-card")

        const imageElement = document.createElement("img");
        imageElement.src = bestMovie.image_url;
        rawBestMovieCard.appendChild(imageElement);

        const titleElement = document.createElement("h3");
        titleElement.innerText = bestMovie.title;
        rawColumnBestMovieCard.appendChild(titleElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = bestMovie.actors
        rawColumnBestMovieCard.appendChild(descriptionElement);

        const buttonElement = sectionBestMovieCard.querySelector(".btn-details");
        rawColumnBestMovieCard.appendChild(buttonElement);
    }
    function createBestMoviesListElements(bestMovies) {
        const rawColumnTopRatedMoviesList = document.querySelector(".raw-top-rated-movies-list");
        bestMovies.forEach(movie => {
          const detailsItem = document.createElement("div");
          detailsItem.classList.add("details-item");
          const titleElement = document.createElement("h3");
          titleElement.innerText = movie.title;
          detailsItem.appendChild(titleElement);
          const imageElement = document.createElement("img");
          imageElement.src = movie.image_url;
          detailsItem.appendChild(imageElement);
          const buttonElement = document.createElement("button");
          buttonElement.classList.add("btn-details");
          detailsItem.appendChild(buttonElement);
          rawColumnTopRatedMoviesList.appendChild(detailsItem);
        });
      
      }}