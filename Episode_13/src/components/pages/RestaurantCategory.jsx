import React, { useState } from "react";
import ListItem from "./ListItem";
const RestaurantCategory = (props) => {
  // console.log(props);
  // const [show, setShow] = useState(false);
  const clickHandler = () => {
    props.setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="p-2 flex flex-col  w-8/12 m-auto bg-gray-50 shadow-md my-3">
        <div
          className="cursor-pointer flex justify-between"
          onClick={clickHandler}
        >
          <h4 className="mb-3">
            {props.data.title} ({props.data.itemCards.length})
          </h4>
          <span>⬇️</span>
        </div>

        {props.show && <ListItem list={props.data.itemCards} />}
      </div>
      {/* Body */}
    </div>
  );
};

export default RestaurantCategory;
