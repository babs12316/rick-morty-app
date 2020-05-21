import React from 'react';
import './Character.css';
const Chracter = ({name,image,species,status,gender,created}) => {
 //   console.log(`i am in character ${JSON.stringify(image)}`)
    return (
        <div className="row listItem">
       <img src={image} alt="characterimage"></img>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Name</th><td>{name}</td>
            </tr>
            <tr>
            <th scope="row">Species</th><td>{species}</td>
            </tr>
            <tr>
              <th scope="row">Status</th><td>{status}</td>
            </tr>
            <tr>
              <th scope="row">Gender</th><td>{gender}</td>
            </tr>
            <tr>
              <th scope="row">Created Date</th><td>{created}</td>
            </tr>
          </tbody>
        </table>
      </div>

      );
}
 
export default Chracter;