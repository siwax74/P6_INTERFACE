// ################################################################################################################# //
// ################################################## FETCH.JS ##################################################### //
// ################################################################################################################# //

// CE FICHIER CONTIENT DES FONCTIONS ASYNCHRONES RESPONSABLES DE LA RÉCUPÉRATION DES DONNÉES DE FILMS À PARTIR D'UNE API :
// - FETCHBESTMOVIES : RÉCUPÈRE UNE LISTE DES MEILLEURS FILMS AVEC UN SCORE IMDB MINIMUM.
// - FETCHMOVIEDETAILS : RÉCUPÈRE LES DÉTAILS D'UN FILM SPÉCIFIQUE PAR SON IDENTIFIANT.
// - FETCHBESTMOVIESCATEGORY : RÉCUPÈRE UNE LISTE DES MEILLEURS FILMS DANS UNE CATÉGORIE SPÉCIFIQUE.
// - FETCHALLCATEGORIES : RÉCUPÈRE LES NOMS DES CATÉGORIES DE FILMS DISPONIBLES.
// - FETCHMOVIEBYNAME : RÉCUPÈRE UN FILM PAR SON NOM.

// ################################################################################################################# //
// ################################################## FONCTIONS #################################################### //
// ################################################################################################################# //

// FETCH LES MEILLEURS FILMS ####################################################################################### //
export async function fetchBestMovies(protocol, domain, urlApi) {
  let url = `${protocol}://${domain}/${urlApi}/titles/?imdb_score_min=9&page_size=50`;
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
// FETCH LES DETAILS D'UN FILM ######################################################################## //
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
export async function fetchBestMoviesCategory(protocol, domain, urlApi, categoryName) {
  let url = `${protocol}://${domain}/${urlApi}/titles/?imdb_score_min=8&page_size=50&genre=${categoryName}`;
  try {
    const response = await fetch(url);
    const datas = await response.json();
    return datas;
    
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}

// FETCH LES NOMS DES CATEGORIES DISPONIBLE ######################################################################## //
export async function fetchAllCategories(protocol, domain, urlApi) {
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

// ################################################################################################################# //
// ################################################## FIN FETCH.JS ################################################# //
// ################################################################################################################# //