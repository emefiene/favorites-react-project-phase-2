import React, {useState} from 'react'

const FavoritesCard = ({itemsObj:{name,image,type},itemsObj,addToCart,handleDelete}) => {
  const [like , setLike] = useState(false)

 const handleLick = () => {
   setLike(!like)
 }
    
  return (
    <li className='card' style={{display:"inline-block"}} >
      <div className='image'  style={{display:"inline-block"}}>
        <img src={image} alt="Logo" />
        <h3>{name}</h3>
        <h5>{type}</h5>
        <p onClick={handleLick}>{like? "❤️": "🧡"}</p>
        <button onClick={() => addToCart(itemsObj)}>Add To Cart</button>
        <button onClick={() => handleDelete(itemsObj)}>Delete</button>

        
       </div>
    </li>
      
    

  )
    
}

export default FavoritesCard

