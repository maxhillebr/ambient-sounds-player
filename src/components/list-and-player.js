import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faWater,
  faDove,
  faGuitar,
} from "@fortawesome/free-solid-svg-icons";
import "../css/list-and-player.css";

const ListAndPlayer = () => {
  const [musicList, setMusicList] = useState([]);
  const [personalList, setPersonalList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Waves");

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
          <h2>Choose a category</h2>
        </div>
        <div className="c-items-container">
          <div className="c-item" onClick={() => setSelectedCategory("Waves")}>
            <FontAwesomeIcon icon={faWater} />
            <br />
            Waves
          </div>
          <div className="c-item" onClick={() => setSelectedCategory("Cafe")}>
            <FontAwesomeIcon icon={faMugHot} />
            <br />
            Cafe
          </div>
          <div className="c-item" onClick={() => setSelectedCategory("Birds")}>
            <FontAwesomeIcon icon={faDove} />
            <br />
            Birds
          </div>
          <div className="c-item" onClick={() => setSelectedCategory("Guitar")}>
            <FontAwesomeIcon icon={faGuitar} />
            <br />
            Guitar
          </div>
        </div>
        {/* <div className="c-pagination">previous 1 2 3 next</div> */}
      </div>
      {/* Music List & Personal List  */}
      <div className="audio box">
        <ul>
          {musicList.map((music) => (
            <li key={music.id} className="musiclist-box">
              <img
                src="./images/category-background-test.jpg"
                alt=""
                width="75px"
                height="75px"
              />
              <div className="music-desc-container">
                <p>{music.musicName}</p>
                {/* Use the full path from the JSON file */}
                <audio controls loop>
                  <source src={music.path} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
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
              <p>{music.musicName}</p>
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
