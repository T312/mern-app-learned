import React, { useContext, useEffect } from "react";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const NavBarMenu = () => {
  const [isActive, setActive] = useState(false);

  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  useEffect(() => {
    window.addEventListener("resize", function () {
      addRequiredClass();
    });

    function addRequiredClass() {
      if (window.innerWidth < 860) {
        document.body.classList.add("mobile");
      } else {
        document.body.classList.remove("mobile");
      }
    }

    window.onload = addRequiredClass;

    let hamburger = document.querySelector(".hamburger");
    let bars = document.querySelectorAll(".hamburger span");
    let isActive = false;
    hamburger.addEventListener("click", function () {
      setActive(!isActive);
      if (!isActive) {
        bars[0].style.transform = "rotate(45deg)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(-45deg)";
        isActive = true;
      } else {
        bars[0].style.transform = "rotate(0deg)";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "rotate(0deg)";
        isActive = false;
      }
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-container nav-wrapper">
          <div className="brand">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.5 10a2.5 2.5 0 1 1-5.001-.001A2.5 2.5 0 0 1 10.5 10zM16 4v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zm-3.5 6a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm6.715-4.914L17 6.562v7l2.215 1.477a.505.505 0 0 0 .785-.42V5.506a.505.505 0 0 0-.785-.42z" />
            </svg>
            <span>
              <strong>MERN LEARNING</strong>
            </span>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={isActive ? "nav-list open" : "nav-list"}>
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/q&a">Q&A</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Welcome {username}</Link>
            </li>
            <li>
              <button className="nav-btn-login" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBarMenu;
