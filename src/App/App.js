import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CharacterList from "../Components/CharacterList/CharacterList";
import TopNav from "../Components/Layout/TopNav/TopNav";
import BottomNav from "../Components/Layout/BottomNav/BottomNav";
function App() {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <div className="App container">
        <h2>Rick Morty App</h2>
        <CharacterList></CharacterList>
      </div>
      <BottomNav></BottomNav>
    </React.Fragment>
  );
}

export default App;
