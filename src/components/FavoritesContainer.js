import React from 'react'
import Category from './Category'
import FavoritesCard from './FavoritesCard'

const FavoritesContainer = ({items, categoryList,handleCategory}) => {
  return (
    <div>
      <div style={{display: "flex"}}>
      {categoryList.map((categoryStr,id) => <Category categoryStr={categoryStr} key={id} handleCategory={handleCategory} />)}
      </div>
      {items.map((itemsObj, index) => <FavoritesCard itemsObj={itemsObj}  key={index} />)}
      
    </div>
  )
}

export default FavoritesContainer