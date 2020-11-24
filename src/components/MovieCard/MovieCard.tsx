import React from "react";
import "./MovieCard.css";

interface Element {
  image: string,
  title: string,
  overview: string
}

function MovieCard({image, title, overview}: Element): JSX.Element {
  const imageSrc = `https://image.tmdb.org/t/p/w500${image}`;
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={imageSrc} alt={title}/>
      </div>
      <div className="movie-data">
        <h1>{title}</h1>
        <div>{overview}</div>
      </div>
    </div>
  );
}

export default MovieCard;