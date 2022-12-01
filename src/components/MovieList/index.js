// src/components/MovieList.js

import { useState } from "react";
import MovieCard from "../MovieCard";

function MovieList(props) {
  const { movies } = props;
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
