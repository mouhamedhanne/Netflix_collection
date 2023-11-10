import React from "react";

export default function Logo({ logo }) {
  switch (logo) {
    case "logo-principal":
      return (
        <div>
          <h1 className="m-5 text-[20px] sm:text-3xl text-red_primary font-extrabold underline ">
            NetflixCollection
          </h1>
        </div>
      );

    case "logo-dashboard":
      return (
        <div>
          <h1 className="m-5 text-xl text-red_primary font-extrabold underline ">
            NetflixCollection
          </h1>
        </div>
      );

    case "logo-footer-dashboard":
      return (
        <div>
          <h1 className="">
            <span className="text-sm text-white sm:text-center">© 2023</span>{" "}
            <span className="text-sm text-red_primary font-extrabold underline">
              NetflixCollection™
            </span>
            {"  "}
            <span className="text-sm text-white sm:text-center">
              . All Rights Reserved.
            </span>
          </h1>
        </div>
      );

    case "logo-footer":
      return (
        <div>
          <h1 className="">
            <span className="text-sm text-gray-600 sm:text-center">© 2023</span>{" "}
            <span className="text-sm text-red_primary font-extrabold underline">
              NetflixCollection™
            </span>
            {"  "}
            <span className="text-sm text-gray-600 sm:text-center">
              . All Rights Reserved.
            </span>
          </h1>
        </div>
      );

    default:
      return <h4>Logo</h4>;
  }
}

/**
 *  <h1 className="m-5 text-3xl text-red_primary font-extrabold underline ">
            NetflixCollection
          </h1>
 */
