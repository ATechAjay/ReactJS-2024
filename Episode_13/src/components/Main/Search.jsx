import React from "react";
// import from "./Search.module.css";
// import DATA from "../../utils/LOCAL_DATA";
// import { useState } from "react";

const Search = () => {
  const filterHandler = () => {
    // const filterCard = DATA.filter((card) => +card.data.avgRating >= 4);

    console.log("first");
  };
  return (
    <div className={"p-3"}>
      <input type="text" placeholder="Search..." className="border-black" />
      <button
        className={"bg-sky-500 text-white rounded-md"}
        onClick={() => console.log("first")}
      >
        Filter Top Rated Food
      </button>
    </div>
  );
};

export default Search;
