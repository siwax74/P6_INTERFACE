export function constructorElements(allMovies, allCategories, bestMovies, bestMovie, moviesInCategory1, category1Name, moviesInCategory2, category2Name, moviesInCategory3) {
    createBestMovieElement(bestMovie);
    createBestMoviesListElements(bestMovies);
    createBestMoviesCategory1(category1Name, moviesInCategory1.moviesInCategory);
    createBestMoviesCategory2(category2Name, moviesInCategory2.moviesInCategory);
    createBestMoviesCategory3(moviesInCategory3);
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
            buttonElement.textContent = "détails";
            detailsItem.appendChild(buttonElement);
            rawColumnTopRatedMoviesList.appendChild(detailsItem);
        }
        );
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
    }
    
    function createBestMoviesCategory2(category2Name, moviesInCategory2) {
        const listMoviesCategory2 = document.querySelector(".column-raw-list-movies-category2");
        const categoryTitle = document.getElementById("category-title-2");
        categoryTitle.textContent = category2Name;
        console.log(category2Name)
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
    }
    function createBestMoviesCategory3(moviesInCategory3) {
        moviesInCategory3.then(result => {
          const listMoviesCategory3 = document.querySelector(".column-raw-list-movies-category3");
          const categoryTitle = document.getElementById("category-title-3");
          const categorySelect = document.getElementById("category-select");
      
          // Create options for the select element
          result.forEach(category => {
            const option = document.createElement("option");
            option.value = category.category.id;
            option.text = category.category.name;
            categorySelect.appendChild(option);
          });
      
          // Set the initial category title and movies
          categoryTitle.textContent = result[3].category.name;
          displayMovies(result[3].moviesInCategory);
          
          // Add an event listener to the select element
          categorySelect.addEventListener("change", function() {
            const selectedCategoryId = categorySelect.value;
            const selectedCategory = result.find(category => category.category.id === parseInt(selectedCategoryId));
            displayMovies(selectedCategory.moviesInCategory);
          });
      
          // Function to display the movies
          function displayMovies(movies) {
            listMoviesCategory3.innerHTML = ""; // Clear the list
            movies.forEach(movie => {
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
          }
        });
      }
    
    
    
    
    }