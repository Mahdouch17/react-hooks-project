import React, { useState } from "react";

function AddMovie({ addMovie }) {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [posterURL, setposterURL] = useState("");
  //   const [rating, setRating] = useState("");

  //   const handleTitle = (e) => setTitle(e.target.value);
  //   const handleDescription = (e) => setDescription(e.target.value);
  //   const handlePoster = (e) => setposterURL(e.target.value);
  //   const handleRating = (e) => setRating(e.target.valueAsNumber);

  //   const addMovie = () => {
  //     setFilms([...films, { id: films.length, title, description, rating }]);
  //     setTitle("");
  //     setDescription("");
  //     setRating("");
  //   };
  const handleMovie = (e) => {
    e.persist();
    setMovie((prevMovie) => ({
      ...prevMovie,
      [e.target.name]: e.target.value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    let newMovie = {
      id: Math.floor(Math.random() * 1000),
      title: movie.title,
      description: movie.description,
      posterURL: movie.posterURL,
      rating: movie.rating,
    };
    addMovie(newMovie);
  };
  return (
    <div>
      <h1>Add a movie in the fields below : </h1>
      <form onSubmit={handlesubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={movie.title}
              onChange={handleMovie}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={movie.description}
              onChange={handleMovie}
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              name="posterURL"
              value={movie.posterURL}
              onChange={handleMovie}
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={movie.rating}
              onChange={handleMovie}
            />
          </label>
        </div>
        <div>
          <input type="submit" value={"Add"} />
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
