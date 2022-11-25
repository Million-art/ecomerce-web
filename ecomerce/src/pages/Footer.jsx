import { Facebook, Instagram, Telegram, Twitter } from '@mui/icons-material'
import React from 'react'
import Styled  from 'styled-components'

export const Footer = () => {
    const Container =Styled.div`
     
        width:100%;
        height:250px;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        background-color:white;

    `
    const InnerContainer=Styled.div`
        margin:20px;
        width:98%;
        height:250px;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        background-color:rgb(15,15,10);
        color: white;
        border-radius:10px;
    `
    const Left =Styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    `
    const Right =Styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    gap: 20px;
    align-items: center;
    justify-content: center;
        
    `
    const Center =Styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    `
    const Icon=Styled.div`
    display: flex;
    flex-direction:row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    `
    const small =Styled.div`
    color: white;
    `
  return (
    <Container>
        <InnerContainer> 
            <Left>
                <h6>Home</h6>
                <h6>Products</h6>
                <h6>Catagories</h6>

            </Left>
            <Center>
                <h5>send feedback</h5>
                <h5>privecy & policy</h5>
                <h5>affilitate market </h5>
            </Center>
            <Right>
                <h3> FOLLOW-US</h3>
                <Icon>
                    <Facebook />
                    <Telegram />
                    <Twitter />
                    <Instagram />
                </Icon>
            </Right>
        </InnerContainer>
        <small>developed by Million Mulugeta 2023</small>
    </Container>
  )
}
