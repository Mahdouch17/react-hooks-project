import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

function MovieList({movies}) {
  return (
    <div>
      <div>
      
      </div>
      <Filter movies={movies}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} value={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
