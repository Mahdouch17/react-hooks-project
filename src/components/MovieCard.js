import React from "react";

function MovieCard(props) {
  // console.log("props: ", props);
  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: 10,
        width: 600,
        margin: 15,
        backgroundColor: "#c1c6cf",
        padding: 10,
      }}
    >
      <img style={{ height: 150, width: "auto" }} src={props.value.posterURL} />
      <h1>{props.value.title}</h1>
      <div>{props.value.description}</div>
      <div>
        <strong>rating:</strong> {props.value.rating}%
      </div>
    </div>
  );
}
export default MovieCard;
