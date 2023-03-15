import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GamePlatforms.css";

const GamePlatforms = () => {
  const [platforms, setPlatforms] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/platforms/lists/parents?key=fe583b24bc4c4cf3ad182e6900138e89"
    )
      .then((response) => response.json())
      .then((data) => {
        setPlatforms(data.results);
      });
  }, []);

  return (
    <div>
      <h2>Browse by Platform</h2>
      <div className="GamePlatforms">
        {platforms.map((platform) => {
          return (
            <div key={platform.id}>
              <Link to={`/games_by_platform/${platform.id}`}>
                <h3>{platform.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamePlatforms;
