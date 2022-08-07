import React from 'react'
import FavoritesCard from './FavoritesCard'

const FavoritesContainer = ({items, categoryList}) => {
  return (
    <div>
     {items.map((itemsObj, index) => <FavoritesCard itemsObj={itemsObj} key={index}/>)}
     
    </div>
  )
}

export default FavoritesContainer