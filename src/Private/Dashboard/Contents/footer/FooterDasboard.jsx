import React from "react";
import Logo from "../../../../components/elements/marketing/Logo";
import { Link } from "react-router-dom";

export default function FooterDasboard() {
  return (
    <>
      <footer className="bg-bg_page_acceuil  shadow  ">
        <div
          className="w-full mx-auto max-w-screen-xl p-4 md:flex
         md:items-center md:justify-between"
        >
          <Logo logo="logo-footer-dashboard" />
          <ul
            className="flex flex-wrap items-center mt-3 text-sm
           font-medium text-white "
          >
            <li>
              <Link>Powered by Mouhamed Hanne</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
