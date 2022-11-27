 import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { NewsLetter } from '../components/NewsLetter'
import { Product } from '../components/Product'
export const ProductList = () => {
 const Container=styled.div`
 
 `

 const FilterContainer=styled.div`
 display: flex;
 justify-content: space-between;
 margin:0px 40px;
 `

 const Title=styled.div`
margin:40px;
 `

 const Filter=styled.div`
 display: flex;
 flex-direction: row;
 gap: 10px;
 `
 const FilterText=styled.div`
 font-weight:600;
 font-size:20px;
 `
 const select=styled.div`
 
  
 `
 const option=styled.div`
 
 `
  return (
    <Container>
            <Announcement />
            <NavBar />
            <Title>Brand Phones</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                        <select> 
                            <option disabled selected>color </option>
                            <option >white </option>
                            <option >black </option>
                            <option >red </option>
                            <option >blue </option>
                        </select>
                         
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                        <select> 
                            <option disabled selected>size </option>
                            <option >Newest </option>
                            <option >Price(highest) </option>
                            <option >Price(Chipest) </option>
                             
                        </select>
                </Filter>
             </FilterContainer>
             <Product />
            <NewsLetter />
            <Footer />
    </Container>
  )
}
