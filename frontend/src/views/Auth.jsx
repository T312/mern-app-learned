import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
// import WaveImage from "../assets/wave.png";
import BgImage from "../assets/bg.svg";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  let body;

  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info"></Spinner>
      </div>
    );
  } else if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else
    body = (
      <>
        {authRoute === "login" && <Login />}
        {authRoute === "register" && <Register />}
      </>
    );
  return (
    <>
      <img src="" className="wave" alt="" srcSet="" />
      <div className="login__container">
        <div className="img">
          <img src={BgImage} />
        </div>
        <div className="login-content">{body}</div>
      </div>
    </>
  );
};

export default Auth;
