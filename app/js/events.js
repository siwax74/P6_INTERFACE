import { FetchBestMoviesCategory } from './fetch.js';

export function listenEvents(elements) {
    const bestMovieElement = elements[0];
    const bestMoviesListElements = elements[1];
    const category1Elements = elements[2];
    const category2Elements = elements[3];
    const category3Elements = elements[4];

    // On appelle les deux fonctions pour attacher les écouteurs d'événements
    eventsListenerBestBook(bestMovieElement);
    eventsListenerBestBooks(bestMoviesListElements);
    eventsListenerCategory1(category1Elements);
    eventsListenerCategory2(category2Elements);
    eventsListenerCategory3(category3Elements)

    // Fonction qui gère l'écouteur pour le meilleur film
    function eventsListenerBestBook(bestMovieElement) {
        const button = bestMovieElement.querySelector('button');
        button.addEventListener('click', function () {
            console.log('Clic sur le bouton du premier élément');
        });
    }

    // Fonction qui gère l'écouteur pour les 6 meilleurs films
    function eventsListenerBestBooks(bestMoviesListElements) {
        const buttons = bestMoviesListElements.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.addEventListener('click', function () {
                console.log('Clic sur le bouton du deuxième élément');
            });
        });
    }

    // Fonction qui gère l'écouteur pour la première catégorie
    function eventsListenerCategory1(category1Elements) {
        const buttons = category1Elements.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.addEventListener('click', function () {
                console.log('Clic sur le bouton du troisième élément');
            });
        });
    }
    
    // Fonction qui gère l'écouteur pour la deuxieme catégorie
    function eventsListenerCategory2(category2Elements) {
        const buttons = category2Elements.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.addEventListener('click', function () {
                console.log('Clic sur le bouton du quatrième élément');
            });
        });
    }
    
    function eventsListenerCategory3(category3Elements) {
        const buttons = category3Elements.querySelectorAll('button');
        const select = document.getElementById('category-select');
        buttons.forEach(function(button) {
            button.addEventListener('click', function () {
                console.log('Clic sur le bouton du quatrième élément');
            });
        });
        select.addEventListener('change', async function() {
            const selectedCategory = select.value;
            const datas = await FetchBestMoviesCategory(selectedCategory);
            updateCategory3Elements(datas);
        });
    }
}