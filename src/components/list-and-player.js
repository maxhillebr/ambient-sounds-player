import React, { useEffect, useState } from "react";
import "../css/list-and-player.css";

const ListAndPlayer = () => {
  const [musicList, setMusicList] = useState([]);
  const [personalList, setPersonalList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Sea");

  // Pause all button (stored as array to get all audio)
  const personalListAudioClass = "personallist-audio";

  useEffect(() => {
    // Fetch music data from the JSON file
    if (selectedCategory === "Sea") {
      fetch("/musicdata.json")
        .then((response) => response.json())
        .then((data) => setMusicList(data.musicListWaves))
        .catch((error) => console.error("Error fetching music data:", error));
    } else if (selectedCategory === "Cafe") {
      fetch("/musicdata.json") // Update the URL to fetch the 'musiclistcafe' data
        .then((response) => response.json())
        .then((data) => setMusicList(data.musicListCafe)) // Use 'musiclistcafe' here
        .catch((error) => console.error("Error fetching music data:", error));
    } else if (selectedCategory === "Forest") {
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

  // Add the selected music to the personal list
  const handleAddToList = (music) => {
    setPersonalList((prevList) => [...prevList, music]);
  };

  // Filter out the music with the specified id from the personal list
  const handleRemove = (musicToRemove) => {
    setPersonalList((prevList) =>
      prevList.filter((music) => music.id !== musicToRemove.id)
    );
  };

  // Pause All Button
  const handlePauseAll = () => {
    let personalListAudio = document.querySelectorAll(".personallist-audio");
    personalListAudio.forEach((audio) => {
      audio.pause();
    });
  };

  return (
    <>
      {/* Choose Category */}
      <div className="category box">
        <div className="entry-text">
          <h2>Ambient Sounds for a good working enviroment</h2>
          <p>
            Choose your Category, add sounds to your list and press play. Enjoy!
          </p>
        </div>
        <div className="c-items-container">
          <div
            className="c-item sea-category"
            onClick={() => setSelectedCategory("Sea")}
          >
            Sea
          </div>
          <div
            className="c-item cafe-category"
            onClick={() => setSelectedCategory("Cafe")}
          >
            Cafe
          </div>
          <div
            className="c-item forest-category"
            onClick={() => setSelectedCategory("Forest")}
          >
            Forest
          </div>
          <div
            className="c-item guitar"
            onClick={() => setSelectedCategory("Guitar")}
          >
            Guitar
          </div>
          <div
            className="c-item show-all"
            onClick={() => setSelectedCategory("Guitar")}
          >
            Show All
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
        <div className="audio-player-wrapper">
          <div className="audio-player-img">
            <img
              src="../images/recoder-placeholder.jpg"
              alt="placeholder"
              width="150px"
              height=""
            />
          </div>
          <div className="audio-player-buttons">
            <button onClick={handlePauseAll}>Pause All</button>
            <button onClick={handlePauseAll}>Load</button>
            <button onClick={handlePauseAll}>Save</button>
          </div>
          <ul>
            {personalList.map((music) => (
              <li key={music.id}>
                <p>{music.musicName}</p>
                <audio className={personalListAudioClass} controls loop>
                  <source src={music.path} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <button onClick={() => handleRemove(music)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListAndPlayer;
