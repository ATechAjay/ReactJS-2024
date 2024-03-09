import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { clearCart } from "../../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-9/12 text-center m-auto">
      <h2 className="font-bold mb-3 text-lg">Cart Items</h2>
      <button
        className="bg-red-500 text-white rounded-md font-bold p-3 hover:bg-red-400 mb-3"
        onClick={clearHandler}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListItem list={cartItems} />
      )}
    </div>
  );
};

export default Cart;
