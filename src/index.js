import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderNav from "./components/headernav";
import Sidebar from "./components/sidebar";
import reportWebVitals from "./reportWebVitals";
import ListAndPlayer from "./components/list-and-player";
// Fontawesome -> Copy for future components

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <HeaderNav />
      <Sidebar />
      <div className="visual box">
        <h2>Visual effects when playing music</h2>
      </div>
      <ListAndPlayer />
    </div>
    <footer className="footer box">©Max Hillebrand 2023</footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
