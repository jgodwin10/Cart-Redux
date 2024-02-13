import React from 'react'
import tw from 'tailwind-styled-components';
import { useSelector } from "react-redux";
import { CartSelector } from "../App/CartSlice";


const Cart = tw.div`
   bg-purple-900
   absolute
   bottom-0
   right-0
   w-[600px]
   shadow-[0_-15px_10px_0_rgba(0,0,0,0.3)]
   py-4
   z-[9999999]
   text-center
   text-white
   text-[30px]
`;


const CartAmount = () => {
  const carts = useSelector(CartSelector);

  const CartTotal = carts
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Cart>
      Total: ${CartTotal}
     </Cart>
  )
}

export default CartAmount
