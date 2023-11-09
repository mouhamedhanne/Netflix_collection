import React from "react";
import MoviePopular from "../movie/MoviePopular";
import BetterRating from "../movie/betterRating/BetterRAting";
import TendanceAll from "../movie/tendances/TendanceAll";
import Upcoming from "../movie/upcoming/Upcoming";

export default function HomepageDash() {
  return (
    <div className="relative ">
      <div className="">
        <div>
          <h1 className="pl-6 pb-4 font-semibold text-2xl">
            Les Films les Plus Populaires
          </h1>
          <MoviePopular />
        </div>

        <div className="bg-bg_page_acceuil pt-6 mb-24">
          <h1 className="text-white text-2xl pl-6 font-semibold pb-4">
            Top Films Notés
          </h1>
          <BetterRating />
        </div>

        <div className="mb-16">
          <h1 className="font-semibold text-2xl pl-6 pb-4">
            Au Coeur des Tendances
          </h1>
          <TendanceAll />
        </div>

        <div>
          <h1 className="font-semibold text-2xl pl-6 pb-4 ">
            À l'Affiche Bientôt
          </h1>
          <Upcoming />
        </div>
      </div>
    </div>
  );
}
