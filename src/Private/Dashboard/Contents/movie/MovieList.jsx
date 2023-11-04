import React, { useEffect, useState } from "react";
import TheMovieDb from "../API/TheMovieDb";
import MovieCard from "./MovieCard";
import Blur from "../../../../components/elements/blur/Blur";

export default function MovieList() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await TheMovieDb.get("movie/popular");
      setPopularMovie(data.results);
    };

    fetchMovie();
  }, []);
  return (
    <div>
      <div className="flex pb-5 px-5 pl-0 overflow-y-auto ">
        {popularMovie.map((popular, index) => {
          return <MovieCard key={index} popular={popular} />;
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
}
