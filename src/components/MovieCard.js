import React from "react";

function MovieCard(props) {
  console.log("props: ",props)
  return (
    <div>
      <img style={{height:150,width:"auto"}} src={props.value.posterURL}/>
      <h1>{props.value.title}</h1>
      <div>{props.value.description}</div>
      <div>{props.value.rating}</div>
    </div>
  );
}

export default MovieCard;
