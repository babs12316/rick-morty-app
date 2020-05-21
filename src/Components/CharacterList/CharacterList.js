import React, { useState, useEffect } from "react";
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
  });

  return (
    <div className="row list">
      {characters.map((character) => (
        <div key={character.id} className="col-sm-12 listItem">
          <img src={character.image} alt="characterimage"></img>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Name</th><td>{character.name}</td>
              </tr>
              <tr>
              <th scope="row">Species</th><td>{character.species}</td>
              </tr>
              <tr>
                <th scope="row">Status</th><td>{character.status}</td>
              </tr>
              <tr>
                <th scope="row">Gender</th><td>{character.gender}</td>
              </tr>
              <tr>
                <th scope="row">Created Date</th><td>{character.created}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
