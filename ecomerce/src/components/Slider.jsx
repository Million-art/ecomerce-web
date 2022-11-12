import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Container=styled.div`
display: flex;
width: 100%;
height: 100vh;
align-items:center;
`
const Arrow=styled.div`
display:flex;
width: 100%;
justify-content:space-between;
align-items:center;
margin-left:20px;
margin-right:20px;



`
export const Slider = () => {
  return (
    <div>
        <Container>
            <Arrow>
             <ArrowBackIosIcon />
              <ArrowForwardIosIcon />
            </Arrow>
        </Container>
    </div>
  )
}
