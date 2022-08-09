import { Link } from 'react-router-dom'

const FavoritesCard = ({itemsObj:{name,image,type},itemsObj}) => {
    
  return (
    <li className='card' style={{display:"inline-block"}} >
      <div className='image'  style={{display:"inline-block"}}>
        <img src={image} alt="Logo" />
        <h3>{name}</h3>
        <h5>{type}</h5>
        <Link to={`/items/${itemsObj.id}`}><button>Proceed</button></Link>
        
       </div>
    </li>
      
    

  )
    
}

export default FavoritesCard

