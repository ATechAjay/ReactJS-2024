import Card from "../Card/Card";
import Shimmer from "../Card/Shimmer";
// import from "./MainContainer.module.css";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";

// import RestaurantIsFound from "../pages/RestaurantIsFound";
const MainContaier = () => {
  const [list, setList] = useState();
  const [filterRes, setFilterRes] = useState();
  const [searchText, setSearchText] = useState("");

  const { setNewUser, user } = useContext(UserContext);
  // console.log(setNewUser("Ajay Yadav"));
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
  // console.log(list);
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
    <div>
      <div className={"mb-4 p-3"}>
        <input
          className="mr-2 border-2 border-sky-300 rounded-md p-1 outline-2 outline-sky-500"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={changeHandler}
        />
        <button
          onClick={searchHandler}
          className="bg-sky-400 text-white mr-3  p-2 rounded-md hover:bg-sky-500"
        >
          Search Food / Reset Filter
        </button>
        <button
          onClick={filterHandler}
          className="bg-sky-400 text-white  p-2 rounded-md hover:bg-sky-500"
        >
          Filter Top Rated Food
        </button>

        <input
          type="text"
          placeholder="Type user name"
          className="border-2 border-sky-300 rounded-md p-1 outline-2 outline-sky-500 ml-2"
          onChange={(e) => setNewUser(e.target.value)}
          value={user}
        />
      </div>
      <Card cardData={filterRes} />
    </div>
  );
};

export default MainContaier;
