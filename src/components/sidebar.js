import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleHalfStroke,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar box">
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <br />
            User
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            <br />
            About
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleHalfStroke} />
            <br />
            Dark Mode
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
