import React, { useEffect, useState } from "react";
import "../css/list-and-player.css";

const ListAndPlayer = () => {
  const [musicList, setMusicList] = useState([]);
  const [personalList, setPersonalList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    // Fetch music data from the JSON file
    if (selectedCategory === "Waves") {
      fetch("/musicdata.json")
        .then((response) => response.json())
        .then((data) => setMusicList(data.musicListWaves))
        .catch((error) => console.error("Error fetching music data:", error));
    } else if (selectedCategory === "Cafe") {
      fetch("/musicdata.json") // Update the URL to fetch the 'musiclistcafe' data
        .then((response) => response.json())
        .then((data) => setMusicList(data.musicListCafe)) // Use 'musiclistcafe' here
        .catch((error) => console.error("Error fetching music data:", error));
    } else if (selectedCategory === "Birds") {
      fetch("/musicdata.json") // Update the URL to fetch the 'musiclistcafe' data
        .then((response) => response.json())
        .then((data) => setMusicList(data.musicListBirds)) // Use 'musiclistcafe' here
        .catch((error) => console.error("Error fetching music data:", error));
    } else if (selectedCategory === "Guitar") {
      fetch("/musicdata.json") // Update the URL to fetch the 'musiclistcafe' data
        .then((response) => response.json())
        .then((data) => setMusicList(data.musicListGuitar)) // Use 'musiclistcafe' here
        .catch((error) => console.error("Error fetching music data:", error));
    }
  }, [selectedCategory]);

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
      {/* Choose Category */}
      <div className="category box">
        <div className="category-heading">
          <h2>Categories</h2>
        </div>
        <div className="c-items-container">
          <div className="c-item" onClick={() => setSelectedCategory("Waves")}>
            Waves
          </div>
          <div className="c-item" onClick={() => setSelectedCategory("Cafe")}>
            Cafe
          </div>
          <div className="c-item" onClick={() => setSelectedCategory("Birds")}>
            Birds
          </div>
          <div className="c-item" onClick={() => setSelectedCategory("Guitar")}>
            Guitar
          </div>
        </div>
        <div className="c-pagination">previous 1 2 3 next</div>
      </div>
      {/* Music List & Personal List  */}
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
