import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./GenreView.css";

const GenreView = () => {
  const genreId = useParams().id;
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [genreGames, setGenreGames] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/genres/${genreId}?key=fe583b24bc4c4cf3ad182e6900138e89`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGenre(data.name);
        setDescription(data.description);
      });
  }, [genreId]);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=4bc0eac8b3e74a84a29fa89b0d4181a8&genres=${genreId}`
    )
      .then((respone) => respone.json())
      .then((data) => {
        setGenreGames(data.results);
      });
  }, [genreId]);

  return (
    <div>
      <div className="top">
        <h2>{genre}</h2>
        <Link to="/">
          <h2>Go Home</h2>
        </Link>
        <div className="description">
          {description.replace(/(<([^>]+)>)/gi, "").replace(/&#39;/gi, "'")}
        </div>
      </div>

      <div className="games-genre">
        {genreGames.map((genreGame) => {
          return (
            <div key={genreGame.id}>
              <Link to={`/${genreGame.slug}`}>
                <h3>{genreGame.name}</h3>
                <img src={genreGame.background_image} alt="game-gen-img" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreView;
