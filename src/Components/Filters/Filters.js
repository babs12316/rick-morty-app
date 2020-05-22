import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import './Filters.css';
const Filters = (props) => {
  const [species, setSpecies] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleChange = (e) => {
    setSpecies(e.target.value);
  };
  const handleStartDateChange=(e)=>{
      setStartDate(e.target.value)
  }
  const handleEndDateChange=(e)=>{
    setEndDate(e.target.value)
}
  return ( 
      <div className="row">
      <div className="col-sm-12">
      <select onChange={handleChange}>
        <option value="">Select species</option>
        <option value="">All species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <input type="date" onChange={handleStartDateChange}></input>
      <input type="date" onChange={handleEndDateChange}></input>
      <Pagination
        characters={props.characters}
        selectedSpecies={species}
        startDate={startDate}
        endDate={endDate}
      ></Pagination>
    </div>
    </div>
  );
};

export default Filters;
