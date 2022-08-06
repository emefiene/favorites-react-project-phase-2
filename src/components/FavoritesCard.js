import React from 'react'

const FavoritesCard = ({dataObj:{name,image,type},dataObj}) => {
    
  return (
    <div>
    <h3>{name}</h3>
    <img src={image} alt="Logo" />
    <h5>{type}</h5>
    </div>
  )
}

export default FavoritesCard

