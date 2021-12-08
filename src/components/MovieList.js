import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {props.moviesToDisplay.map((movie) => (
          <MovieCard key={movie.id} value={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
