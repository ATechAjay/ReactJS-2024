import React, { useState } from "react";
import image from "../../Assets/logo.png";
// import from "./Header.module.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = function () {
  const [btn, setBtn] = useState("Login");
  // let btName = "Login";

  const clickHandler = () => {
    // let btName = "Logout";
    // console.log(btName);
    // return btName;
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };
  const online = useOnlineStatus();
  // console.log(online);
  // console.log(btn);
  return (
    <nav className={"flex justify-between p-3 shadow-sm mb-2"}>
      <div className={"logo-container"}>
        <Link to="/">
          <img
            src={image}
            alt="food express"
            width={"60px"}
            className="border-2 border-red-500 rounded-full"
          />
        </Link>
      </div>

      <ul className={"navbar gap-3"}>
        <li>{online ? "🟢" : "🔴"}</li>

        <li className="hover:bg-sky-200 p-2 cursor-pointer rounded-sm hover:text-black">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="hover:bg-sky-200 p-2 cursor-pointer rounded-sm hover:text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-sky-200 p-2 cursor-pointer rounded-sm hover:text-black">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="hover:bg-sky-200 p-2 cursor-pointer rounded-sm hover:text-black">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="hover:bg-sky-200 p-2 cursor-pointer rounded-sm hover:text-black">
          <Link to="/about">About Us</Link>
        </li>
        <button
          className={
            "p-2 cursor-pointer rounded-sm font-medium text-white bg-sky-500 hover:bg-sky-700 "
          }
          onClick={clickHandler}
        >
          {btn}
        </button>
      </ul>
    </nav>
  );
};
export default Header;
