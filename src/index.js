import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AudioPlayer from "./components/audio-1";
import AudioPlayer2 from "./components/audio-2";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="wrapper">
      <h1>Ambient Music Player</h1>
      <AudioPlayer />
      <AudioPlayer2 />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
