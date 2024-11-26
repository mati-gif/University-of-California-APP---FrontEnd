import React, { useState } from 'react'
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaBell, FaCommentAlt } from 'react-icons/fa';
import logo from "../assets/9(sin fondo y otro color letras).png";
import "../Styles/myCourses.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';


export default function MyCourses() {


    const location = useLocation(); // Usamos useLocation para obtener la ruta actual
    const navigate = useNavigate();
    // Función que determina si el enlace está activo según la ruta
    const isActive = (hash) => location.hash === hash;
    // Verificar si Home está activo
    const isActive2 = () => location.pathname === "/" && (!location.hash || location.hash === "#");

    // Estado para controlar el hover
    const [hovered, setHovered] = useState(null);

    // Función para manejar el hover de los links
    const handleHover = (index) => {
        setHovered(index);
    };


    // Manejar clics en secciones
    const handleSectionClick = (hash) => {
        if (location.pathname !== "/") {
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
                {/* <Navbar bg="white" expand="lg" className="border-bottom">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}

                                class="img__log-myCourses d-inline-block align-top borde-black boder-[2px]"
                                alt="UCA logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Página Principal</Nav.Link>
                                <Nav.Link href="#area-personal">Área personal</Nav.Link>
                                <Nav.Link href="#mis-cursos">Mis cursos</Nav.Link>
                            </Nav>
                            <div className="d-flex align-items-center">
                                <Button variant="outline-secondary" className="me-2">
                                    <FaSearch />
                                </Button>
                                <Button variant="outline-secondary" className="me-2">
                                    <FaBell />
                                </Button>
                                <Button variant="outline-secondary" className="me-2">
                                    <FaCommentAlt />
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                        MS
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Español</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}

                <Nav
                    activeKey="/home"
                    className="fixed-top"
                    style={{ backgroundColor: "#fff", height: "14%", borderBottom: "1px solid #000" }} // Color de fondo
                >
                    <Nav.Item className="d-flex justify-content-center align-items-center w-100">
                        {/* Logo a la izquierda */}
                        <div className="d-flex align-items-center">
                            <img
                                src={logo} // Reemplaza con la URL de tu logo
                                alt="Logo"
                                style={{
                                    height: "85px",
                                    marginLeft: "10px",
                                    width: "195px",
                                    objectFit: "cover",
                                }} // Ajusta el tamaño del logo
                            />
                        </div>

                        {/* Enlaces de navegación (centrados) */}
                        <div className="d-flex justify-content-center w-100">
                            <Nav.Link
                                href="/"
                                className={`text-black fs-5 ${isActive2("/") || hovered === 0
                                    ? "border-bottom border-black"
                                    : ""
                                    }`}
                                onMouseEnter={() => handleHover(0)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Página Principal
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleSectionClick("#careers")}
                                href="#careers"
                                className={`text-black fs-5 ${isActive("#careers") || hovered === 1
                                    ? "border-bottom border-black"
                                    : ""
                                    }`}
                                onMouseEnter={() => handleHover(1)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Área personal
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleSectionClick("#locations")}
                                href="#locations"
                                className={`text-black fs-5 ${isActive("#locations") || hovered === 2
                                    ? "border-bottom border-black"
                                    : ""
                                    }`}
                                onMouseEnter={() => handleHover(2)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Mis cursos
                            </Nav.Link>
                            {/* <Nav.Link
                                href="/historyUniversity"
                                className={`text-black fs-5 ${isActive("/university") || hovered === 3
                                    ? "border-bottom border-black"
                                    : ""
                                    }`}
                                onMouseEnter={() => handleHover(3)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                The University
                            </Nav.Link> */}
                            {/* <Nav.Link
                                onClick={() => handleSectionClick("#ingreso")}
                                href="#ingreso"
                                className={`text-black fs-5 ${isActive("#ingreso") || hovered === 4
                                    ? "border-bottom border-black"
                                    : ""
                                    }`}
                                onMouseEnter={() => handleHover(4)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Income
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleSectionClick("#news")}
                                href="#news"
                                className={`text-black fs-5 ${isActive("#news") || hovered === 5
                                    ? "border-bottom border-black"
                                    : ""
                                    }`}
                                onMouseEnter={() => handleHover(5)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                News
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleSectionClick("#community")}
                                href="#community"
                                className={`text-black fs-5 ${isActive("#community") || hovered === 6
                                    ? "border-bottom border-black"
                                    : ""
                                    }`}
                                onMouseEnter={() => handleHover(6)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Community
                            </Nav.Link> */}
                        </div>

                        {/* Login posicionado a la derecha con un pequeño margen */}
                        <div className="ml-auto">
                            {/* <Nav.Link
                            href="/login"
                            className={`text-black fs-5 ${isActive("/login") || hovered === 7
                                ? "border-bottom border-black"
                                : ""
                                }`}
                            style={{ marginRight: "20px" }}
                            onMouseEnter={() => handleHover(7)}
                            onMouseLeave={() => setHovered(null)}
                        > */}
                            <div class="div-header__loguitos ">
                                <Button variant="outline-secondary" className="me-2">
                                    <FaSearch />
                                </Button>
                                <Button variant="outline-secondary" className="me-2">
                                    <FaBell />
                                </Button>
                                <Button variant="outline-secondary" className="me-2">
                                    <FaCommentAlt />
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                        MS
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Español</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Nav.Item>
                </Nav>
            </div>
        </>
    )
}
