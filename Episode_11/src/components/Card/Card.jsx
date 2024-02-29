/* eslint-disable react/prop-types */
// import from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { CARD_IMAGE } from "../../utils/Constant";

const Card = ({ cardData }) => {
  // console.log(cardData);
  return (
    <div className={"flex flex-wrap gap-3 m-3"}>
      {cardData?.map((card) => (
        <Link to={"/restaurants/" + card?.info?.id} key={card?.info?.id}>
          <div>
            <div
              className={"rounded-md bg-sky-100 w-[250px]  hover:bg-sky-200"}
            >
              <img
                src={CARD_IMAGE + card?.info?.cloudinaryImageId}
                alt={card?.info?.name}
                className="rounded-t-md  w-full object-cover"
              />

              <div className={"p-2"}>
                <h2 className="text-lg font-bold">{card?.info?.name}</h2>
                <p>{card?.info?.cuisines?.join(", ")}</p>
                <div className={"food-rating"}>
                  <span
                    className={
                      +card?.info?.avgRating >= 4
                        ? "text-green-700 flex gap-2 items-center justify-end"
                        : "text-orange-700 flex gap-2 items-center justify-end"
                    }
                  >
                    <i className={"fas fa-star"} />
                    <p>{card?.info?.avgRating}</p>
                  </span>
                  <p>{card?.info?.locality + ", " + card?.info?.areaName}</p>
                  <p className="font-bold">{card?.info?.costForTwo}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
