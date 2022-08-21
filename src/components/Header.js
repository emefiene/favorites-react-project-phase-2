import React from 'react'
import styledComponents from 'styled-components'

const Header = () => {
  return (
    <Head>
      <h1><strong>Favorites</strong></h1>
      <h1><strong>Welcome to Favorites</strong></h1>
    </Head>
  )
}

export default Header

const Head = styledComponents.div`
  background-color:Aquamarine;
  text-align:center;
   
  h1{
    font-family: ${props => props.theme.font.secondary}
  } 

`