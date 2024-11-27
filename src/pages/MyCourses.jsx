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
                minHeight: "110vh",
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
                            <Dropdown.Item href="#/action-6">Removed from view</Dropdown.Item>
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


                    <div class='card__header-container'>
                        <div class="card-header2c">
                            <div class="text_header2c">
                                <p class="subtitle-header2cc">3th grade</p>
                                <span>Lorem ipsum dolor sit amet</span>
                            </div>

                            <div class="icons-header2cc">
                                <div class="btn-header2cc" >
                                    <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" class="svg-icon-header2cc">
                                        <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z">
                                        </path>
                                    </svg>




                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
