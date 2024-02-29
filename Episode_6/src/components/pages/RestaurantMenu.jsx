import React, { useEffect, useState } from "react";
import style from "./RestaurantMenu.module.css";
import Shimmer from "../Card/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/Constant";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { restId } = useParams();

  console.log(restId);

  useEffect(() => {
    fetchMenu();
  }, []);
  // 246443
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);

    const json = await data.json();
    setMenu(json.data.cards);
  };

  if (!menu) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = menu[0].card.card.info;

  // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

  const menuItems =
    menu[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories;
  // console.log(
  //   menu[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories
  // );

  // console.log(menuItems);
  return (
    <div className={style["menu-contaier"]}>
      <h1>
        {name}: {cuisines}
      </h1>
      <p>{costForTwoMessage}</p>
      <h2>Menus:</h2>
      <ul>
        {menuItems ? (
          menuItems.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })
        ) : (
          <p>No menu items are available.</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
