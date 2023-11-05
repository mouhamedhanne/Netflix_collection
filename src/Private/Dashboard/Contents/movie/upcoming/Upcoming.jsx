import React, { useEffect, useState } from "react";
import TheMovieDb from "../../API/TheMovieDb";
import UpcomingCard from "./UpcomingCard";
import Blur from "../../../../../components/elements/blur/Blur";

export default function Upcoming() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data } = await TheMovieDb.get("movie/upcoming");
      setUpcoming(data.results);
    };

    fetchUpcoming();
  }, []);
  return (
    <div>
      <div className="flex pb-5 px-5 pl-0 overflow-y-auto ">
        {upcoming.map((movie, index) => {
          return <UpcomingCard key={index} movie={movie} />;
        })}
      </div>
      <div className="absolute top-0 right-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
}
