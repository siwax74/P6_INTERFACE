export async function FetchBestMovie() {
  const url = "http://localhost:8000/api/v1/titles/?imdb_score_min=6&page_size=17000";
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