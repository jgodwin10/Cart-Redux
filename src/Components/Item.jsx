import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../App/CartSlice';
import { useState } from 'react';

const Item = ({ ...item }) => {
  const { img, title, price } = item;
  const dispatch = useDispatch();
  
  const [incart, setIncart] = useState(false);

  const handleCart = () => {
    dispatch(addItem(item));
    setIncart(true);
    setTimeout(() => {
      setIncart(false);
    }, 10000);
  }


  return (
    <>
      <div className="shadow-2xl flex justify-center flex-col items-center text-center">
        <div className="py-6">
          <img src={img} width={150} alt="" />
          <p>★★★★</p>
          <p className="py-2 text-lg font-semibold">{ title}</p>
          <p>$ { price}</p>
        </div>
        <button onClick={handleCart} className="bg-purple-800 w-[100%] py-2 text-white">
          {incart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </>
  );
}

export default Item
