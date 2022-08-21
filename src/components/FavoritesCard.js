import { Link } from 'react-router-dom'
import styled from "styled-components"


const FavoritesCard = ({itemsObj:{name,image,type},itemsObj}) => {
    
  return (
    
    <Card>
      <img className='img' src={image} alt="Logo" />
      <h5>{name}</h5>
      <h5>{type}</h5>
      <Link to={`/items/${itemsObj.id}`}><strong>Click to Proceed</strong></Link>
        
    </Card>
  )
     
    
}

export default FavoritesCard

const Card = styled.div`
   background-color: AliceBlue;
   box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
   display:inline-block;
   text-align:center
   text-decoration: none;
 
   h4{
    font-family: 'Dancing Script', cursive;
   }
   
   a {
    text-decoration: none;
  }
   a:hover{
     color: red
    
   }

   .img{
    width: 300px;
    height: 200px;
    padding: 15px;
    marging: 10px 
   }

`

