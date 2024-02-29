import React from "react";
import style from "./Search.module.css";
import DATA from "../../utils/LOCAL_DATA";
// import { useState } from "react";

const Search = () => {
  const filterHandler = () => {
    // const filterCard = DATA.filter((card) => +card.data.avgRating >= 4);

    console.log("first");
  };
  return (
    <div className={style["search-container"]}>
      <input type="text" placeholder="Search..." />
      <button onClick={() => console.log("first")}>
        Filter Top Rated Food
      </button>
    </div>
  );
};

export default Search;
