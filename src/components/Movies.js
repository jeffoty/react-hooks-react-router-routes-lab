import React from "react";
import { movies } from "../data";

function Movies() {
  const ListOfMovies = movies.map(newMovieList =>{
    return(
      <div key={newMovieList.title}>
        <h2> Name: {newMovieList.title}</h2>
        <h3>Time: {newMovieList.time}</h3>
        <h4>Genres:</h4>
        <ul>
          {newMovieList.genres.map(genre => <li key= {genre}>{genre}</li>)}
        </ul>

      </div>
    )
  })

  return ( 
  <div>
    <h1>Movies Page</h1>
    {ListOfMovies}
  </div>
)}

export default Movies;
