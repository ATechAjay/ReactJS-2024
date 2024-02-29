import { Link } from "react-router-dom";
import React from "react";

import style from "./RestaurantIsFound.module.css";
const RestaurantIsFound = () => {
  return (
    <div className={style["food-is-found-container"]}>
      <h1>Your desired food is not found.</h1>
      <p>Try again after sometimes!</p>
      <Link to="/">Seach Food Again?</Link>
    </div>
  );
};

export default RestaurantIsFound;
