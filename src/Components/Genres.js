import React, { useState, useEffect } from "react";
import GenreCard from "./GenreCard";
import "./Genres.css";

const Genres = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=fe583b24bc4c4cf3ad182e6900138e89`)
      .then((response) => response.json())
      .then((data) => {
        setGenre(data.results);
      });
  }, []);

  return (
    <div>
      <h2>Browse by Genre</h2>
      <div className="Genres">
        {genre.map((singleGenre) => {
          return (
            <div key={singleGenre.id}>
              <GenreCard name={singleGenre.name} slug={singleGenre.slug} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Genres;
