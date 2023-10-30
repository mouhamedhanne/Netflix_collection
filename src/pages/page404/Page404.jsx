import React from "react";
import { Link } from "react-router-dom";
import Illustration404 from "../../media/svg/Illustration404.svg";

export default function Page404() {
  return (
    <div className="">
      <div class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class=" text-2xl font-semibold text-indigo-600">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page non trouvée
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-600">
            Désolé, nous n’avons pas trouvé la page que vous recherchez.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">
              <button
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm
               font-semibold text-white shadow-sm hover:bg-indigo-500 
               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-indigo-600"
              >
                Go back home
              </button>
            </Link>

            <Link to="support-contact">
              <button class="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>
        <img src={Illustration404} alt="" />
      </div>
    </div>
  );
}
