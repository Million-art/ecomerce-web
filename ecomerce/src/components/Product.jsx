import React from 'react'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import Visibility from '@mui/icons-material/Visibility';
import products from './Products'
import { Container } from './Slider.style'
import styled from "styled-components";
 export const Product = () => {
  
const Container=styled.div`
width:100%;
height:auto;
 display:flex;
margin-top:20px;
flex-direction:column;
justify-content:center;
align-items:center;
      .products{
        margin-top:20px;
        width:100%;
        height:auto;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap: 10px;
        flex-wrap: wrap;

          .product-list{
            position: relative;
            display:grid;
            place-items:center;
              
              img{
                border-radius:20px;      
                display:flex;
                flex-direction:row;
                justify-content:center;
                align-items:center;
              }
          }
    }    

`
const Icons = styled.div`
  position:absolute;
  opacity:0;
  gap: 20px;
  &: hover{
  display:flex;
  opacity:1;
 
 }
`
const Icon=styled.div`
background-color:white;
border-radius:50%;
padding:5px;
display:flex;
align-items:center;
justify-content:center;
`
 
  return (
    <Container> 
         <h1>  Products </h1>
          <div className="products">
              {
                products.map((product) =>
                
                    <div className='product-list'>
                      <Icons>
                          <Icon > 
                              <ShoppingCartOutlined />
                          </Icon>
                          <Icon >
                              <FavoriteBorderOutlined />
                          </Icon>
                          <Icon> 
                              <Visibility />
                          </Icon>
                      </Icons>
                        <img src={product.img} />
                        <h4>{product.title}</h4>
                    </div>
                )
              }
          </div> 
    </Container>
  )
}
