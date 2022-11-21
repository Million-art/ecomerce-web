import React from 'react'
import styled from 'styled-components'
import {CatagoriesData} from './CatagoriesData'
import {CatagoriesItem} from './CatagoriesItem'

const Container = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 margin-top:22px;
     .wrapper{
        display:flex;
        flex-direction:row;
        justify-content:center;
        width:100vw;
        height:100vh;
       
            .item-container{
              display:grid;
              width:100%;
              height:300px;
              position:relative;
                  img{
                    width:300px;
                    height:auto;
                  }
                  h5{
                    display:flex;
                    justify-content:center;
                    position:absolute;
                    position:absolute;
                    margin-left:112px; 
                    margin-top:80px;
                  }
                  button{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    position:absolute;
                    margin:110px;             
                  }
            }
    }
`
export const Catagories = () => {
    return (
  <Container>
        <h1>catagories</h1>
        <div   className='wrapper'>
            {CatagoriesData.map((item)=>(
              <div  className='item-container'>
                <img src={item.img} />
                <h5>{item.title}</h5>
                <button>SHOP NOW</button>
              </div>

          ))}
         </div>

  </Container>
      )
}
