import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import FooterHome from '../pages/FooterHome'

function MainLayout() {
  return (
    
    <>
        <Header/>
        <main>
        <Outlet/>
        </main>
        <FooterHome/>
    </>
  )
}

export default MainLayout