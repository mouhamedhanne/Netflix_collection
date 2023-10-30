import React from "react";
import { Link } from "react-router-dom";
import DasbordImage from "../../../media/images/dashbord-image.jpg";

export default function CtaSection() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src={DasbordImage}
          alt="dashboard presentation"
        />

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Découvrez NetflixCollection en Action.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Regardez notre vidéo de démonstration pour une visite guidée de
            NetflixCollection. Découvrez comment notre application révolutionne
            la gestion de votre collection de films et series sur Netflix. Voyez
            comment vous pouvez organiser, personnaliser et explorer votre
            propre salle de cinéma virtuelle en un clin d'œil. Préparez-vous à
            transformer votre expérience Netflix comme jamais auparavant.
          </p>
          <div className="flex items-center">
            <Link to="/inscription">
              <button
                className="inline-flex items-center text-white bg-mauve_primary
          hover:bg-primary-800  font-medium
           rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                Commencer
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
            <Link to="/demonstration">
              <button
                className="inline-flex items-center justify-center ml-6 px-4 py-2.5 text-base
           font-medium text-center text-gray-900 border border-gray-300 rounded-lg
            hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
              >
                <svg
                  class="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
