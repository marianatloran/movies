import React from "react";
import MovieCard from '../MovieCard/MovieCard';

interface ListObject {
  original_title: string,
  overview: string,
  poster_path: string
}

interface List {
  list: ListObject[];
}

function MoviesList({list}: List): JSX.Element {
 return (
  <div className="movie-list">
    { list.map((item: any, index: number) => <MovieCard key={index} title={item.original_title} overview={item.overview} image={item.poster_path}/> )}
  </div>
 );
}

export default MoviesList;