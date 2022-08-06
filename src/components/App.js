import React, {useState, useEffect} from "react";
import FavoritesContainer from "./FavoritesContainer";
function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then(res => res.json())
    .then(data => {
      setItems(data)
    })

  }, [])


  return (
    <div className="App">
     <h1>Hello World!</h1>
     <FavoritesContainer data={data}/>
    </div>
  );
}

export default App;
