import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "../css/categories.css";

const Categories = () => {
  return (
    <>
      <h2>Categories</h2>
      <div className="flex-container">
        <div>Waves</div>
        <div>Cafe</div>
        <div>Beats</div>
      </div>
    </>
  );
};

export default Categories;
