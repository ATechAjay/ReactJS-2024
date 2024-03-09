/* eslint-disable react/prop-types */
// import from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { CARD_IMAGE } from "../../utils/Constant";

const Card = ({ cardData }) => {
  // console.log(cardData);
  return (
    <div className={"flex flex-wrap gap-3 m-3 justify-center"}>
      {cardData?.map((card) => (
        <Link to={"/restaurants/" + card?.info?.id} key={card?.info?.id}>
          <div>
            <div
              className={"rounded-md  w-[250px]  hover:bg-sky-200  bg-sky-100"}
            >
              <img
                src={CARD_IMAGE + card?.info?.cloudinaryImageId}
                alt={card?.info?.name}
                className="rounded-t-md  w-full object-cover"
              />

              <div className={"p-2"}>
                <h2 className="text-lg font-bold">{card?.info?.name}</h2>
                {/* <h2 className="text-lg font-bold">{card?.info?.name.length}</h2> */}
                {/* Worst */}
                {/* <p>{card?.info?.cuisines?.join(", ")}</p> */}

                {/* Average */}
                {/* <p>
                  {card.info.cuisines.length <= 2
                    ? card.info.cuisines
                    : card.info.cuisines[0] +
                      ", " +
                      card.info.cuisines[1] +
                      ", " +
                      "..."}
                </p> */}
                {/* Best */}
                <p>
                  {card.info.cuisines.slice(0, 2).join(", ")}{" "}
                  {card.info.cuisines.length > 2 ? "..." : null}
                </p>

                <div className={"food-rating"}>
                  <span
                    className={
                      +card?.info?.avgRating >= 4
                        ? "text-green-700 flex gap-2 items-center justify-end"
                        : "text-orange-700 flex gap-2 items-center justify-end"
                    }
                  >
                    <i className={"fas fa-star"} />
                    <p>
                      {card?.info?.avgRating
                        ? card?.info?.avgRating
                        : card?.info?.avgRatingString}
                    </p>
                  </span>
                  <p>
                    {card?.info?.locality}
                    {card?.info?.areaName ? "..." : null}
                  </p>

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
