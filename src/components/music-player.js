import "../css/music-player.css";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause } from "@fortawesome/free-solid-svg-icons";
import sound from "../audio/afrobeat-live-guitar-melody-marcory.wav";

function MusicPlayer() {
  const [audio] = useState(new Audio(sound));
  const audioRef = useRef(null);

  useEffect(() => {
    // Make sure the audio element is available in the ref
    audioRef.current = audio;
  }, [audio]);

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      // audioRef.current.play();
    }
  };

  return (
    <div>
      <h1>Ambient Sound Player</h1>
      <button onClick={pause}>
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button onClick={play}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <button onClick={restartAudio}>
        <FontAwesomeIcon icon={faStop} />
      </button>
    </div>
  );
}

export default MusicPlayer;
