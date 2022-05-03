import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacter = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacters(data);
      setLoading(false);
    };
    getCharacter();
  }, [])
  return (
    <div>
      <h2>Character Details</h2>
      <Link to='/'>Back to List</Link>
      {loading ? (
        <p>Loading character...</p>
      ) : (
        <article>
          <h2>{character.name}</h2>
          <p>{character.species}</p>
          <p>{character.status}</p>
          <img alt="Image" src={character.image} />
        </article>
      )}
    </div>
  )
}
