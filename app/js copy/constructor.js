export function constructorElements(bestMovieFetch, allCategories, bestMovies, bestMovie, moviesInCategory1, category1Name, moviesInCategory2, category2Name, moviesInCategory3, category3Name) {
    const bestMovieElement = createBestMovieElement(bestMovie);
    const bestMoviesListElements = createBestMoviesListElements(bestMovies);
    const category1Elements = createBestMoviesCategory1(category1Name, moviesInCategory1.moviesInCategory);
    const category2Elements = createBestMoviesCategory2(category2Name, moviesInCategory2.moviesInCategory);
    const category3Elements = createBestMoviesCategory3(category3Name, moviesInCategory3.moviesInCategory, allCategories);

    const elements = [];
    elements.push(bestMovieElement);
    elements.push(bestMoviesListElements);
    elements.push(category1Elements);
    elements.push(category2Elements);
    elements.push(category3Elements);
    return elements;

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
        return rawColumnBestMovieCard;
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
            buttonElement.textContent = "détails";
            detailsItem.appendChild(buttonElement);
            rawColumnTopRatedMoviesList.appendChild(detailsItem);
        });
        return rawColumnTopRatedMoviesList;
    }
    function createBestMoviesCategory1(category1Name, moviesInCategory1) {
        const listMoviesCategory1 = document.querySelector(".column-raw-list-movies-category1");
        const categoryTitle = document.getElementById("category-title");
        categoryTitle.textContent = category1Name;
        moviesInCategory1.forEach(movie => {
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
            buttonElement.textContent = "détails";
            detailsItem.appendChild(buttonElement);
            listMoviesCategory1.appendChild(detailsItem);
        });
        return listMoviesCategory1;
    }
    
    function createBestMoviesCategory2(category2Name, moviesInCategory2) {
        const listMoviesCategory2 = document.querySelector(".column-raw-list-movies-category2");
        const categoryTitle = document.getElementById("category-title-2");
        categoryTitle.textContent = category2Name;
        moviesInCategory2.forEach(movie => {
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
            buttonElement.textContent = "détails";
            detailsItem.appendChild(buttonElement);
            listMoviesCategory2.appendChild(detailsItem);
        });
        return listMoviesCategory2;
    }

    function createBestMoviesCategory3(category3Name, moviesInCategory3, allCategories) {
      const listMoviesCategory3 = document.querySelector(".column-raw-list-movies-category3");
      const categoryTitle = document.getElementById("category-title-3");
      categoryTitle.textContent = category3Name;
      
      const categorySelect = document.getElementById("category-select");
      allCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.name;
        option.textContent = category.name;
        categorySelect.appendChild(option);
      });
    
      moviesInCategory3.forEach(movie => {
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
        buttonElement.textContent = "détails";
        detailsItem.appendChild(buttonElement);
        listMoviesCategory3.appendChild(detailsItem);
      });
      return listMoviesCategory3; 
    }
    
}