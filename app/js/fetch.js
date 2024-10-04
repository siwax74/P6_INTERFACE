
export async function FetchDatas() {
    const url = "http://localhost:8000/api/v1/titles/";
    const allMovies = [];
    let nextPageUrl = url;
    let pageCount = 10; // Compteur pour limiter à 50 pages
  
    // Boucle pour récupérer les données, limitée à 50 pages
    while (nextPageUrl && pageCount < 50) {
      const response = await fetch(nextPageUrl);
      const data = await response.json();
  
      // Ajoute les films de la page actuelle
      allMovies.push(...data.results); // Utilisation de spread pour ajouter les films individuellement
  
      // Met à jour l'URL pour la page suivante
      nextPageUrl = data.next;
      pageCount++; // Incrémente le compteur de pages
    }
    return allMovies; // Retourne tous les films collectés
  }
  
export async function FetchCategories() {
    const url = "http://localhost:8000/api/v1/genres/";
    const allCategories = []
    let nextPageUrl = url;
    while (nextPageUrl !== null) {
      const response = await fetch(nextPageUrl);
      const data = await response.json();
      allCategories.push(...data.results);
      nextPageUrl = data.next;
    }
    return allCategories
  }