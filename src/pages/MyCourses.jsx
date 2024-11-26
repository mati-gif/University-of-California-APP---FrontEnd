import React, { useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaSearch, FaBell, FaCommentAlt } from 'react-icons/fa';
import logo from "../assets/9(sin fondo y otro color letras).png";
import "../Styles/myCourses.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
                width: " 100vw",
                marginTop: "100px",
                backgroundColor: "#EEF5F9"
            }}>
                <HeaderLogin />

                <h1 class='h1_login__2header2'>¡ Hello,Matias Soria !👋</h1>
                <div class='div__1--header2'>
                    <h2 class='h2__header2'>
                        Course Overview
                    </h2>
                    <div class='div--header-3Botones'>
                        <DropdownButton id="dropdown-basic-button" title="All">
                            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Past</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-5">Starred</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item  href="#/action-6">Removed from view</Dropdown.Item>
                        </DropdownButton>
                        <input class='input-Buscar2--headerMyCourses' type="text" placeholder='Search' />
                        <DropdownButton id="dropdow--header2B" title="Sort By">
                            <Dropdown.Item href="#/action-1">Sort by name course</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sort by last access</Dropdown.Item>
                        </DropdownButton>
                        <select name="" id="select-header">
                        <option value="">Sort To</option>
                        <option value="">Sort by name course</option>
                        <option value="">Sort by last access</option>
                        </select>
                        <DropdownButton id="dropdow--header2C" title="View">
                            <Dropdown.Item href="#/action-1">Card</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">List</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Resume</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </>
    )
}
