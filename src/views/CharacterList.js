import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { rickAndMortyFetch } from "../services/fetch-utils"

export default function CharacterList() {
  const history = useHistory();
  const location = useLocation();
  const status = new URLSearchParams(location.search).get('status') ?? 'all';
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleStatusChange = (event) => {
    history.push(`/?status=${event.target.value}`);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const characterList = await rickAndMortyFetch();
      setCharacters(characterList);
      setLoading(false);
    }
    getCharacters();
  }, [location.search])
  return (
    <div>
      <h1>List of Rick and Morty Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <label htmlFor="status">Character Status</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value='all'>All</option>
            <option value='alive'>alive</option>
            <option value='dead'>dead</option>
            <option value='unknown'>unkown</option>
          </select>
          {characters.map((character) => (
            <article key={character.id}>
              <Link to={`/character${character.id}`}>
                <h3>{character.name}</h3>
              </Link>
              <p>{character.species}</p>
              <p>{character.status}</p>
            </article>
          ))}
        </section>
      )}

    </div>
  )
}
