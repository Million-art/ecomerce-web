import React from 'react'
import { NavBar } from '../components/NavBar'
import { Announcement } from '../components/Announcement'
import {Slider} from '../components/Slider'
import {Catagories} from '../components/Catagories.jsx'

 export const Home = () => {
  return (
    <div>
        <Announcement/>
        <NavBar />
        <Slider />
        <Catagories />
    </div>
  )
}



 