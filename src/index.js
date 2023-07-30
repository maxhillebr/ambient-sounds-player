import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderNav from "./components/headernav";
import Sidebar from "./components/sidebar";
import Categories from "./components/categories";
import Audiobox from "./components/audiobox";
import AudioPlayer from "./components/audio-1";
import AudioPlayer2 from "./components/audio-2";
import reportWebVitals from "./reportWebVitals";
// Fontawesome -> Copy for future components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart, faPause } from "@fortawesome/free-solid-svg-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div class="container">
      <HeaderNav />
      <Sidebar />
      <div class="footer box">©Max Hillebrand 2023</div>
      <Categories />
      <div class="audio box">
        <h2>Audio Box to select from category</h2>
        <Audiobox />
      </div>
      <div class="visual box">
        <h2>Visual effects when playing music</h2>
      </div>
      <div class="audio-player box">
        <h2>Audioplayer</h2>
        <AudioPlayer />
        <AudioPlayer2 />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
