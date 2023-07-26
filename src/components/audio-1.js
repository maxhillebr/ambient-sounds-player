import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause } from "@fortawesome/free-solid-svg-icons";
import Afrobeat from "../audio/afrobeat-live-guitar-melody-marcory.wav";
import "../css/music-player.css";

const AudioPlayer = () => {
  const audioName = "Afrobeat";
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setShowDiv(false);
    } else {
      audioRef.current.play();
      audioRef.current.loop = true;
      setShowDiv(true);
    }
    setIsPlaying(!isPlaying);
  };

  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setShowDiv(false);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div>
      <h3>{audioName}</h3>
      <audio ref={audioRef} src={Afrobeat} />
      <div className="audioplayer-wrapper">
        <button onClick={handlePlayPause}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button onClick={restartAudio}>
          <FontAwesomeIcon icon={faStop} />
        </button>
        <label htmlFor="volume">Volume</label>
        <input
          name="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        {showDiv && <div className="custom-loader"></div>}
      </div>
    </div>
  );
};

export default AudioPlayer;
