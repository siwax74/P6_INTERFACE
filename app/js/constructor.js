

export function constructorElements(bestMovie, bestMovies, datasCategory1Filter, datasCategory2Filter, allCategories, datasCategory3Filter) {
    const bestMovieElement = createBestMovieElement(bestMovie);
    const bestMoviesListElements = createBestMoviesListElements(bestMovies);
    const category1Elements = createBestMoviesCategory1(datasCategory1Filter);
    const category2Elements = createBestMoviesCategory2(datasCategory2Filter);
    const category3Elements = createBestMoviesCategory3(allCategories, datasCategory3Filter);

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
    function createBestMoviesCategory1(datasCategory1Filter) {
        const listMoviesCategory1 = document.querySelector(".column-raw-list-movies-category1");
        const categoryTitle = document.getElementById("category-title");
        categoryTitle.textContent = datasCategory1Filter.categoryName;
        datasCategory1Filter.movies.forEach(movie => {
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

    function createBestMoviesCategory2(datasCategory2Filter) {
        const listMoviesCategory2 = document.querySelector(".column-raw-list-movies-category2");
        const categoryTitle = document.getElementById("category-title-2");
        categoryTitle.textContent = datasCategory2Filter.categoryName;
        datasCategory2Filter.movies.forEach(movie => {
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

    function createBestMoviesCategory3(allCategories, datasCategory3Filter) {
        const listMoviesCategory3 = document.querySelector(".column-raw-list-movies-category3");
        const categoryTitle = document.getElementById("category-title-3");
        const categorySelect = document.getElementById("category-select");
        
        // Mise à jour du titre de la catégorie
        categoryTitle.textContent = datasCategory3Filter.categoryName;

        // Créer et ajouter les éléments de chaque film
        datasCategory3Filter.movies.forEach(movie => {
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
    
        // Ajouter un message par défaut au menu déroulant (sélectionnez une catégorie)
        const defaultOption = document.createElement("option");
        defaultOption.value = "";  // Valeur vide pour l'option par défaut
        defaultOption.textContent = "Sélectionnez une catégorie";  // Message à afficher
        defaultOption.disabled = true;  // Empêche la sélection de cette option
        categorySelect.appendChild(defaultOption);
    
        // Ajouter les options de catégorie
        allCategories.forEach(category => {
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
    
}