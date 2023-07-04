import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/netflix-clone/")}
          className="nav__logo"
          src="/netflix-clone/imgs/netflixlogo1.png"
          alt=""
        />

        <img
          onClick={() => navigate("/netflix-clone/profile")}
          className="nav__avatar"
          src="/netflix-clone/imgs/netflixavatar.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Nav;
