import React, { useContext } from "react";
import { UserContext } from "../pages/Login/Auth/AuthContext";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}

/** <Outlet /> */
