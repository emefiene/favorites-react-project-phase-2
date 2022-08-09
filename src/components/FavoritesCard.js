import React from 'react'

const FavoritesCard = ({itemsObj:{name,image,type}}) => {
    
  return (
    <li className='card' style={{display:"inline-block"}} >
      <div className='image'  style={{display:"inline-block"}}>
        <img src={image} alt="Logo" />
        <h3>{name}</h3>
        <h5>{type}</h5>
        
       </div>
    </li>
      
    

  )
    
}

export default FavoritesCard

