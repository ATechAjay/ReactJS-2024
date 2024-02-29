import style from "./Shimmer.module.css";
import React from "react";

const Shimmer = (props) => {
  //   console.log(props);
  return (
    <div className={style["shimmer-container"]}>
      <div className={style["shimmer-card"]}></div>
      <div className={style["shimmer-card"]}></div>
      <div className={style["shimmer-card"]}></div>
      <div className={style["shimmer-card"]}></div>
      <div className={style["shimmer-card"]}></div>
      <div className={style["shimmer-card"]}></div>
      <div className={style["shimmer-card"]}></div>
      <div className={style["shimmer-card"]}></div>
      <div className={style["shimmer-card"]}></div>
    </div>
  );
};

export default Shimmer;
