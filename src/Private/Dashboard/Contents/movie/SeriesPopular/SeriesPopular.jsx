import React, { useState, useEffect } from "react";
import TheMovieDb from "../../API/TheMovieDb";
import PopularSeriesCard from "./PopularSeriesCard";
import Blur from "../../../../../components/elements/blur/Blur";

export default function SeriesPopular() {
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    const fetchPopularSeries = async () => {
      const { data } = await TheMovieDb.get("tv/popular");
      setPopularSeries(data.results);
    };

    fetchPopularSeries();
  }, []);

  return (
    <div className="relative">
      <div className="flex pb-5 px-5 pl-0 overflow-y-auto ">
        {popularSeries.map((serie, index) => {
          return <PopularSeriesCard key={index} serie={serie} />;
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
}
