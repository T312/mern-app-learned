import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Avatar from "../../assets/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const loginData = await loginUser(data);
      if (loginData.success) {
        // navigate("/dashboard");
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Avatar} />
        <h2 className="title">Welcome</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user"></i>
          </div>
          <div className="div">
            <h5>Username</h5>
            <input type="text" className="input" {...register("username")} />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock"></i>
          </div>
          <div className="div">
            <h5>Password</h5>
            <input
              type="password"
              className="input"
              {...register("password")}
            />
          </div>
        </div>

        <Link to="/register">Don't have a account?</Link>
        <input type="submit" className="btn" value="Login" />
      </form>
    </>
  );
};

export default Login;
