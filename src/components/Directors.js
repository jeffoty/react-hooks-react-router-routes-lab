import React from "react";
import { directors } from "../data";

function Directors() {
  const ListOfDirectors = directors.map(newList=>{
  return (
    <div key={newList.name}>
    <h2>Name:{newList.name}</h2>
    <h4>Movies:</h4>
    <ul>
      {newList.movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  </div>
);
})

return (
  <div>
    <h1>Directors Page</h1>
    {ListOfDirectors}
  </div>
  );
}

export default Directors;
