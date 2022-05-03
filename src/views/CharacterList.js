import { useState } from "react"
import { rickAndMortyFetch } from "../services/fetch-utils"

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div>

    </div>
  )
}
