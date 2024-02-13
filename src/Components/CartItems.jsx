import React from "react";
import { useDispatch } from "react-redux";
import { Decrement, Increment, removeItem } from "../App/CartSlice";

const CartItems = ({ ...cart }) => {
  const { img, price, title, quantity, id } = cart;

  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(Increment(itemId));
  }
  const handleDecrement = (itemId) => {
    dispatch(Decrement(itemId));
  }
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  }

  return (
    <div className="text-black flex justify-between items-center p-6">
      <img src={img} width={150} alt={title} />
      <div className="text-left">
        <p className="text-base font-semibold">{title}</p>
        <p className="text-[15px] font-semibold">${ price }</p>
      </div>
      <div className="flex flex-col">
        <button onClick={() => handleDecrement(id)}>-</button>
        <p>{ quantity }</p>
        <button onClick={() => handleIncrement(id)}>+</button>
      </div>
      <button onClick={() => handleRemove(id)} className="size-8">x</button>
    </div>
  );
};

export default CartItems;
