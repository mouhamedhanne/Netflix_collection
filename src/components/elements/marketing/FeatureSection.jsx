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
            Découvrez comment NetflixCollection simplifie la gestion de votre
            collection de films et crée une expérience de divertissement
            inégalée. Préparez-vous à organiser, explorer et apprécier votre
            collection Netflix comme jamais auparavant.
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
                <h3 className="text-xl"> Gestion de Collection Simplifiée</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                NetflixCollection vous permet de créer et de gérer facilement
                votre propre collection de films et d'émissions de télévision
                Netflix. Suivez les films que vous avez vus, ceux que vous
                prévoyez de regarder et ceux que vous avez adorés.
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
                <h3 className="text-xl">Personnalisation Avancée</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Ajoutez des détails complets pour chaque titre, y compris le
                titre, la description, l'affiche, la note, la date d'ajout, la
                catégorie, les acteurs. Créez des collections thématiques et
                personnalisez chaque détail.
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
                <h3 className="text-xl">Lien Direct vers Netflix</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Accédez rapidement à vos films préférés sur Netflix grâce à des
                liens directs vers la plateforme de streaming. Regardez-les en
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
                <h3 className="text-xl">
                  Évaluations et Commentaires Personnels
                </h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Donnez votre avis sur chaque film en attribuant une note et en
                ajoutant des critiques et des commentaires personnels.
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
                Triez et filtrez votre collection selon divers critères, y
                compris le genre, la note, l'année de sortie et plus encore
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
                <h3 className="text-xl">
                  {" "}
                  Évaluations et Commentaires Personnels
                </h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Donnez votre avis sur chaque film en attribuant une note et en
                ajoutant des critiques et des commentaires personnels.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
