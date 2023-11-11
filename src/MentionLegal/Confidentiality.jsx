import React from "react";
import Construction from "../media/svg/page-en-construction.svg";
import { Link } from "react-router-dom";

export default function Confidentiality() {
  return (
    <div className="">
      <div className="mt-[5rem]">
        <h1 className="font-bold text-center text-4xl">Page en construction</h1>
        <img
          style={{ width: "500px", margin: "auto", marginTop: "2rem" }}
          src={Construction}
          alt="page en construction"
        />
        <div className="flex justify-center">
          <Link to="/">
            <button
              class="mt-8 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm
               font-semibold text-white shadow-sm hover:bg-indigo-500 
               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-indigo-600"
            >
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
