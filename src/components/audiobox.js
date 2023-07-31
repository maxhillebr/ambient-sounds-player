import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import AudioPlayer from "./audio-1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css/audiobox.css";

const Audiobox = () => {
  const getAudioPlayer = document.getElementById("add-audio-player");

  const handlePlayClick = () => {
    const implementAudioPlayer = createRoot(getAudioPlayer);
    implementAudioPlayer.render(<AudioPlayer />);
  };

  return (
    <>
      <div className="audiobox-container-1">
        <div>Name Placeholder</div>
        <div id="play1" onClick={handlePlayClick}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <div className="audiobox-container-2">
        <div>Name Placeholder</div>
        <div id="play2">
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>

      <div className="audiobox-container-3">
        <div id="play3">Name Placeholder</div>
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
