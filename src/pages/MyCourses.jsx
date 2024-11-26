import React from 'react'
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaBell, FaCommentAlt } from 'react-icons/fa';
import logo from "../assets/9(sin fondo y otro color letras).png";


export default function MyCourses() {
    return (
        <>
            <div style={{minHeight:"100vh",
                border:"5px solid #2e2",
                width:" 100vw"
            }} class='header-courses'>
                <Navbar bg="white" expand="lg" className="border-bottom">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="150px"
                                height="150px"
                                className="d-inline-block align-top borde-black boder-[2px]"
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
                </Navbar>
            </div>
        </>
    )
}
