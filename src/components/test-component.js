import React, { useEffect, useState } from "react";

const Test = () => {
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

  return (
    <div>
      <h2>Music List</h2>
      <ul>
        {musicList.map((music) => (
          <li key={music.id}>
            <p>{music.musicName}</p>
            {/* Use the full path from the JSON file */}
            <audio controls loop>
              <source src={music.path} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button onClick={() => handleAddToList(music)}>Add to List</button>
          </li>
        ))}
      </ul>

      <h2>Personal List</h2>
      <ul>
        {personalList.map((music) => (
          <li key={music.id}>
            <p>{music.musicName}</p>
            <audio controls loop>
              <source src={music.path} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
