import React from "react";

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            className="mt-2 text-3xl font-extrabold tracking-tigh
          t text-mauve_primary sm:text-4xl"
          >
            Pourquoi Nous Choisir
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez comment NetflixCollection rend votre expérience
            cinématographique plus enrichissante que jamais. Préparez-vous à
            explorer, découvrir et savourer une sélection de films et de séries
            TV inégalée.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none
           lg:grid-cols-2 lg:gap-y-16"
          >
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center
                 justify-center rounded-lg bg-mauve_primary"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                </div>
                <h3 className="text-xl">Guide</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                NetflixCollection vous guide dans une aventure cinématographique
                sans fin. Explorez les films et les séries TV les plus en vogue,
                les dernières sorties et les recommandations personnalisées.
                Trouvez votre prochain coup de cœur en un instant.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute left-0 top-0 flex h-10 w-10 items-center
                 justify-center rounded-lg bg-mauve_primary"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                </div>
                <h3 className="text-xl">Accès Facile à Vos Films Favoris</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Accédez rapidement à vos films et séries TV préférés que vous
                avez marqués comme favoris. Profitez de vos contenus favoris en
                un seul clic.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute left-0 top-0 flex h-10 w-10 items-center
                 justify-center rounded-lg bg-mauve_primary"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                </div>
                <h3 className="text-xl">Donnez Vie à Votre Avis</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Exprimez votre opinion en attribuant des notes et en ajoutant
                des critiques et des commentaires personnels pour chaque film.
                Partagez vos découvertes avec d'autres amateurs de cinéma.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute left-0 top-0 flex h-10 w-10 items-center
                 justify-center rounded-lg bg-mauve_primary"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                </div>
                <h3 className="text-xl">Filtrage et Tri Intelligents</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Explorez votre univers cinématographique en filtrant et triant
                vos titres en fonction de critères tels que le genre, la note,
                l'année de sortie, et bien plus encore.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
