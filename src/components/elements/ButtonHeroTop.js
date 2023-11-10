import React from "react";

export default function ButtonHeroTop({ children, theme }) {
  switch (theme) {
    case "top-connexion":
      return (
        <div>
          <button
            className="text-white px-4 sm:px-10 py-2 uppercase rounded-md text-sm
           bg-mauve_primary mr-4 tracking-widest"
          >
            {children}
          </button>
        </div>
      );

    case "top-inscription":
      return (
        <div>
          <button
            className="text-mauve_primary px-10 py-2 uppercase rounded-md text-sm
             bg-gris_primary mr-4 tracking-widest hidden sm:block"
          >
            {children}
          </button>
        </div>
      );

    case "container-connexion":
      return (
        <div>
          <button
            className="text-white px-16 py-4 text-2xl rounded-2xl uppercase
           text-xl bg-mauve_primary "
          >
            {children}
          </button>
        </div>
      );
    default:
      return (
        <div>
          <button className="text-white px-10 py-2 uppercase text-xs bg-mauve_primary mr-4">
            {children}
          </button>
        </div>
      );
  }
}
