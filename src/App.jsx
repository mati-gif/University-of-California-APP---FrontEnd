import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home'
import Register from './pages/Register'
import Hola from './pages/CarreerCarouselHome'
import { BrowserRouter } from 'react-router-dom'
import CarreerCarouselHome from './pages/CarreerCarouselHome'
import SedesHome from './components/SedesHome'
import TheUniversity from './components/TheUniversity'
import MoreHistoyOfUniversity from './pages/MoreHistoyOfUniversity'
import Community from './components/Community'
import Ingreso from './components/Ingreso'
import FollowUs from './components/FollowUs'
import FooterHome from './pages/FooterHome'
// import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Home /> 
    </BrowserRouter>
    {/* <Register/>*/}

    {/* <MoreHistoyOfUniversity/> */}
    </>
  )
}

export default App
