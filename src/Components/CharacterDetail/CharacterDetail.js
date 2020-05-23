import React, { useState, useEffect } from "react";
import TopNav from '../Layout/TopNav/TopNav';
import BottomNav from '../Layout/BottomNav/BottomNav';
import './CharacterDetail.css';
const CharacterDetail = (props) => {
  const [gender, setGender] = useState(null);
  const [origin, setOrigin] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);

  const { params } = props.match;

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const apiUrl =
            "https://rickandmortyapi.com/api/character/" + params.id;
          const res = await fetch(apiUrl);
          const data = await res.json();
          setGender(data.gender);
          const originArray = Object.keys(data.origin).map(function (key) {
            return [data.origin[key]];
          });
          setOrigin(originArray);
          setEpisodes(data.episode);
        } catch (err) {
          setError(err.message);
        }
      };
      fetchData();
    }, // eslint-disable-next-line
    []
  );

  return (
    <React.Fragment>
      <TopNav></TopNav>
      <h2>Character Details</h2>
      {error && <div className="error">{error}</div>}
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Gender</th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th scope="row">Origin Name</th>
            <td>{origin[0]}</td>
          </tr>
          <tr>
            <th scope="row">Origin URL</th>
            <td>{origin[1]}</td>
          </tr>
          <tr>
            <th scope="row">Episodes</th>
            <td>
              {episodes.map((episode) => (
                <li key={episode}>{episode}</li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <BottomNav></BottomNav>
    </React.Fragment>
  );
};

export default CharacterDetail;
