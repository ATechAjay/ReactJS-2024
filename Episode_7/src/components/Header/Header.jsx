import React, { useState } from "react";
import image from "../../Assets/logo.png";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = function () {
  const [btn, setBtn] = useState("Login");
  // let btName = "Login";

  const clickHandler = () => {
    // let btName = "Logout";
    // console.log(btName);
    // return btName;
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };

  // console.log(btn);
  return (
    <nav className={style.header}>
      <div className={style["logo-container"]}>
        <Link to="/">
          <img src={image} alt="food express" width={"60px"} />
        </Link>
      </div>

      <ul className={style.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <button className={style["login-btn"]} onClick={clickHandler}>
          {btn}
        </button>
      </ul>
    </nav>
  );
};
export default Header;
