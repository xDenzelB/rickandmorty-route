import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { rickAndMortyFetch } from "../services/fetch-utils"

export default function CharacterList() {
  const history = useHistory();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = rickAndMortyFetch();
    setCharacters(fetchCharacters);
    setLoading(false);
  }, [])
  return (
    <div>

    </div>
  )
}
