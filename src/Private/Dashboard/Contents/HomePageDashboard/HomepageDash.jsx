import React from "react";
import MoviePopular from "../movie/MoviePopular";
import BetterRating from "../movie/betterRating/BetterRAting";
import TendanceAll from "../movie/tendances/TendanceAll";
import Upcoming from "../movie/upcoming/Upcoming";

export default function HomepageDash() {
  return (
    <div className="relative">
      <div className="flex"></div>
      <div className="">
        <div>
          <h1 className="pl-6 pb-4 font-semibold text-2xl">
            Les films les plus populaire
          </h1>
          <MoviePopular />
        </div>

        <div className="bg-bg_page_acceuil pt-6 mb-10">
          <h1 className="text-white text-2xl pl-6 font-semibold pb-4">
            Les mieux noter
          </h1>
          <BetterRating />
        </div>

        <div>
          <TendanceAll />
        </div>

        <div>
          <Upcoming />
        </div>
      </div>
    </div>
  );
}
