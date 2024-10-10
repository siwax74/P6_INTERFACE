// ################################################################################################################# //
// ################################################## FETCH.JS ##################################################### //
// ################################################################################################################# //

// FETCH LES MEILLEURS FILMS ####################################################################################### //
export async function FetchBestMovies() {
  const url =
    "http://localhost:8000/api/v1/titles/?imdb_score_min=9&page_size=50";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}
// FETCH LES MEILLEURS FILMS PAR CATEGORIES ######################################################################## //
export async function FetchBestMoviesCategory(categoryName) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/titles/?imdb_score_min=8&page_size=50&genre=${categoryName}`,
    );
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}
// FETCH LES NOMS DES CATEGORIES DISPONIBLE ######################################################################## //
export async function FetchAllCategories() {
  try {
    const url = "http://localhost:8000/api/v1/genres/?page_size=25";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}
