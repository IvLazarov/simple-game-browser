import React from "react";
import { Link } from "react-router-dom";
import "./GameView.css";

const GameView = ({ name, image, slug }) => {
  return (
    <div className="GameView">
      <Link to={slug}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt="game-img" />
    </div>
  );
};

export default GameView;
