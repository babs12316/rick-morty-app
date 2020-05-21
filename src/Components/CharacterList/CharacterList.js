import React,{useState,useEffect} from 'react';

const CharacterList = () => {
    const [characters,setCharacters]=useState([]);
    useEffect(() => {
         const fetchData=async()=> {
          let apiUrl = "https://rickandmortyapi.com/api/character/?name=";
          const res = await fetch(apiUrl);
          const data = await res.json();
          setCharacters(data.results.map(character => character));
       }
         fetchData();
      });
    
    return ( 
        <div className="Cards">
      {characters.map(character=> (
        <div key={character.id} className="Card">
          <img src={character.image} alt="characterimage"></img>
          <div className="Info">Species is <b>{character.name}</b></div>
          <div className="Info">Species is <b>{character.species}</b></div>
          <div className="Info">status is  <b>{character.status}</b></div>
          <div className="Info">Gender is  <b>{character.gender}</b></div>
          <div className="Info">Gender is  <b>{character.created}</b></div>
        </div>
        ))}
        
    </div>     );
}
 
export default CharacterList;