import React from "react";
import Logo from "../../../components/elements/marketing/Logo";
import { useRef, useContext } from "react";
import { UserContext } from "../Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function SignIn() {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const inputs = useRef([]);
  const addInputs = (elements) => {
    if (elements && !inputs.current.includes(elements)) {
      inputs.current.push(elements);
    }
  };

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );

      //tester le reset pour savoir s'il est utile ici ou pas
      formRef.current.reset();

      //console.log(cred);
      toast.success("Connexion reussi");
      console.log("connexion reuissi vous etes sur votre dashboard");
      navigate("/dashboard");
    } catch {
      toast.error("email et/ou mot de pass incorrect !");
      console.log("connexion non reuissi");
    }
  };

  return (
    <div className="bg-bg_page_acceuil ">
      <div
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto
         md:h-screen lg:py-0"
      >
        <div className="mb-6">
          <Logo logo="logo-principal" />
        </div>
        <div
          className="w-full bg-white rounded-lg shadow dark:border md:mt-0
          sm:max-w-md xl:p-0"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight">
              Se Connecter
            </h1>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Votre Email
                </label>
                <input
                  ref={addInputs}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900
                             sm:text-sm rounded-lg focus:ring-primary-600 
                             focus:border-primary-600 block w-full p-2.5  "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium
                       text-gray-900 dark:text-white"
                >
                  Mot De Passe
                </label>
                <input
                  ref={addInputs}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="mot de passe"
                  className="bg-gray-50 border border-gray-300 text-gray-900
                            sm:text-sm rounded-lg focus:ring-primary-600
                            focus:border-primary-600 block w-full p-2.5  "
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded
                       bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  className="text-sm font-medium text-primary-600
                       hover:underline "
                >
                  Mot de passe oublié?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-mauve_primary
                    focus:ring-4 focus:outline-none focus:ring-primary-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Vous n'avez pas encore de compte?{" "}
                <Link
                  to="/inscription"
                  class="font-medium text-primary-600 hover:underline"
                >
                  S'inscrire
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
