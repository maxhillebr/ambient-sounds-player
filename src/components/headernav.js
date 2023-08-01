import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css/headernav.css";

const HeaderNav = () => {
  return (
    <>
      <div className="header box">
        <div className="logo">
          <img src="/logo-ambient-sounds.png" alt="logo" width="238px" />
        </div>

        <div className="header-right">
          <div className="username">Max</div>
          <div className="profile-img">
            <img
              src="../images/profile-pic.jpg"
              alt="profile image"
              width="50px"
              height="auto"
            />
          </div>
          <div class="header-heart">
            <div class="heart-color">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
          <div>
            <strong>Logout</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
