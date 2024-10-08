export function listenEvents(elements) {
    console.log(elements);

    const elements0 = elements[0];
    const elements1 = elements[1];
    const elements2 = elements[2];
    const elements3 = elements[3];
    const elements4 = elements[4];

    // On appelle les deux fonctions pour attacher les écouteurs d'événements
    eventsListenerBestBook(elements0);
    eventsListenerBestBooks(elements1);
    eventsListenerCategory1(elements2);
    eventsListenerCategory2(elements3);
    eventsListenerCategory3(elements4)

    // Fonction qui gère l'écouteur pour le premier élément
    function eventsListenerBestBook(elements0) {
        const button = elements0.querySelector('button');
        console.log(button);
        button.addEventListener('click', function () {
            console.log('Clic sur le bouton du premier élément');
        });
    }

    // Fonction qui gère l'écouteur pour le deuxième élément
    function eventsListenerBestBooks(elements1) {
        const buttons = elements1.querySelectorAll('button');
        console.log(buttons);
        buttons.forEach(function(button) {
            button.addEventListener('click', function () {
                console.log('Clic sur le bouton du deuxième élément');
            });
        });
    }

    // Fonction qui gère l'écouteur pour le troisième élément
    function eventsListenerCategory1(elements2) {
        const buttons = elements2.querySelectorAll('button');
        console.log(buttons);
        buttons.forEach(function(button) {
            button.addEventListener('click', function () {
                console.log('Clic sur le bouton du troisième élément');
            });
        });
    }
    
    // Fonction qui gère l'écouteur pour le quatrième élément
    function eventsListenerCategory2(elements3) {
        const buttons = elements3.querySelectorAll('button');
        console.log(buttons);
        buttons.forEach(function(button) {
            button.addEventListener('click', function () {
                console.log('Clic sur le bouton du quatrième élément');
            });
        });
    }
    
    // Fonction qui gère l'écouteur pour le cinquième élément
    function eventsListenerCategory3(elements4) {
        const buttons = elements4.querySelectorAll('button');
        const select = document.getElementById('category-select');
        console.log(select)
        console.log(buttons);
        buttons.forEach(function(button) {
            button.addEventListener('click', function () {
                console.log('Clic sur le bouton du quatrième élément');
            });
        });
        select.addEventListener('click', function() {
            console.log('Clic sur le select du quatrième élément');
            });
        select.addEventListener('change', function() {
            console.log('selection changé');
        });
    }

}
