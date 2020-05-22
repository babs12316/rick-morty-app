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
    <React.Fragment> 
      <div className="row">
      <div className="col-sm-6">
      <select onChange={handleChange}>
        <option value="">Select species</option>
        <option value="">All species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
   </div>
   <div className="col-sm-3 dates">
       <label>Start Date</label><br/>
      <input type="date" onChange={handleStartDateChange}></input>
      </div>
      <div className="col-sm-3 dates">
      <label>End Date</label><br/>
      <input type="date" onChange={handleEndDateChange}></input>
    </div> 
    </div>
    <div className="row">
      <div className="col-sm-12">
      <Pagination
        characters={props.characters}
        selectedSpecies={species}
        startDate={startDate}
        endDate={endDate}
      ></Pagination>
   
      </div> 
    </div>
    </React.Fragment>

  );
};

export default Filters;
