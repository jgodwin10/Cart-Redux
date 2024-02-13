import React from "react";
import tw from "tailwind-styled-components";
import CartItems from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import { CartSelector, CartOpen } from "../App/CartSlice";
import { closeCart } from "../App/CartSlice";
import { useState } from "react";
import CartAmount from "./CartAmount";

const CartOverlay = tw.div`
  fixed
  top-0
  left-0
  bg-[rgba(0,0,0,0.3)]
  w-[100%]
  h-[100%]
  z-[99]
`;

const CartBody = tw.div`
   w-[600px]
   py-20
   z-[999]
   absolute
   right-0
   top-0
   bg-white
   text-2xl
   text-center
   text-white
   h-[100%]
   overflow-x-hidden
   oveflow-y-auto
   
`;
const CartTotal = tw.div`
   bg-purple-900
   py-4
   shadow-[0_15px_10px_0_rgba(0,0,0,0.3)]
   absolute
   top-0
   right-0
   w-[600px]
   z-[9999999]
   text-center
   text-[30px]
   text-white
`;


const Cart = () => {
  const carts = useSelector(CartSelector);
  const open = useSelector(CartOpen);
  const dispatch = useDispatch();

  

  const handleCloseCart = () => {
    dispatch(closeCart());
  };


  return (
    <>
      {open && (
        <CartOverlay>
          <CartTotal>
            <p
              onClick={handleCloseCart}
              className=" cursor-pointer text-[30px] absolute left-5 top-3"
            >
              {" "}
              x
            </p>
            Cart ({carts.length})
          </CartTotal>
          <CartBody>
            {carts.map((cart) => {
              return <CartItems key={cart.id} {...cart} />;
            })}
          </CartBody>
          <CartAmount />
        </CartOverlay>
      )}
    </>
  );
};

export default Cart;
