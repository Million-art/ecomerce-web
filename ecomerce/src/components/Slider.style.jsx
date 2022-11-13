import styled from 'styled-components'
export const Container=styled.div`

display: flex;
width: 100%;
height: 100vh;
align-items:center;
position: relative;

    slid{
        margin-top:20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        min-width:100%;
        height: 400px;
        overflow-x: hidden;
        position: relative;

            img{
                width: 100vw;
                margin-left: 10px;
                 height:100%
            }
            info{
                
                width: 50%;
                height: 400px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: black;
                position: absolute;
                h1{
                     
                }
                    p{
                        letter-spacing:3px;
                        font-size:18px;
                        font-weight:bold;
                        text-align: center;
                        margin:40px 0px;
                     }
                    button{
                        padding: 10px;
                        background:transparent;
                        border-radius:10px;
                        color:wheat;
                    }
                    button:hover{
                        background:black;
                    }
            }
}

`
   