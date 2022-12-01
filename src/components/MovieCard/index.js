// src/components/MovieCard.js

import React from "react";

function MovieCard(props) {
  const { movie } = props;

  //Ternario / Ternary -  condicion ? verdadero : falso
  //Truthy && - condicion && verdadero

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      {movie.hasOscars && (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1472/1472188.png"
          width={80}
          alt=""
        />
      )}
    </div>
  );
}

export default MovieCard;
