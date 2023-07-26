import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon icon={faUser} />
            <br />
            About
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <br />
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
