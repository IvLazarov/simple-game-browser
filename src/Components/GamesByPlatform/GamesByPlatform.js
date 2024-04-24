import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./GamesByPlatform.css";
import { Oval } from 'react-loader-spinner';

const GamesByPlatform = () => {
  const platformId = useParams().id;

  const [platformGames, setPlatformGames] = useState([]);
  const platformNames = [
    "PC",
    "Playstation",
    "Xbox",
    "iOS",
    "Apple Macintosh",
    "Linux",
    "Nintendo",
    "Android",
    "Atari",
    "Commodore / Amiga",
    "SEGA",
    "3DO",
    "Neo Geo",
    "Web",
  ];

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=4bc0eac8b3e74a84a29fa89b0d4181a8&parent_platforms=${platformId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPlatformGames(data.results);
      });
  }, [platformId]);

  return (
    <>
    {
        platformGames.length === 0 ? 
        <div className="loader">
          <Oval color="whitesmoke" secondaryColor="white" />
        </div>
        :
        <div>
      
      <div className="top">
        <h2>Games on {platformNames[platformId - 1]}</h2>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>

      <div className="games-genre">
        {platformGames.map((platformGame) => {
          return (
            <div key={platformGame.id}>
              <Link to={`/${platformGame.slug}`}>
                <h2>{platformGame.name}</h2>
                <img src={platformGame.background_image} alt="game_image" loading="lazy" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
      }
    </>
    
  );
};

export default GamesByPlatform;
