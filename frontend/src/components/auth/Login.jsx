import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Avatar from "../../assets/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [alert, setAlert] = useState(null);
  // let navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const loginData = await loginUser(data);
      if (!loginData.success) {
        setAlert({
          type: "danger",
          message: loginData.message,
        });
        setTimeout(() => {
          setAlert(null);
        }, 4000);
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
        <AlertMessage info={alert} />
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user"></i>
          </div>
          <div className="div">
            <h5>Username</h5>
            <input
              type="text"
              className="input"
              {...register("username", { required: true })}
              aria-invalid={errors.userName ? "true" : "false"}
            />
          </div>
          {errors.userName?.type === "required" && (
            <span className="error-message error-message-user" role="alert">
              First name is required
            </span>
          )}
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
              {...register("password", { required: " Password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
          </div>
          {errors.password && (
            <span className="error-message error-message-pass" role="alert">
              {errors.password?.message}
            </span>
          )}
        </div>

        <Link to="/register">Don't have a account?</Link>
        <input type="submit" className="btn" value="Login" />
      </form>
    </>
  );
};

export default Login;
