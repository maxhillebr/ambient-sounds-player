import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "../css/headernav.css";

const HeaderNav = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        <FontAwesomeIcon icon={faHeadphones} /> &nbsp; Max' Ambient Music
      </a>
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
