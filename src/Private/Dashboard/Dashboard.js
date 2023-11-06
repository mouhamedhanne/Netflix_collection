import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/elements/marketing/Logo";

export default function Dashboard() {
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
                      to="/dashboard/ajouter-une-collection"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white
                     rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Nouvelle Collection
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
                  <button
                    type="button"
                    class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">View notifications</span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>

                  {/**<!-- Profile dropdown --> */}
                  <div class="relative ml-3">
                    <div>
                      <button
                        type="button"
                        class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">Open user menu</span>
                        <svg
                          class="w-6 h-6 text-white dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 19"
                        >
                          <path d="M7.324 9.917A2.479 2.479 0 0 1 7.99 7.7l.71-.71a2.484 2.484 0 0 1 2.222-.688 4.538 4.538 0 1 0-3.6 3.615h.002ZM7.99 18.3a2.5 2.5 0 0 1-.6-2.564A2.5 2.5 0 0 1 6 13.5v-1c.005-.544.19-1.072.526-1.5H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h7.687l-.697-.7ZM19.5 12h-1.12a4.441 4.441 0 0 0-.579-1.387l.8-.795a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.795.8A4.443 4.443 0 0 0 15 8.62V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.12c-.492.113-.96.309-1.387.579l-.795-.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.8.8c-.272.424-.47.891-.584 1.382H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.12c.113.492.309.96.579 1.387l-.795.795a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.8-.8c.424.272.892.47 1.382.584v1.12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.12c.492-.113.96-.309 1.387-.579l.795.8a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.8-.795c.273-.427.47-.898.584-1.392h1.12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM14 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                        </svg>
                      </button>
                    </div>

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
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>
                  {/**<!-- Menu open: "hidden", Menu closed: "block" --> */}
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
                  {/** <!-- Menu open: "block", Menu closed: "hidden" --> */}
                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/** <!-- Mobile menu, show/hide based on menu state. --> */}
          <div class="md:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {/** <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href="#"
                class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Mes Collections
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Nouvelle Collection
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Reports
              </a>
            </div>
            <div class="border-t border-gray-700 pb-3 pt-4">
              <div class="flex items-center px-5">
                <div class="flex-shrink-0">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium leading-none text-white">
                    Tom Cook
                  </div>
                  <div class="text-sm font-medium leading-none text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
              </div>
              <div class="mt-3 space-y-1 px-2">
                <a
                  href="#"
                  class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Settings
                </a>
                <a
                  href="#"
                  class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
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
            {/**<!-- Your content --> */}
          </div>
        </main>
      </div>
    </div>
  );
}
