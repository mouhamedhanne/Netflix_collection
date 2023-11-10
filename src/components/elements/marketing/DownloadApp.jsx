import React from "react";
import IllustrationAppStore from "../../../media/images/app-store.png";
import IllustrationPlayStore from "../../../media/images/google-play.png";

export default function DownloadApp() {
  return (
    <section className="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm
           text-gray-700 bg-gray-100 rounded-full"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full font-bold text-green-600 px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">
            NetflixCollection sera bientôt disponible sur PlayStore et AppStore
            !
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h2
          className="mb-4 text-4xl font-bold tracking-tight leading-none
         text-gray-700  hidden sm:block "
        >
          Télécharger la version mobile
        </h2>

        <div
          className="flex  mt-12 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center
         sm:space-y-0 sm:space-x-4 "
        >
          <img
            style={{ width: "140px" }}
            src={IllustrationAppStore}
            alt="télécharger l'application sur appStore"
            className="hidden sm:block"
          />
          <img
            style={{ width: "140px" }}
            src={IllustrationPlayStore}
            alt="télécharger l'application sur playStore"
            className="hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
