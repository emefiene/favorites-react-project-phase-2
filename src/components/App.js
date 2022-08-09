import React, {useState, useEffect} from "react";
import FavoritesContainer from "./FavoritesContainer";
import { Route } from "react-router-dom";
import Form from "./Form";
import Search from "./Search";
import { Switch } from "react-router-dom";
import ItemsDetails from "./ItemsDetails";

function App() {
  const [allItems, setAllItems] = useState([])
  const [items, setItems] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [cart , setCart] = useState([])
  const [formData , setFormData] = useState({
    name:"",
    image:"",
    type:"",
    price:""
  })
  

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

  const handleDelete = (itemObj) => {
    fetch(`http://localhost:3000/listings/${itemObj.id}`, {
      method: "DELETE"
    })
    .then(() => {
      const deleteItems = allItems.filter(deleteItem => deleteItem.id !== itemObj.id)
      setAllItems(deleteItems)
      setItems(deleteItems)

    })
  }

  useEffect(() => {
    if(cart.length > 0) alert(`${cart[cart.length-1].name} added to cart`)
  }, [cart])

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/listings",{
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      setItems([data,...items])

    })
    setFormData({
      name:"",
      image:"",
      type:"",
      price:""
    })
  }

  const handleSearch = (e) => {
   // console.log(e.target.value)
    const filterSearch = allItems.filter(itemObj => {
      //console.log(itemObj)
      return itemObj.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
   setItems(filterSearch)
  }

  const addToCart = (itemsObj) => {
    setCart([...cart, itemsObj])
  }

  const handleCategory = (categoryStr) => {
    const filterCategory = allItems.filter(itemsObj => itemsObj.type === categoryStr)
   setItems(filterCategory)
  }


  return (
    <div>
     <h2>Cart:{cart.length}</h2>
     <Switch>
      <Route path="/items/new">
        <Form handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
      </Route>
      <Route path="/items/:id">
        <ItemsDetails addToCart={addToCart}
        handleDelete={handleDelete}/>
      </Route>
      <Route path="/items">
         <Search handleSearch={handleSearch}/>
         <FavoritesContainer 
         items={items} 
         categoryList={categoryList} 
         handleCategory={handleCategory}
         />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
