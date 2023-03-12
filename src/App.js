import React, { useState } from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import GameDesc from "./Components/GameDesc";
import GenreView from "./Components/GenreView";
import GamesByPlatform from "./Components/GamesByPlatform";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setInput(event.target.value);
      fetch(
        `https://api.rawg.io/api/games?key=fe583b24bc4c4cf3ad182e6900138e89&search=${input}`
      )
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results);
        });
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              results={results}
              input={input}
              handleInput={handleInput}
              handleKeyDown={handleKeyDown}
            />
          }
        />
        <Route path="/:id" element={<GameDesc />} />
        <Route path="/genres/:id" element={<GenreView />} />
        <Route path="/games_by_platform/:id" element={<GamesByPlatform />} />
      </Routes>
    </div>
  );
}

export default App;
