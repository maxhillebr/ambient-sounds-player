import React, { useEffect, useState } from "react";

const Test = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    // Fetch music data from the JSON file
    fetch("/musicData.json")
      .then((response) => response.json())
      .then((data) => setMusicList(data.musicList))
      .catch((error) => console.error("Error fetching music data:", error));
  }, []);

  return (
    <div>
      <h2>Music List</h2>
      <ul>
        {musicList.map((music) => (
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
