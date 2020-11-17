import React from "react";
import "./MovieCard.css";

function MovieCard(props: any) {
  const imageSrc = `https://image.tmdb.org/t/p/w500${props.image}`;
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={imageSrc} alt={props.title}/>
      </div>
      <div className="movie-data">
        <h1>{props.title}</h1>
        <div>{props.overview}</div>
      </div>
    </div>
  );
}

export default MovieCard;