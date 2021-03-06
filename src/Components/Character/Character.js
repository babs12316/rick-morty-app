import React from "react";
import PropTypes from 'prop-types';
import "./Character.css";
const Character = ({ name, image, species, status, gender, created }) => {
  return (
    <div className="row listItem">
      <div className="col-xs-12 col-sm-3 col-md-3 col-lg-4">
        <img src={image} alt="characterimage"></img>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-9 col-lg-3">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th scope="row">Species</th>
              <td>{species}</td>
            </tr>
            <tr>
              <th scope="row">Status</th>
              <td>{status}</td>
            </tr>
            <tr>
              <th scope="row">Gender</th>
              <td>{gender}</td>
            </tr>
            <tr>
              <th scope="row">Created Date</th>
              <td>{created}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(Character);

Character.propTypes = {
  name: PropTypes.string,
  image:PropTypes.string,
  species:PropTypes.string,
   status:PropTypes.string,
  gender:PropTypes.string,
   created:PropTypes.any
};