import React, { useContext, useState } from "react";
import image from "../../Assets/logo.png";
// import from "./Header.module.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
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

  const data = useContext(userContext);
  // console.log(data);

  const cart = useSelector((store) => store.cart.cartItems);
  // console.log(cart);
  return (
    <nav className={"flex justify-between p-3 shadow-sm mb-2  items-center"}>
      <div className={""}>
        <Link to="/">
          <img
            src={image}
            alt="food express"
            width={"60px"}
            className="border-2 border-red-500 rounded-full"
          />
        </Link>
      </div>

      <ul className={"navbar gap-3  flex items-center"}>
        <li title="Internet status">{online ? "🟢" : "🔴"}</li>

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
        <li className="hover:bg-sky-200 p-2 cursor-pointer rounded-sm hover:text-black">
          <Link to="/cart" className="font-bold">
            Cart {cart.length > 0 ? `(${cart.length})` : ""}
          </Link>
        </li>
        <button
          className={
            "p-2 cursor-pointer rounded-sm font-medium text-white bg-sky-500 hover:bg-sky-700 "
          }
          onClick={clickHandler}
        >
          {btn}
        </button>
        <li className="font-bold">User: {data.user}</li>
      </ul>
    </nav>
  );
};
export default Header;
