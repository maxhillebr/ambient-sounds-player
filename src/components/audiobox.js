import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css/audiobox.css";

const Audiobox = () => {
  return (
    <>
      <div className="audiobox-container">
        <div>Name Placeholder</div>
        <div>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <div className="audiobox-container">
        <div>Name Placeholder</div>
        <div>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>

      <div className="audiobox-container">
        <div>Name Placeholder</div>
        <div>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </>
  );
};

export default Audiobox;
