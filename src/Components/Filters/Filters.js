import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import PropTypes from 'prop-types';
import "./Filters.css";
const Filters = ({characters}) => {
  const [species, setSpecies] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleChange = (e) => {
    setSpecies(e.target.value);
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="row filters">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <label>Select species</label>
          <br />
          <select onChange={handleChange}>
            <option value="">All species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2 dates">
          <label>Start Date</label>
          <br />
          <input type="date" onChange={handleStartDateChange}></input>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2 dates">
          <label>End Date</label>
          <br />
          <input type="date" onChange={handleEndDateChange}></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Pagination
            characters={characters}
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

Filters.propTypes = {
characters:PropTypes.array
};