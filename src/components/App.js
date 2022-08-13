import React, {useState, useEffect} from "react";
import { Switch,useHistory , Route} from "react-router-dom";
import FavoritesContainer from "./FavoritesContainer";
import "./style.css"
import Form from "./Form";
import Search from "./Search";
import RenderCart from "./RenderCart"
import ItemsDetails from "./ItemsDetails";
import styled,{ThemeProvider} from "styled-components";
import Header from "./Header";

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
  const history = useHistory()

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
      history.push("/items")

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
      history.push("/items")

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
    history.push("/items")
  }

  const handleCategory = (categoryStr) => {
    const filterCategory = allItems.filter(itemsObj => itemsObj.type === categoryStr)
   setItems(filterCategory)
  }
  
  //const renderCart = () => {
    //console.log("addCArt")

  //}

  // const handleCartClick = () => {
    // return(
     // <RenderCart cart={cart}/>       
     //)
     //history.push("/RenderCart")  
   //}

  return (
    <ThemeProvider theme={theme}>
    <div>
     <RenderCart cart={cart}/>
     <Header/>
     <Switch>
      <Route exact path="/items/new">
        <Form handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
      </Route>
      <Route exact path="/items/:id">
        <ItemsDetails addToCart={addToCart}
        handleDelete={handleDelete}/>
      </Route>
      <Route exact path="/items">
         <Search handleSearch={handleSearch}/>
         <FavoritesContainer 
         items={items} 
         categoryList={categoryList} 
         handleCategory={handleCategory}
         />
      </Route>
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;
const theme = {
  font:{
    primary:"'Dancing Script', cursive",
    secondary:"'Roboto', sans-serif"
  }
}
