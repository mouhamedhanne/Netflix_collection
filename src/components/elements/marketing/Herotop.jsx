import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import ButtonHeroTop from "../../../components/elements/ButtonHeroTop";
import Illustration from "../../../media/svg/image-herotop.svg";

export default function Herotop() {
  return (
    <div className="pb-28">
      <div className="flex justify-between items-center">
        <Logo logo="logo-principal" />
        <div className="flex">
          <Link to="/connexion">
            <ButtonHeroTop theme="top-connexion">Connexion</ButtonHeroTop>
          </Link>
          <Link to="/inscription">
            <ButtonHeroTop theme="top-inscription">Rejoindre</ButtonHeroTop>
          </Link>
        </div>
      </div>

      <div className="w-ful mt-48 ">
        <div className="flex items-center ">
          <div className="">
            <h1 className="text-white font-semibold font-font_title_page text-5xl mb-4  ">
              Découvrez comment transformer votre expérience de divertissement
              en un voyage cinématographique sur mesure !
            </h1>
            <p className="text-white tracking-widest">
              NetflixCollection est bien plus qu'une simple application. <br />
              C'est votre accès à une expérience cinématographique sans
              pareille,
              <br /> où chaque film devient une pièce précieuse dans votre
              collection <br /> personnelle. Prêt à transformer votre expérience
              Netflix ? Rejoignez <br /> nous dès aujourd'hui et créez votre
              propre salle de cinéma virtuelle.
            </p>
          </div>
          <div className="">
            <img
              src={Illustration}
              alt="icon d'illustration"
              className="Illustration"
            />
          </div>
        </div>

        <div className="flex items-center justify-start mt-6">
          <Link to="/inscription">
            <ButtonHeroTop theme="container-connexion">Commencer</ButtonHeroTop>
          </Link>
        </div>
      </div>
    </div>
  );
}
