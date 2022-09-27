import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Avatar from "../../assets/avatar.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);
  // let navigate = useNavigate();
  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setAlert({ type: "danger", message: "Password does not match." });
      setTimeout(() => {
        setAlert(null);
      }, 4000);
      return;
    }
    try {
      const registerData = await registerUser(data);
      if (!registerData.success) {
        setAlert({
          type: "danger",
          message: registerData.message,
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
            <input type="text" className="input" {...register("username")} />
          </div>
        </div>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user"></i>
          </div>
          <div className="div">
            <h5>Email</h5>
            <input type="email" className="input" {...register("email")} />
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
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock"></i>
          </div>
          <div className="div">
            <h5>Confirm Password</h5>
            <input
              type="password"
              className="input"
              {...register("confirmPassword")}
            />
          </div>
        </div>

        <Link to="/login">You have a account?</Link>
        <input type="submit" className="btn" value="Register" />
      </form>
    </>
  );
};

export default Register;
