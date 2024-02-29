import React from "react";
import { CARD_IMAGE } from "../../utils/Constant";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/cartSlice";

const ListItem = (props) => {
  const dispatch = useDispatch();
  const cartHandler = (item) => {
    // Dispatch the action to add the item to the cart.
    dispatch(addToCart(item));
  };
  return (
    <ul className="font-normal">
      {props.list.map((item) => {
        return (
          <li
            key={item.card.info.id}
            className="text-left flex align-center gap-2 mb-3"
          >
            <img
              src={CARD_IMAGE + item.card.info.imageId}
              alt={item.card.info.name}
              width={"90px"}
              className="w-3/12 rounded-lg hover:scale-105 transition duration-300 ease-in-out transform cursor-pointer "
            />
            <button
              onClick={() => cartHandler(item)}
              className="absolute m-auto p-2 rounded-lg bg-green-600 text-white hover:bg-green-400"
            >
              Add +
            </button>

            <div className="flex flex-col w-9/12">
              <span className="font-medium">
                {item.card.info.name} - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <span className="text-left">
                {item.card.info.description
                  ? item.card.info.description
                  : "Description will be updated soon."}
              </span>
              <hr />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
