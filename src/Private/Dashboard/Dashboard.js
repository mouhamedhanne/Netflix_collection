import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/elements/marketing/Logo";
import FooterDasboard from "./Contents/footer/FooterDasboard";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      Navigate("");
    } catch {
      //
    }
  };

  return (
    <div>
      <div class="min-h-full">
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <Logo logo="logo-dashboard" />
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    {/**Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link
                      to="/dashboard"
                      class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Films
                    </Link>

                    <Link
                      to="/dashboard/Series-Tv"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white
                    rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Series / Tv
                    </Link>

                    <Link
                      to="/dashboard/mes-favoris"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white
                     rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Mes Favoris
                    </Link>
                    {/** */}
                    <form
                      action="#"
                      method="GET"
                      class="hidden md:block md:pl-2"
                    >
                      <label for="topbar-search" class="sr-only">
                        Search
                      </label>
                      <div class="relative md:w-64 md:w-52">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="topbar-search"
                          class="bg-gray-50 border outline-none text-gray-900 text-sm
                          rounded-lg   block w-full pl-10 p-1.5"
                          placeholder="Search"
                        />
                      </div>
                    </form>

                    {/** */}
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                  {/**<!-- Profile dropdown --> */}
                  <div>
                    <button
                      onClick={logOut}
                      type="button"
                      className="text-white relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>{" "}
                      Déconnexion
                    </button>
                  </div>

                  <div class="relative ml-3">
                    {/**<!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
                  </div>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                {/**<!-- Mobile menu button --> */}
                <button
                  onClick={toggleMenu}
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/** <!-- Mobile menu, show/hide based on menu state. --> */}
          {menuOpen && (
            <div class="md:hidden" id="mobile-menu">
              <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {/** <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link
                  to="/dashboard"
                  className="bg-gray-900 text-white block rounded-md
              px-3 py-2 text-base font-medium"
                >
                  {" "}
                  Films
                </Link>

                <Link
                  to="/dashboard/Series-Tv"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
              block rounded-md px-3 py-2 text-base font-medium"
                >
                  Series / TV
                </Link>

                <Link
                  to="/dashboard/mes-favoris"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
              block rounded-md px-3 py-2 text-base font-medium"
                >
                  Mes Favoris
                </Link>
              </div>
              <div class="border-t border-gray-700 pb-3 pt-4">
                <div class="mt-3 space-y-1 px-2">
                  <button
                    onClick={logOut}
                    className="block rounded-md px-4 py-2 text-base font-medium
                  text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Déconnexion
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        <header class="bg-white shadow">
          <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div>
              <Outlet />
            </div>
          </div>
          <FooterDasboard />
        </main>
      </div>
    </div>
  );
}
