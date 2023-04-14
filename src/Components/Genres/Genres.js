import React, { useState, useEffect } from "react";
import GenreCard from "../GenreCard/GenreCard";
import "./Genres.css";

const Genres = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=4bc0eac8b3e74a84a29fa89b0d4181a8`)
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
