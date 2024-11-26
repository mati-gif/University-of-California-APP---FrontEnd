import React, { useState } from 'react'
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaBell, FaCommentAlt } from 'react-icons/fa';
import logo from "../assets/9(sin fondo y otro color letras).png";
import "../Styles/myCourses.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';


export default function MyCourses() {


    const location = useLocation(); // Usamos useLocation para obtener la ruta actual
    const navigate = useNavigate();
    // Función que determina si el enlace está activo según la ruta
    const isActive = (hash) => location.hash === hash;
    // Verificar si Home está activo
    const isActive2 = () => location.pathname === "/myCourses" && (!location.hash || location.hash === "#");

    // Estado para controlar el hover
    const [hovered, setHovered] = useState(null);

    // Función para manejar el hover de los links
    const handleHover = (index) => {
        setHovered(index);
    };


    // Manejar clics en secciones
    const handleSectionClick = (hash) => {
        if (location.pathname !== "/myCourses") {
            navigate(`/${hash}`); // Redirige al Home con el hash
        } else {
            window.location.hash = hash; // Ajusta el hash directamente si ya estás en Home
        }
    };
    return (
        <>
            <div style={{
                minHeight: "100vh",
                border: "5px solid #2e2",
                width: " 100vw"
            }}>
                <HeaderLogin/>

                <h1 class='h1_login__header'>¡ Hello,Matias Soria !👋</h1>
            </div>
        </>
    )
}
