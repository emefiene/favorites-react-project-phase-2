import React from 'react'

const Form = ({handleSubmit,handleChange, formData}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        aria-label="name"
        value={formData.name}
        onChange={handleChange}
     ></input>
     <label>Image</label>
     <input
        type="src"
        name="image"
        aria-label="image"
        value={formData.image}
        onChange={handleChange}
     ></input>
     <label>Type</label>
     <input
        type="text"
        name="type"
        aria-label="type"
        value={formData.type}
        onChange={handleChange}
     ></input>
     <label>Price</label>
     <input
        type="number"
        name="price"
        aria-label="price"
        value={formData.price}
        onChange={handleChange}
     ></input>
     <input type="submit"/>
    </form>
  )
}

export default Form

