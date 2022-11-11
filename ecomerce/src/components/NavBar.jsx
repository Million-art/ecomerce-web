import React from 'react'
import styled from 'styled-components'
  export const NavBar = () => {
     const Container=styled.div`
     background-color:black;
     color:white;
     height:60px;
      `
     const Wraper=styled.div`
        padding: 10px 20px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
       `
     const Left=styled.div`
      flex:1;
     `
     const Languge=styled.div`
      font-size:14px;
      cursor:pointer;     `
     const Center=styled.div`
      flex:1;
     `
     const SerchContainer=styled.div`
     
     `
     const Right=styled.div`
      flex :1;
     `


     return (
    <Container>
          <Wraper>
            <Left>
                <Languge> EN</Languge>
                <SerchContainer>
                 </SerchContainer>
            </Left>

            <Center>
                 <h4>MILLION SHOPE</h4>
            </Center>

            <Right>
                 cart 
            </Right>
          </Wraper>
     </Container>

  )
}
