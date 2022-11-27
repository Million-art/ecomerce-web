 
 import { Title } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { NewsLetter } from '../components/NewsLetter'
 
export const Products = () => {
    const Container=styled.div`
    
    `
    const Wrapper=styled.div`
    display: flex;
    flex-direction:row;
    width:100%;
    height:350px;
    background-color:gray;
    `
    const ImageContainer=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: center;
    `
    const Title=styled.div`
    flex:1;
    display:flex;
    align-items:center;
   
    ` 
  return (
    <Container>
        <Announcement />
        <NavBar />
        <Wrapper>
            <ImageContainer>
                <h1>hellow world</h1>
             </ImageContainer>
             <Title>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium soluta sint aperiam blanditiis iste asperiores possimus nostrum culpa magnam perferendis</p>
             </Title>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

