import React, {useState, useEffect} from "react";
import FavoritesContainer from "./FavoritesContainer";
import Header from "./Header";
function App() {
  const [items, setItems] = useState([])
  cons  [categoryList, setCategoryList] = useEffect([])

  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then(res => res.json())
    .then(data => {
      setItems(data)
    })

  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/category")
    .then(res => res.json())
    .then(category => {
      setCategoryList(category)

    })
  }, [])


  return (
    <div className="App">
     <h1>Hello World!</h1>
     <Header />
     <FavoritesContainer items={items} categoryList={categoryList}/>
    </div>
  );
}

export default App;
