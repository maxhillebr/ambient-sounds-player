import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "../css/headernav.css";

const HeaderNav = () => {
  return (
    <div className="header box">
      <div className="logo">
        {" "}
        <a href="#default" className="logo">
          <FontAwesomeIcon icon={faHeadphones} />
        </a>
      </div>

      <div className="header-right">
        <a className="active" href="#home">
          Home
        </a>
        <a hrefName="#contact">Contact</a>
        <a hrefName="#about">About</a>
      </div>
    </div>
  );
};

export default HeaderNav;
