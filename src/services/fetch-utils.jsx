import { useParams } from "react-router-dom";

export async function rickAndMortyFetch() {
  const statusParam = new URLSearchParams(location.search).get('status');
  
  const url =
    statusParam === 'all' || !statusParam
      ? 'https://rickandmortyapi.com/api/character'
      : `https://rickandmortyapi.com/api/character?status=${statusParam}`;
  const response = await fetch(url)
  const { results } = await response.json();
  

  return results;
}

