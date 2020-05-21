import React, { useState, useEffect } from "react";
import "./CharacterList.css";
import Pagination from '../Pagination/Pagination';
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
  },[]);

      

  return (
    <div className="row list">
        { characters&&
        <Pagination characters={characters}></Pagination>
          }
  </div>
  );
};

export default CharacterList;
