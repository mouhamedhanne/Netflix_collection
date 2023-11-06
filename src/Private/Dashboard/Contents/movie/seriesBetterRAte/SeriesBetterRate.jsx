import React, { useState, useEffect } from "react";
import TheMovieDb from "../../API/TheMovieDb";
import SeriesBetterRateCard from "./SeriesBetterRateCard";
import Blur from "../../../../../components/elements/blur/Blur";

export default function SeriesBetterRate() {
  const [seriesRating, setSeriesRating] = useState([]);

  useEffect(() => {
    const fetchSeriesRating = async () => {
      const { data } = await TheMovieDb.get("tv/top_rated"); //
      setSeriesRating(data.results);
    };

    fetchSeriesRating();
  }, []);
  return (
    <div className="relative">
      <div className="flex pb-5 px-5 pl-0 overflow-y-auto ">
        {seriesRating.map((serie, index) => {
          return <SeriesBetterRateCard key={index} serie={serie} />;
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
}
