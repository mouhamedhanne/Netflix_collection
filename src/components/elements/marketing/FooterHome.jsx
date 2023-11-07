import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function FooterHome() {
  return (
    <>
      <footer className="p-4 bg-white sm:p-6 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex items-center">
            <Logo logo="logo-footer" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2>
              <ul className="text-gray-600 ">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Insccription
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:underline">
                    Demonstration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Suivez Nous
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="" className="hover:underline ">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:underline">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-600">
                <li className="mb-4">
                  <Link to="" class="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo logo="logo-footer" />
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link>Powered by Mouhamed Hanne</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
