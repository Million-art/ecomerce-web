import styled from 'styled-components'
export const Container=styled.div`

display: flex;
width: 100%;
height: 100vh;
align-items:center;
justify-content:center;
position: relative;
background-size:cover;
background-reapet:no-repeat;
background-position:center;

    .wrapper{
        width: 100%;
        height: 100%;
        display:flex;
          .left{
                display:grid;
                place-items:center;
                width:5%;
                background-color:rgb(255,255,255,0.2);
                cursor:pointer;

            }
            .center{
                width:90%;
                display:grid;
                place-items:center;
                
                .title{
                     color:green;
                     background-color:rgb(255,255,255,0.7)

                }
                .txt{
                     font-size:23px;
                     background-color:rgb(255,255,255,0.7)
                    
                }
                .btn-shopeNow{
                    background-color:rgb(5,5,5,0.7);
                    color:wheat;
                    letter-spacing:5px;
                    padding:10px;
                    cursor:pointer;
                }
            }
            .right{
                display:grid;
                place-items:center;
                width:5%;
                background-color:rgb(255,255,255,0.2);
                cursor:pointer;

             }
    }

`
   