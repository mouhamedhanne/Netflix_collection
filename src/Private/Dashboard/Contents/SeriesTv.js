import React from "react";
import SeriesPopular from "./movie/SeriesPopular/SeriesPopular";
import BrodcastToday from "./movie/broadcast-today/BrodcastToday";
import SeriesBetterRate from "./movie/seriesBetterRAte/SeriesBetterRate";

export default function SeriesTv() {
  return (
    <div>
      <div className="flex">
        <h1 className="font-semibold text-2xl">Liste des collections</h1>
      </div>
      <SeriesPopular />
      <BrodcastToday />
      <SeriesBetterRate />
    </div>
  );
}
