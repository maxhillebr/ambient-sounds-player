import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderNav from "./components/headernav";
import Sidebar from "./components/sidebar";
import Categories from "./components/categories";
import AudioPlayer from "./components/audio-1";
import AudioPlayer2 from "./components/audio-2";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderNav />
    <Sidebar />
    <div id="wrapper">
      <div class="grid-container">
        <div class="grid-item">
          {" "}
          <Categories />
        </div>
        <div class="grid-item">Visual</div>
        <div class="grid-item">
          <h2>Available Sounds</h2>
          <AudioPlayer />
          <AudioPlayer2 />
        </div>
        <div class="grid-item">
          Individual Player with Volume, Play/Pause for every Sound
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
