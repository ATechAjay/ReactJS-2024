import React, { useState } from "react";
// import from "./RestaurntMenu.module.css";
import Shimmer from "../Card/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { restId } = useParams();
  const menu = useRestaurantMenu(restId);

  if (!menu) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = menu[0].card.card.info;

  // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

  // const menuItems =
  //   menu[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

  // const carouselItems =
  //   menu[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel;

  // console.log(menu[2].groupedCard.cardGroupMap.REGULAR.cards);

  const categories = menu[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (category) =>
      category.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div className={"text-center font-bold"}>
      <h1 className="my-3 text-3xl">{name}</h1>
      <span className="italic block mb-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </span>
      <hr />
      {categories.map((category, index) => (
        <React.Fragment key={category.card.card.title}>
          <RestaurantCategory
            data={category.card.card}
            show={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default RestaurantMenu;
