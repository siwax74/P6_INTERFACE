export function constructorElements(allMovies, allCategories, bestMovies, bestMovie, category1, category2, category3) {
    createBestMovieElement(bestMovie);
    createCategory1(bestMovies);

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
    function createCategory1(bestMovies) {
        const rawTopRatedMoviesList = document.querySelector(".raw-top-rated-movies-list");
        bestMovies.forEach(movie => {
          const titleElement = document.createElement("h3");
          titleElement.innerText = movie.title;
          rawTopRatedMoviesList.appendChild(titleElement);
          const imageElement = document.createElement("img")
          imageElement.src = movie.image_url
          rawTopRatedMoviesList.appendChild(imageElement);
          const buttonElement = document.createElement("button")
          buttonElement.classList.add("btn-details")
          rawTopRatedMoviesList.appendChild(buttonElement);
        });
      }}