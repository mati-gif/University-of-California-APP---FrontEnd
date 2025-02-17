import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home'
import Register from './pages/Register'
import Hola from './pages/CarreerCarouselHome'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import CienciasEconomicas from './pages/CienciasEconomicas'
import DerechoYCienciasPoliticas from './pages/DerechoYCienciasPoliticas'
import IT from './pages/IT'
import Medicine from './pages/Medicine'
import Ingenieria from './pages/Ingenieria'
import CienciasSociales from './pages/CienciasSociales'
import Construccion from './pages/Construccion'
import MusicaYDiseño from './pages/MusicaYDiseño'
import Idiomas from './pages/Idiomas'
import { LogIn } from 'lucide-react'
import Login from './pages/Login'
import MyCourses from './pages/MyCourses'
import { useSelector } from 'react-redux'
import PrivateLayout from './layout/PrivateLayout'
import PaginaPrincipal from './pages/PaginaPrincipal'
// import './App.css'

function App() {

  const isLoggedIn = useSelector((state) => state.authenticateUser.isLoggedIn)
  // const navigate = useNavigate() 
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/" element={<MainLayout />}>
                {/* Esto indica que Home es el índice dentro de MainLayout */}
                <Route index element={<Home />} />
                <Route element={<CarreerCarouselHome />} />
                <Route element={<SedesHome />} />
                <Route element={<Ingreso />} />
                <Route element={<Community />} />
                <Route path='/historyUniversity' element={<MoreHistoyOfUniversity />} />
                <Route path='/experienciaUC' element={<ExperienciaUC />} />
                <Route path='/becas' element={<Becas />} />
                <Route path='/prestamos' element={<Prestamos />} />
                <Route path='/reducciones' element={<Reducciones />} />
                <Route path='/premios' element={<Premios />} />
                <Route path='/colegiosDocenEInstitu' element={<ColegiosDocentesEInstituciones />} />
                <Route path='/contactoIngreso' element={<ContactoIngreso />} />
                <Route path='/orientacionVocacional' element={<OrientacionVocacional />} />
                <Route path='/losAngeles' element={<LosAngeles />} />
                <Route path='/sanDiego' element={<SanDiego />} />
                <Route path='/cienciasEconomicas' element={<CienciasEconomicas />} />
                <Route path='/derecho' element={<DerechoYCienciasPoliticas />} />
                <Route path='/IT' element={<IT />} />
                <Route path='/medicine' element={<Medicine />} />
                <Route path='/ingenieria' element={<Ingenieria />} />
                <Route path='/cienciasSociales' element={<CienciasSociales />} />
                <Route path='/construccion' element={<Construccion />} />
                <Route path='/musica' element={<MusicaYDiseño />} />
                <Route path='/idiomas' element={<Idiomas />} />
                {/* <Route path='/myCourses' element={<MyCourses />} /> */}

              </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <Route path="/" element={<PrivateLayout />}>
            {/* <Route  index element={<MyCourses  />} /> */}
            <Route path='/myCourses' element={<MyCourses/>} />
            <Route path='/paginaPrincipal' element={<PaginaPrincipal/>} />
            <Route path="*" element={<Navigate to="/myCourses" />} /> // Redirige usuarios logueados

          </Route>
          )
          }

          {/* {isLoggedIn && (

            <Route path="/" element={<PrivateLayout />}>
              <Route path='/paginaPrincipal' element={<PaginaPrincipal />} />
              <Route path='/myCourses' element={<MyCourses />} />
            </Route>
          )} */}
          {/* 🔹 Manejo de rutas inexistentes */}
          <Route path="*" element={isLoggedIn ? "/myCourses" : "/"} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
