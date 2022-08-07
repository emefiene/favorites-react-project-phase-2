import React, {useState, useEffect} from "react";
import FavoritesContainer from "./FavoritesContainer";

function App() {
  const [allItems, setAllItems] = useState([])
  const [items, setItems] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [cart , setCart] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then(res => res.json())
    .then(data => {
      setItems(data)
      setAllItems(data)
    })

  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/category")
    .then(res => res.json())
    .then(categoryList => {
      setCategoryList(categoryList)
      

    })
  }, [])

  const handleCategory = (categoryStr) => {
    const filterCategory = allItems.filter(itemsObj => itemsObj.type === categoryStr)
    setItems(filterCategory)
  }

  useEffect(() => {
    if(cart.length > 0) alert(`${cart[cart.length-1].name} added to cart`)
  }, [cart])
  
  const addToCart = (itemsObj) => {
    setCart([...cart, itemsObj])
  }

  return (
    <div>
    <h2>Cart:{cart.length}</h2>
     <FavoritesContainer 
     items={items} 
     categoryList={categoryList} 
     handleCategory={handleCategory}
     addToCart={addToCart}/>
    </div>
  );
}

export default App;
