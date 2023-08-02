import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css/headernav.css";

const HeaderNav = () => {
  // Date and Time

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDate = currentDate.toLocaleDateString();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();

  return (
    <>
      {/* Header */}
      <div className="header box">
        <div className="logo">
          <img src="/logo-ambient-sounds.png" alt="logo" width="238px" />
        </div>
        <div className="header-middle">
          <div className="time">
            {currentHours}:{currentMinutes < 10 ? "0" : ""}
            {currentMinutes}
          </div>
          <div className="date">// {formattedDate}</div>
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
