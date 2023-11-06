import React, { useState, useEffect } from "react";
import TheMovieDb from "../../API/TheMovieDb";
import TodayTV from "./TodayTV";
import Blur from "../../../../../components/elements/blur/Blur";

export default function BrodcastToday() {
  const [brodcast, setBrodcast] = useState([]);

  useEffect(() => {
    const fetchBrodcastToday = async () => {
      const { data } = await TheMovieDb.get("tv/airing_today");
      setBrodcast(data.results);
    };

    fetchBrodcastToday();
  }, []);
  return (
    <div className="relative">
      <div className="flex pb-5 px-5 pl-0 overflow-y-auto ">
        {brodcast.map((serie, index) => {
          return <TodayTV key={index} serie={serie} />;
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
}
