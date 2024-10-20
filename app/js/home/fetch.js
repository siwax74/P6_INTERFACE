// ################################################################################################################# //
// ################################################## FETCH.JS ##################################################### //
// ################################################################################################################# //

// FETCH LES MEILLEURS FILMS ####################################################################################### //
export async function FetchBestMovies(protocol, domain, urlApi) {
  let url = `${protocol}://${domain}/${urlApi}/titles/?imdb_score_min=9&page_size=50`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.results)
    return data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}

export async function fetchMovieDetails(protocol, domain, urlApi, bestMovie) {
  let url = `${protocol}://${domain}/${urlApi}/titles/${bestMovie.id}`;
  try {
    const response = await fetch(url);
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}

// FETCH LES MEILLEURS FILMS PAR CATEGORIES ######################################################################## //
export async function FetchBestMoviesCategory(protocol, domain, urlApi, categoryName) {
  let url = `${protocol}://${domain}/${urlApi}/titles/?imdb_score_min=8&page_size=50&genre=${categoryName}`;
  try {
    const response = await fetch(url);
    const datas = await response.json();
    console.log("ici la", datas)
    return datas;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}
// FETCH LES NOMS DES CATEGORIES DISPONIBLE ######################################################################## //
export async function FetchAllCategories(protocol, domain, urlApi) {
  let url = `${protocol}://${domain}/${urlApi}/genres/?page_size=25`;
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
// FETCH UN LIVRE PAR SON NOM ##################################################################################### //
export async function fetchMovieByName(protocol, domain, urlApi, movieTitle) {
  let url = `${protocol}://${domain}/${urlApi}/titles/?title=${movieTitle}`;
  try {
    const response = await fetch(url);
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}
