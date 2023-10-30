import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SignUp from "./pages/Login/Inscription/SignUp";
import SignIn from "./pages/Login/Connexion/SignIn";
import Page404 from "./pages/page404/Page404";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./pages/Login/Auth/AuthContext";
import Dashboard from "./Private/Dashboard/Dashboard";
import MyCollection from "./Private/Dashboard/Contents/MyCollection";
import AddCollection from "./Private/Dashboard/Contents/AddCollection";
import PrivateRoute from "./Private/PrivateRoute";
import SupportContact from "./pages/SupportContact/SupportContact";
import Demonstration from "./pages/Demo/Demonstration";
import Homepage from "./Private/Dashboard/Contents/HomePageDashboard/HomepageDash";
import HomepageDash from "./Private/Dashboard/Contents/HomePageDashboard/HomepageDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/inscription",
    element: <SignUp />,
  },

  {
    path: "/connexion",
    element: <SignIn />,
  },

  {
    path: "/demonstration",
    element: <Demonstration />,
  },

  {
    path: "*",
    element: <Page404 />,
  },

  {
    path: "/support-contact",
    element: <SupportContact />,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <HomepageDash />,
      },

      {
        path: "/dashboard/mes-collections",
        element: <MyCollection />,
      },

      {
        path: "/dashboard/ajouter-une-collection",
        element: <AddCollection />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </UserContextProvider>
);

reportWebVitals();
