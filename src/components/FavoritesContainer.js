import React from 'react'
import FavoritesCard from './FavoritesCard'

const FavoritesContainer = ({data}) => {
  return (
    <div>
    {data.map(dataObj => <FavoritesCard dataObj={dataObj} key={dataObj.id}/>)}
    </div>
  )
}

export default FavoritesContainer