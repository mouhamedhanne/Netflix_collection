import React, { useEffect, useState } from "react";
import TheMovieDb from "../../API/TheMovieDb";
import BetterCard from "../betterRating/Index";
import Blur from "../../../../../components/elements/blur/Blur";

export default function Movie() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const dataMovie = async () => {
      const { data } = await TheMovieDb.get("movie/top_rated");
      setMovie(data.results);
    };

    dataMovie();
  }, []);

  return (
    <div className="relative">
      <div className="flex pb-5 px-5 pl-0 overflow-y-auto ">
        {movie.map((movie, index) => {
          return <BetterCard key={index} movie={movie} />;
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
}

//les mieux noter *
//movie/top_rated

//qui sortiront bientot *
//movie/upcoming *

//tendance *
//trending/movie/day

//tendance a la tele
//trending/tv/day

//un petit soucis avec les name
//tendance all
//trending/all/day

//serie tv populaire => le nom et la date methode change *
//tv/popular

// a la tele
//serie diffuser aujourdhui *
//tv/airing_today

//serie tv les mieux note *
//tv/top_rated

//movie/now_playing => alternative
