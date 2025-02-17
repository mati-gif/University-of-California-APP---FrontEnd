import React from 'react'
import Header from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import FooterHome from '../pages/FooterHome'
import { useSelector } from 'react-redux'
import HeaderLogin from '../pages/HeaderLogin'

function MainLayout() {

  const isLoggedIn = useSelector((state) => state.authenticateUser.isLoggedIn)
  console.log(isLoggedIn);
  const location = useLocation();

  // Si el usuario está autenticado, solo debe ver `HeaderLogin` y `MyCourses`
  const showHeaderLogin = isLoggedIn && location.pathname === "/myCourses";

  return (
    
    <>
        {/* <Header/> */}
        {showHeaderLogin? <HeaderLogin/> : <Header/> }
        <main>
        <Outlet/>
        </main>
        <FooterHome/>
    </>
  )
}

export default MainLayout