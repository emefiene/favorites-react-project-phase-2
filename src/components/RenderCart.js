import React from 'react'

const Cart = ({cart}) => {
    console.log(cart)
  return (
    <h2 style={{textAlign:"center"}} >Cart🛒:{cart.length}</h2>
  )
}

export default Cart