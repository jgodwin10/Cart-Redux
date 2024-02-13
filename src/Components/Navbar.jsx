import React from 'react'
import tw from 'tailwind-styled-components'
import { TbShoppingBag } from "react-icons/tb"

import { useSelector, useDispatch } from "react-redux";
import { CartSelector } from "../App/CartSlice";
import { OpenCart } from '../App/CartSlice';

const MainNav = tw.div`
    bg-purple-900
    py-4
    fixed
    top-0
    w-[100%]
`
const Nav = tw.div`
    flex
    justify-between
    items-center
    max-w-[1340px]
    mx-auto
    px-4
    text-white
    font-semibold
    text-md
`
const Icon = tw.div`
    relative
    pr-4
    cursor-pointer
`
const IconNum = tw.div`
    absolute
    -top-1
    left-5
    bg-black
    w-[30px]
    p-2
    rounded-full
    text-center
    text-[10px]
`

const Navbar = () => {
  const cart = useSelector(CartSelector);
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(OpenCart());
  }





  const CartItems = cart.length;

  return (
    <MainNav>
      <Nav>
        Redux Shopping Cart
        <Icon onClick={handleOpenCart}>
          <TbShoppingBag size={30} />
          <IconNum>{ CartItems }</IconNum>
        </Icon>
      </Nav>
    </MainNav>
  )
}

export default Navbar
