import React, { useState, useEffect } from "react";
import SpeciesFilter from "../SpeciesFilter/SpeciesFilter";
import "./CharacterList.css";
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let apiUrl = "https://rickandmortyapi.com/api/character/?name=";
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCharacters(data.results.map((character) => character));
    };
    fetchData();
  }, []);

  return (
    <div className="list">
      <SpeciesFilter characters={characters}></SpeciesFilter>
    </div>
  );
};

export default React.memo(CharacterList);
