import React, { useState, useEffect } from "react";
import Filters from "../Filters/Filters";
import "./CharacterList.css";
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://rickandmortyapi.com/api/character/";
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCharacters(data.results.map((character) => character));
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="list">
      {error && <div className="error">{error}</div>}
      <Filters characters={characters}></Filters>
    </div>
  );
};

export default React.memo(CharacterList);
