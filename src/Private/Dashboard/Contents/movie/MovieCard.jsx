import React from "react";

export default function MovieCard({ popular }) {
  return (
    <div>
      <div className="flex flex-col pl-5 pr-0 gap-2">
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
            alt={popular.title}
            className=" w-40 h-56 shadow-sm rounded-md"
          />
          <div className="absolute bottom-[-1.2rem] left-2">circle</div>
          <div className="absolute top-3 right-[10px] ">pointiller</div>
        </div>

        <div className="flex flex-col w-40 pt-5 px-3">
          <h2 className="font-bold">{popular.title}</h2>
          <p className="font-normal text-slate-500">{popular.release_date}</p>
        </div>
      </div>
    </div>
  );
}
