import React, {useState, useEffect} from 'react'
import { useParams , Link} from 'react-router-dom'

const ItemsDetails = ({addToCart,handleDelete}) => {
    const [itemsDetail, setItemsDetail] = useState(null)
    const [loaded, setLoaded] = useState(null)
    const [like , setLike] = useState(false)

    const itemsId = useParams().id

    const handleLick = () => {
      setLike(!like)
    }

    
    
  useEffect(() => {
      fetch(`http://localhost:3000/listings/${itemsId}`)
      .then(res => res.json())
      .then(data => {
         setItemsDetail(data)
         setLoaded(true)

      })
    },[itemsId])

  if(!loaded) return <h2>Loading ....</h2>
  return (
    <div>
     <img src={itemsDetail.image} alt="Logo"  style={{display:"inline-block", width:"500px"}}/>
     <h3>{itemsDetail.name}</h3>
     <h5>{itemsDetail.type}</h5>
     <p>${itemsDetail.price}</p>
     <p onClick={handleLick}>{like? "❤️": "🧡"}</p>
     <button onClick={() => addToCart(itemsDetail)}>Add To Cart</button>
     <button onClick={() => handleDelete(itemsDetail)}>Delete</button>
     <Link to="/items"><button>Home</button></Link>
    </div>
  )
}

export default ItemsDetails


