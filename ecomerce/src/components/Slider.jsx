import {useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slides from './SliderData.jsx'
import {Container} from './Slider.style.jsx'

 
export const Slider = () => {
  const [curruntImage, setCurrentImage] =useState(1)
  function changeToLeft(){
    curruntImage > 0 && setCurrentImage(curruntImage-1)
  }
  function changeToRight(){
    curruntImage < Slides.length-1 && setCurrentImage(curruntImage+1)
  }
  return (
<div>
  <Container>
    <div className='wrapper' style={{backgroundImage:`url(${Slides[curruntImage].img})`}}>
        <div className="left">
          <ArrowBackIosIcon onClick={changeToLeft} />
        </div>
        <div className="center">
          <div className='title'>
              <h1> {Slides[curruntImage].title} </h1>
            </div>
           <div className='txt'>
              <p>{Slides[curruntImage].text}</p>
            </div>
        </div>
        <div className="right">
          <ArrowForwardIosIcon onClick={changeToRight} />
        </div>
    </div>
   </Container>
</div>
  )
}
