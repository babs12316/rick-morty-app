import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import './SpeciesFilter.css';
const SpeciesFilter = (props) => {
  const [species, setSpecies] = useState(null);

  const handleChange = (e) => {
    setSpecies(e.target.value);
  };
  return ( 
      <div className="row">
      <div className="col-sm-12">
      <select onChange={handleChange}>
        <option value="">Select species</option>
        <option value="">All species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <Pagination
        characters={props.characters}
        selectedSpecies={species}
      ></Pagination>
    </div>
    </div>
  );
};

export default SpeciesFilter;
