import React from 'react'
import styled from 'styled-components'
import {CatagoriesData} from './CatagoriesData'
 
const Container = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin:30px 20px;
      .wrapper{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:100%;
        height:250px;
        margin-top:10px;
        gap:10px;
            .item-container{
              
              width:100%;
              height: 90%;
              position: relative;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
               
                  img{
                    border-radius:20px;
                      width:100%;
                      display:flex;
                      flex-direction:column;
                      height:100%;
                      margin :10px;
                      
                       
                  }
                  .info{
                        position: absolute;
                        display:flex;
                        flex-direction:column;
                        gap: 10px;
                   
                        h5{
                          color: gold;
                          font-size:15px;
                        }
                      button{
                        background-color:black;
                        border-radius:10px;
                        color:white;
                      }
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
              <div  className='item-container' >
                <img src={item.img} />
                <div className='info'>
                    <h5>{item.title}</h5>
                    <button>SHOP NOW</button>
                </div>
              </div>

          ))}
         </div>

  </Container>
      )
}
