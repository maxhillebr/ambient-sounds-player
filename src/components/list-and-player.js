import React, { useEffect, useState } from "react";
import "../css/list-and-player.css";

const ListAndPlayer = () => {
  const [musicList, setMusicList] = useState([]);
  const [personalList, setPersonalList] = useState([]);

  useEffect(() => {
    // Fetch music data from the JSON file
    fetch("/musicdata.json")
      .then((response) => response.json())
      .then((data) => setMusicList(data.musicList))
      .catch((error) => console.error("Error fetching music data:", error));
  }, []);

  const handleAddToList = (music) => {
    // Add the selected music to the personal list
    setPersonalList((prevList) => [...prevList, music]);
  };

  const handleRemove = (musicToRemove) => {
    // Filter out the music with the specified id from the personal list
    setPersonalList((prevList) =>
      prevList.filter((music) => music.id !== musicToRemove.id)
    );
  };

  return (
    <>
      <div className="audio box">
        <h2>Music List</h2>
        <ul>
          {musicList.map((music) => (
            <li key={music.id}>
              <h3>{music.musicName}</h3>
              {/* Use the full path from the JSON file */}
              <audio controls loop>
                <source src={music.path} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button onClick={() => handleAddToList(music)}>
                Add to List
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="audio-player box">
        <h2>Personal List</h2>
        <ul>
          {personalList.map((music) => (
            <li key={music.id}>
              <h3>{music.musicName}</h3>
              <audio controls loop>
                <source src={music.path} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button onClick={() => handleRemove(music)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListAndPlayer;
