import React, { useState, useEffect } from "react";

const GameStores = ({ gameId }) => {
  const [gameStores, setGameStores] = useState([]);
  const allStores = [
    "Steam",
    "Xbox Store",
    "PlayStation Store",
    "App Store",
    "GOG",
    "Nintendo Store",
    "Xbox 360 Store",
    "Google Play",
    "itch.io",
    "",
    "Epic Games",
  ];

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${gameId}/stores?key=4bc0eac8b3e74a84a29fa89b0d4181a8`
    )
      .then((response) => response.json())
      .then((data) => {
        setGameStores(data.results);
      });
  }, [gameId]);

  return (
    <div>
      {gameStores.length === 0 ? <div></div> : <h4>Buy the Game</h4>}
      {gameStores.map((gameStore) => {
        return (
          <div key={gameStore.id}>
            <a href={gameStore.url} target="_blank" rel="noreferrer">
              Buy at {allStores[gameStore.store_id - 1]}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default GameStores;
