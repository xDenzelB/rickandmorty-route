import { useEffect, useState } from "react";
import { singleCharacter } from "../services/fetch-utils";
import { Link } from 'react-router-dom';
export default function CharacterDetail() {
  const [character, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacter = async () => {
      const details = await singleCharacter();
      setCharacters(details);
      setLoading(false);
    };
    getCharacter();
  }, [])
  return (
    <div>CharacterDetail</div>
  )
}
