import React from 'react'
import Category from './Category'
import FavoritesCard from './FavoritesCard'
import styled from 'styled-components'

const FavoritesContainer = ({items, categoryList,handleCategory}) => {
  return (
    <Items>
      <div style={{display: "flex"}}>
      {categoryList.map((categoryStr,id) => <Category categoryStr={categoryStr} key={id} handleCategory={handleCategory} />)}
      </div>
      {items.map((itemsObj, index) => <FavoritesCard itemsObj={itemsObj}  key={index} />)}
      
    </Items>
  )
}

export default FavoritesContainer

const Items = styled.div`
  flex-wrap:wrap;
`