import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/4.png";

function Header() {

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
                <Nav
                activeKey="/home"
                className="fixed-top"
                style={{ backgroundColor: "#003567", height: "14%" }} // Color de fondo
            >
                <Nav.Item className="d-flex justify-content-between align-items-center w-100">
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
                            className={`text-white fs-5 ${isActive2("/") || hovered === 0
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(0)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleSectionClick("#careers")}
                            href="#careers"
                            className={`text-white fs-5 ${isActive("#careers") || hovered === 1
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(1)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Carreers
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleSectionClick("#locations")}
                            href="#locations"
                            className={`text-white fs-5 ${isActive("#locations") || hovered === 2
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(2)}
                            onMouseLeave={() => setHovered(null)}
                        >
                        Locations
                        </Nav.Link>
                        <Nav.Link
                            href="/historyUniversity"
                            className={`text-white fs-5 ${isActive("/university") || hovered === 3
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(3)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            The University
                        </Nav.Link>
                        <Nav.Link
                        onClick={() => handleSectionClick("#ingreso")}
                            href="#ingreso"
                            className={`text-white fs-5 ${isActive("#ingreso") || hovered === 4
                                ? "border-bottom border-white"
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
                            className={`text-white fs-5 ${isActive("#news") || hovered === 5
                                ? "border-bottom border-white"
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
                            className={`text-white fs-5 ${isActive("#community") || hovered === 6
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(6)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Community
                        </Nav.Link>
                    </div>

                    {/* Login posicionado a la derecha con un pequeño margen */}
                    <div className="ml-auto">
                        <Nav.Link
                        
                            // href="/login"
                            className={`text-white fs-5 ${isActive("/login") || hovered === 7
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            style={{ marginRight: "20px" }}
                            onMouseEnter={() => handleHover(7)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Login
                        </Nav.Link>
                    </div>
                </Nav.Item>
            </Nav>
    </>
  )
}

export default Header