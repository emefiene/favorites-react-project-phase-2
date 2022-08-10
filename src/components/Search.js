import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div style={{display:"flex", margin:"20px"}}>
      <input type="text" onChange={handleSearch}></input>
      
    </div>
  )
}

export default Search