import React from "react";
import GameView from "../GameView/GameView";
import Genres from "../Genres/Genres";
import GamePlatforms from "../GamePlatforms/GamePlatforms";
import { Oval } from "react-loader-spinner";
import "./Home.css";

const Home = ({ input, handleInput, handleKeyDown, results, searchTerm, loading }) => {
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
        {
          searchTerm && results.length === 0 && !loading && <h3>Game not found!</h3>
        }
        { loading ? 
        <div className="spinner">
          <Oval color="whitesmoke" 
          secondaryColor="white"
          />
        </div> : results.map((result) => {
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
