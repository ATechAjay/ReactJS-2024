import React from "react";
import { CARD_IMAGE } from "../../utils/Constant";
const ListItem = (props) => {
  //   console.log(props.list);
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
            <button className="absolute m-auto p-2 rounded-lg bg-green-600 text-white hover:bg-green-400">
              Add +
            </button>
            {console.log(item)}
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
