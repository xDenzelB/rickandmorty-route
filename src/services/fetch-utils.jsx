export async function rickAndMortyFetch() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = response.json();
  const results = data.results;

  results.map(item => ({
    name: item.name,
    status: item.status,
    img: item.image,
  }));

  return results;
}