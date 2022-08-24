import React from 'react'
import Category from './Category'
import FavoritesCard from './FavoritesCard'
import styled from 'styled-components'
import ClickMe from './ClickMe'

const FavoritesContainer = ({items, categoryList,handleCategory}) => {
  return (
    <div>
      <CategoryStyle style={{display: "flex"}}>
      {categoryList.map((categoryStr,id) => <Category categoryStr={categoryStr} key={id} handleCategory={handleCategory} />)}
      </CategoryStyle>
      <Items>
      {items.map((itemsObj, index) => <FavoritesCard itemsObj={itemsObj}  key={index} />)}
      </Items>
    </div>
  )
}

export default FavoritesContainer

const Items = styled.div`
  display: flex;
  flex-wrap:wrap;
  div:hover{
    width:400px;
    height:300px
  }
  justify-content:space-around;
`
const CategoryStyle = styled.div`
   display: flex;
   flex-wrap:wrap;
   justify-content:space-around;
   background-color:Aquamarine;
    div{
      border-right: 1px solid;
      paddingg-left: 2em;
      padding-right: 2em
    }

    div:last-child{
      border:none
    }
`

