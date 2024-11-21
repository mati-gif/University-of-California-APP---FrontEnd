import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home'
import Register from './pages/Register'
import Hola from './pages/CarreerCarouselHome'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import CarreerCarouselHome from './pages/CarreerCarouselHome'
import SedesHome from './components/SedesHome'
import TheUniversity from './components/TheUniversity'
import MoreHistoyOfUniversity from './pages/MoreHistoyOfUniversity'
import Community from './components/Community'
import Ingreso from './components/Ingreso'
import FollowUs from './components/FollowUs'
import FooterHome from './pages/FooterHome'

import MainLayout from './layout/MainLayout'
import ExperienciaUC from './pages/ExperienciaUC'
import Becas from './pages/Becas'
import Prestamos from './pages/Prestamos'
import Reducciones from './pages/Reducciones'
import Premios from './pages/Premios'
import ColegiosDocentesEInstituciones from './pages/ColegiosDocentesEInstituciones'
import ContactoIngreso from './pages/ContactoIngreso'
import OrientacionVocacional from './pages/OrientacionVocacional'
import LosAngeles from './pages/LosAngeles'
import SanDiego from './pages/SanDiego'
// import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainLayout/>}>
            {/* Esto indica que Home es el índice dentro de MainLayout */}
            <Route index element={<Home/>} />
            <Route  element={<CarreerCarouselHome/>}/>
            <Route element={<SedesHome/>}/>
            <Route element={<Ingreso/>}/>
            <Route  element={<Community/>}/>
          <Route path='/historyUniversity' element={<MoreHistoyOfUniversity/>}/>
          <Route path='/experienciaUC' element={<ExperienciaUC/>}/>
          <Route path='/becas' element={<Becas/>} />
          <Route path='/prestamos' element={<Prestamos/>} />
          <Route path='/reducciones' element={<Reducciones/>}/>
          <Route path='/premios' element={<Premios/>} />
          <Route path='/colegiosDocenEInstitu' element={<ColegiosDocentesEInstituciones/>} />
          <Route path='/contactoIngreso' element={<ContactoIngreso/>} />
          <Route path='/orientacionVocacional' element={<OrientacionVocacional/>} />
          <Route path='/losAngeles' element={<LosAngeles/>} />
          <Route path='/sanDiego' element={<SanDiego/>} />


          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
