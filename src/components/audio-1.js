import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause } from "@fortawesome/free-solid-svg-icons";
import Afrobeat from "../audio/afrobeat-live-guitar-melody-marcory.wav";
import "../css/music-player.css";

const AudioPlayer = () => {
  const audioName = "Afrobeat";
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <div>
      <h2>{audioName}</h2>
      <audio
        ref={audioRef}
        src={Afrobeat}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
      <div>
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
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <span>{`${Math.floor(currentTime)} / ${Math.floor(duration)}`}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
