import React from "react";
import GameView from "./GameView";
import Genres from "./Genres";
import GamePlatforms from "./GamePlatforms";
import "./Home.css";

const Home = ({ input, handleInput, handleKeyDown, results }) => {
  return (
    <div className="Home">
      <div className="searchStyle">
        <input
          type="text"
          value={input}
          onChange={handleInput}
          onKeyDownCapture={handleKeyDown}
          placeholder={"Search games..."}
        />
      </div>

      <div className="categoryStyle">
        <Genres />
        <GamePlatforms />
      </div>
      <div className="allgames">
        {results.map((result) => {
          return (
            <div key={result.id}>
              <GameView
                name={result.name}
                image={result.background_image}
                slug={result.slug}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
