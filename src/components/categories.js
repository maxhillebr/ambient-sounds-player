import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "../css/categories.css";

const Categories = () => {
  return (
    <>
      <div class="category box">
        <div class="category-heading">
          <h2>Categories</h2>
        </div>
        <div class="c-items-container">
          <div class="c-item">Waves</div>
          <div class="c-item">Cafe</div>
          <div class="c-item">Nothing</div>
          <div class="c-item">Guitar</div>
        </div>
        <div class="c-pagination">previous 1 2 3 next</div>
      </div>
    </>
  );
};

export default Categories;
