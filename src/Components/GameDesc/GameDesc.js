import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GameStores from "../GameStores/GameStores";
import "./GameDesc.css";

const GameDesc = () => {
  const gameId = useParams().id;
  const [gameName, setGameName] = useState("");
  const [gameGenres, setGameGenres] = useState([]);
  const [gameImg1, setGameImg1] = useState("");
  const [gameImg2, setGameImg2] = useState("");
  const [gameDesc, setGameDesc] = useState("");
  const [gameDevs, setGameDevs] = useState([]);
  const [gamePubs, setGamePubs] = useState([]);
  const [gamePlats, setGamePlats] = useState([]);
  const [gameRat, setGameRat] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${gameId}?key=fe583b24bc4c4cf3ad182e6900138e89`
    )
      .then((response) => response.json())
      .then((data) => {
        setGameName(data.name);
        setGameGenres(data.genres);
        setGameImg1(data.background_image);
        setGameImg2(data.background_image_additional);
        setGameDesc(data.description);
        setGameDevs(data.developers);
        setGamePubs(data.publishers);
        setGamePlats(data.parent_platforms);
        setGameRat(data.rating);
      });
  }, [gameId]);

  return (
    <div className="GameDesc">
      <div className="headings">
        {gameRat === 0 ? <div></div> : <h2>Game Rating {gameRat}</h2>}
        <h1>{gameName}</h1>

        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>

      <div className="images">
        <img src={gameImg1} alt="gi_1" />
        <img src={gameImg2} alt="gi_2" />
      </div>

      <div className="description">
        {gameDesc
          .replace(/(<([^>]+)>)/gi, "")
          .replace(/&#39;/gi, "'")
          .replace(/&quot;/gi, '"')}
      </div>

      <div className="details">
        <div>
          <h4>Game Developers</h4>
          {gameDevs.map((gameDev) => {
            return <div key={gameDev.id}>{gameDev.name}</div>;
          })}
        </div>

        <div>
          {gamePubs.length === 0 ? <div></div> : <h4>Game Publishers</h4>}
          {gamePubs.map((gamePub) => {
            return <div key={gamePub.id}>{gamePub.name}</div>;
          })}
        </div>

        <div>
          {gameGenres.length === 0 ? <div></div> : <h4>Game Genres</h4>}
          {gameGenres.map((gameGenre) => {
            return (
              <div key={gameGenre.id}>
                <Link to={`/genres/${gameGenre.id}`}>
                  <div>{gameGenre.name}</div>
                </Link>
              </div>
            );
          })}
        </div>

        <div>
          <h4>Game Platforms</h4>
          {gamePlats.map((gamePlat) => {
            return (
              <div key={gamePlat.platform.id}>
                <Link to={`/games_by_platform/${gamePlat.platform.id}`}>
                  {gamePlat.platform.name}
                </Link>
              </div>
            );
          })}
        </div>

        <GameStores gameId={gameId} />
      </div>
    </div>
  );
};

export default GameDesc;
