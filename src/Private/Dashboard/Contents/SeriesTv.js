import React from "react";
import SeriesPopular from "./movie/SeriesPopular/SeriesPopular";
import BrodcastToday from "./movie/broadcast-today/BrodcastToday";
import SeriesBetterRate from "./movie/seriesBetterRAte/SeriesBetterRate";

export default function SeriesTv() {
  return (
    <div>
      <div className="mb-16">
        <h1 className="font-semibold text-2xl pl-6 pb-4 text-mauve_primary">
          Séries TV du Moment
        </h1>
        <SeriesPopular />
      </div>

      <div className="mb-16">
        <h1 className="font-semibold text-2xl pl-6 pb-4 text-mauve_primary ">
          À l'Écran Aujourd'hui
        </h1>
        <BrodcastToday />
      </div>

      <div>
        <h1 className="font-semibold text-2xl pl-6 pb-4 text-mauve_primary ">
          Top Séries Notées
        </h1>
        <SeriesBetterRate />
      </div>
    </div>
  );
}
