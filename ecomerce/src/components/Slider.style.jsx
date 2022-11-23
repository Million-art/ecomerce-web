import styled from 'styled-components'
export const Container=styled.div`

display: flex;
border-radius:20px;
height: 100vh;
align-items:center;
justify-content:center;
position: relative;

margin:10px;
     .wrapper{
         background-size:cover;
        background-reapet:no-repeat;
        background-position:center;
        width: 100%;
        height: 100%;
        display:flex;
        border-radius:20px;
          .left{
                display:grid;
                place-items:center;
                width:5%;
                background-color:rgb(2,2,2,0.6);
                cursor:pointer;
                border-top-left-radius:20px ; 
                border-bottom-left-radius:20px ; 
                color:white;


            }
            .center{
                width:90%;
                display:grid;
                place-items:center;
                
                .title{
                     color:black;
                     background-color:rgb(255,255,255,0.2);
                     border-radius:20px;
                     padding:10px;

                }
                .txt{
                     font-size:23px;
                     background-color:rgb(255,255,255,0.2);
                     border-radius:20px;
                     padding:10px;


                    
                }
                .btn-shopeNow{
                    color:wheat;
                    letter-spacing:5px;
                    padding:10px;
                    cursor:pointer;
                    border-radius:20px;
                    background-color:rgb(2,25,5,0.8);
                }
            }
            .right{
                display:grid;
                place-items:center;
                width:5%;
                background-color:rgb(2,2,2,0.6);
                cursor:pointer;
                border-top-right-radius:20px ;
                border-bottom-right-radius:20px ; 
                color:white;
 

             }
    }

`
   