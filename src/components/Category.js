import React from 'react'

const Category = ({categoryStr, handleCategory}) => {
  return (
    <div onClick={() => handleCategory(categoryStr)} style={{margin: "20px"}}>
     {categoryStr}
    </div>
  )
}

export default Category