import React from 'react'
import Category from './Category'
import FavoritesCard from './FavoritesCard'

const FavoritesContainer = ({items, categoryList}) => {
  return (
    <div>
     {categoryList.map(categoryStr => <Category categoryStr={categoryStr} key={categoryStr.id}/>)}
     {items.map((itemsObj, index) => <FavoritesCard itemsObj={itemsObj} key={index}/>)}
    </div>
  )
}

export default FavoritesContainer