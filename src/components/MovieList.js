import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} value={movie} />
      ))}
    </div>
  );
}

export default MovieList;
