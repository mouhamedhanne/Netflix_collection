import React from "react";
import Construction from "../../../media/svg/page-en-construction.svg";

export default function MesFavoris() {
  return (
    <div className="h-[491px]">
      <h1 className="font-bold text-center text-4xl">Page en construction</h1>
      <img
        style={{ width: "500px", margin: "auto", marginTop: "2rem" }}
        src={Construction}
        alt="page en construction"
      />
    </div>
  );
}
