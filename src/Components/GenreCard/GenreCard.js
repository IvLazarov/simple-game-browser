import React from "react";
import { Link } from "react-router-dom";
import "./GenreCard.css";

const GenreCard = ({ name, slug }) => {
  return (
    <div className="GenreCard">
      <Link to={`/genres/${slug}`}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default GenreCard;
