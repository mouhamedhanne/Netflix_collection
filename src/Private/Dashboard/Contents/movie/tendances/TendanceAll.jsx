import React, { useState, useEffect } from "react";
import TheMovieDb from "../../API/TheMovieDb";
import TendanceCard from "./TendanceCard";
import Blur from "../../../../../components/elements/blur/Blur";

export default function TendanceAll() {
  const [tendance, setTendance] = useState([]);

  useEffect(() => {
    const fetchTendance = async () => {
      const { data } = await TheMovieDb.get("trending/movie/day");
      setTendance(data.results);
    };

    fetchTendance();
  }, []);
  return (
    <div>
      <div className="flex pb-5 px-5 pl-0 overflow-y-auto ">
        {tendance.map((movie, index) => {
          return <TendanceCard key={index} movie={movie} />;
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
}
