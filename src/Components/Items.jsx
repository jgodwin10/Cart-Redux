import React from 'react'
import Item from './Item'
import tw from 'tailwind-styled-components'
import productsData from "../data/productsData";


const ItemContainer = tw.div`
  max-w-[1340px]
  mx-auto
  grid
  lg:grid-cols-4
  md:grid-cols-3
  sm:grid-cols-2
  grid-cols-1
  gap-8
  py-32
  px-4
`
const MainItem = tw.div`
  
`


const Items = () => {
  return (
    <>
      <ItemContainer>
        {productsData.map((item) => {
          return <Item key={item.id} {...item} />
        })}
      </ItemContainer>
    </>
  );
}

export default Items
