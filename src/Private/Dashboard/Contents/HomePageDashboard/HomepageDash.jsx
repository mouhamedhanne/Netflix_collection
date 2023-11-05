import React from "react";
import MoviePopular from "../movie/MoviePopular";
import BetterRating from "../movie/betterRating/BetterRAting";
import TendanceAll from "../movie/tendances/TendanceAll";
import Upcoming from "../movie/upcoming/Upcoming";

export default function HomepageDash() {
  return (
    <div className="relative">
      <div className="flex">
        <h1 className="font-semibold text-2xl">Les films les plus populaire</h1>
      </div>
      <div className="">
        <MoviePopular />
        <BetterRating />
        <TendanceAll />
        <Upcoming />
      </div>
    </div>
  );
}
