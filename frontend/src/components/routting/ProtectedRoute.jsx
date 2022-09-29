import { Navigate, Outlet } from "react-router-dom";
import { React, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/Spinner";
import NavBarMenu from "../layout/NavBarMenu/NavBarMenu";
const ProtectedRoute = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  if (authLoading) {
    <div className="spinner-container">
      <Spinner animation="border" variant="info" />
    </div>;
  }
  return isAuthenticated ? (
    <>
      <NavBarMenu />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
