import React from "react";
import MovieCard from '../MovieCard/MovieCard';
import "./MoviesList.css";

function MoviesList(props: any) {
 return (
  <div className="movie-list">
    { props.list.map((item: any, index: number) => <MovieCard key={index} title={item.original_title} overview={item.overview} image={item.poster_path}/> )}
  </div>
 );
}

export default MoviesList;