import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaBell, FaCommentAlt } from 'react-icons/fa';
import logo from "../assets/9(sin fondo y otro color letras).png";
import "../Styles/headerLogin.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/actions/authAction';
import Swal from 'sweetalert2';

function HeaderLogin() {
    const location = useLocation(); // Usamos useLocation para obtener la ruta actual
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // Función que determina si el enlace está activo según la ruta
    const isActive = (hash) => location.hash === hash;
    // Verificar si Home está activo
    const isActive2 = () => location.pathname === "/myCourses" && (!location.hash || location.hash === "#");

    // Estado para controlar el hover
    const [hovered, setHovered] = useState(null);

    const { isLoggedIn, name, token, email, status } = useSelector((state) => state.authenticateUser)


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

    const handleLogout =  async () =>{

        try {

            await dispatch(logoutUser());

            Swal.fire({
                title: 'Logged Out',
                text: 'You have been logged out successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                navigate('/'); // Redirige al usuario al login después de cerrar sesión
            });
        } catch (error) {
            Swal.fire({
                title: 'Logout Failed',
                text: 'There was a problem logging out. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
        
    }
    return (
        <>
            <Nav
                activeKey="/home"
                className="fixed-top"
                style={{ backgroundColor: "#fff", height: "14%" }} // Color de fondo
            >
                <Nav.Item class="nav-item__header2 ">
                    {/* Logo a la izquierda */}
                    <div class="div_img__header2 ">
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
                    <div class="div__buttons__header_2 d-flex justify-content-center w-100">
                        <Nav.Link
                            href=""
                            className={`text-black fs-5 ${isActive("/") || hovered === 0
                                ? "border-bottom border-black"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(0)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                height: "80%", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
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

                            style={{
                                height: "80%", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            Área personal
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleSectionClick("/myCourses")}
                            href="/myCourses"
                            className={`text-black fs-5 ${isActive2("/myCourses") || hovered === 2
                                ? "border-bottom border-black"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(2)}
                            onMouseLeave={() => setHovered(null)}

                            style={{
                                height: "80%", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            Mis cursos
                        </Nav.Link>
                    </div>
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
                                Profile
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={handleLogout}>Logout</Dropdown.Item>
                                {/* <Dropdown.Item href="#/action-2">Español</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </Nav.Item>
            </Nav>
        </>
    )
}

export default HeaderLogin