import React from "react";
import MoviePopular from "./movie/MoviePopular";

export default function MyCollection() {
  return (
    <div>
      <div className="flex">
        <h1 className="font-semibold text-2xl">Liste des collections</h1>
      </div>
      <MoviePopular />
    </div>
  );
}
