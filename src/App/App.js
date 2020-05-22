import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterList from '../Components/CharacterList/CharacterList';

function App() {
  return (
    <div className="App container">
      <h2>Rick Morty App</h2>
    <CharacterList></CharacterList>
    </div>
  );
}

export default App;
