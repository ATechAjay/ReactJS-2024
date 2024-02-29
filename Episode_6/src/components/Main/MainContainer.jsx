import Card from "../Card/Card";
import Shimmer from "../Card/Shimmer";
import style from "./MainContainer.module.css";
import React, { useEffect, useState } from "react";
// import RestaurantIsFound from "../pages/RestaurantIsFound";
const MainContaier = () => {
  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState();
  const [searchText, setSearchText] = useState("");

  // If no dependencies array, then useEffect() called on every render.

  // If the dependicies array is empty, then useEffect() is called on intial render and just once.

  // If there is a dependencies array is present, then useEffect is called when the particular array would be updated.

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // We can get lattitude and longitude of the use to show the custome data according to the specific locations.
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051"
    );
    const json = await data.json();

    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterHandler = () => {
    const filterCard = list.filter((card) => +card.info.avgRating >= 4);
    setFilterRes(filterCard);
  };

  const changeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    const filteredRestaurant = list.filter((res) => {
      // We can also search for cuisines
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterRes(filteredRestaurant);
    setSearchText("");
  };

  if (list?.length === 0) {
    // Here we can display shimmer UI to the user for better UX.
    return <Shimmer />;
  }

  // if (filterRes.length === 0) {
  //   return <RestaurantIsFound />;
  // }

  // KEYBOARD SHORTCUTS:
  const hitEnter = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  document.querySelector("body").addEventListener("keydown", hitEnter);

  return (
    <div className={style["main-container"]}>
      <div className={style["search-container"]}>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={changeHandler}
        />
        <button onClick={searchHandler}>Search Food or Reset Filter</button>
        <button onClick={filterHandler}>Filter Top Rated Food</button>
      </div>
      <Card cardData={filterRes} />
    </div>
  );
};

export default MainContaier;
