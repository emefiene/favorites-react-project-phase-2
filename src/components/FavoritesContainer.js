import React from 'react'
import Category from './Category'
import FavoritesCard from './FavoritesCard'

const FavoritesContainer = ({items, categoryList,handleCategory,addToCart}) => {
  return (
    <div>
      <div style={{display: "flex"}}>
      {categoryList.map((categoryStr,id) => <Category categoryStr={categoryStr} key={id} handleCategory={handleCategory} />)}
      </div>
      {items.map((itemsObj, index) => <FavoritesCard itemsObj={itemsObj} addToCart={addToCart} key={index} />)}
      
    </div>
  )
}

export default FavoritesContainer