import React from "react";
import Logo from "../../../components/elements/marketing/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../Auth/AuthContext";

export default function SignUp() {
  const { signUp } = useContext(UserContext);
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

    //Validation des inputs
    if (inputs.current[1] && inputs.current[2]) {
      const valuePassword = inputs.current[1].value;
      const valueConfirmPassword = inputs.current[2].value;

      if (valuePassword.length < 6 || valueConfirmPassword.length < 6) {
        //setValidation("6 carateres min");
        toast.error("6 caracteres min");
      } else if (valuePassword !== valueConfirmPassword) {
        toast.error("Les mots de passe ne correspondent pas");
      }
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );

      formRef.current.reset();
      //console.log(cred);
      toast.success("Inscription reussi");
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        toast.error("Adresse email invalide");
      }
      if (err.code === "auth/email-already-in-use") {
        toast.error("Cette adresse email est deja utiliser !");
      }
    }
  };

  return (
    <div className="bg-bg_page_acceuil ">
      <div
        className="flex flex-col items-center justify-center px-6 py-8
       mx-auto md:h-screen lg:py-0"
      >
        <div className="mb-6">
          <Logo logo="logo-principal" />
        </div>
        <div
          className="w-full bg-white rounded-lg shadow dark:border
         md:mt-0 sm:max-w-md xl:p-0 "
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              className="text-xl font-bold leading-tight tracking-tight
             text-gray-900 md:text-2xl "
            >
              Créer Un Compte
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
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Votre Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={addInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900
                   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                    block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Mot De Passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={addInputs}
                  placeholder="mot de passe"
                  className="bg-gray-50 border border-gray-300 text-gray-900
                   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                    block w-full p-2.5 "
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirmer Votre Mot De Passe
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  ref={addInputs}
                  placeholder="confirmer Mot De Passe"
                  className="bg-gray-50 border border-gray-300 text-gray-900
                   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                    block w-full p-2.5 "
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50
                     focus:ring-3 focus:ring-primary-300 "
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    J'accepte{" "}
                    <Link className="font-medium text-primary-600 hover:underline">
                      {" "}
                      Termes et conditions
                    </Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-mauve_primary
                 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium
                  rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Créer Un Compte
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Vous avez déjà un compte?{" "}
                <Link
                  to="/connexion"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Se Connecter
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
