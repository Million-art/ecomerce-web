import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Img from './Img.jsx'
import {Container} from './Slider.style.jsx'

 
export const Slider = () => {
  
  return (
<div>
  <Container>
    {Img.map((image,index)=>{
      return(
        <slid key={image.id}>
        <img src={image.img}/> 
        <info>
        <h1>{image.title}</h1>
        <p>{image.text} </p>
        <button>Buy now</button>
        </info>
        </slid>
      )
    })}
         
   </Container>
</div>
  )
}
