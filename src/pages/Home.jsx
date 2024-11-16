// import React, { useState } from 'react'
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Navbar, NavDropdown, Container } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import { useLocation } from 'react-router-dom'; // Importamos useLocation

// function Home() {

//     const location = useLocation(); // Usamos useLocation para obtener la ruta actual

//     // Función que determina si el enlace está activo según la ruta
//     const isActive = (path) => location.pathname === path;

//     return (

//         <Nav
//         activeKey="/home"
//         className="fixed-top"
//         style={{ backgroundColor: '#003567', height: '14%' }} // Color de fondo
//     >
//         <Nav.Item className="d-flex justify-content-between align-items-center w-100">
//             {/* Logo a la izquierda */}
//             <div className="d-flex align-items-center">
//                 <img
//                     src="https://via.placeholder.com/50" // Reemplaza con la URL de tu logo
//                     alt="Logo"
//                     style={{ height: '40px', marginLeft: '10px' }} // Ajusta el tamaño del logo
//                 />
//             </div>

//             {/* Enlaces de navegación (centrados) */}
//             <div className="d-flex justify-content-center w-100">
//                 <Nav.Link
//                     href="/home"
//                     className={`text-white fs-5 ${isActive('/home') ? 'border-bottom border-white' : ''} hover-effect`}
//                 >
//                     Carrers
//                 </Nav.Link>
//                 <Nav.Link
//                     href="/headquarters"
//                     className={`text-white fs-5 ${isActive('/headquarters') ? 'border-bottom border-white' : ''} hover-effect`}
//                 >
//                     Headquarters
//                 </Nav.Link>
//                 <Nav.Link
//                     href="/university"
//                     className={`text-white fs-5 ${isActive('/university') ? 'border-bottom border-white' : ''} hover-effect`}
//                 >
//                     The University
//                 </Nav.Link>
//                 <Nav.Link
//                     href="/scholarships"
//                     className={`text-white fs-5 ${isActive('/scholarships') ? 'border-bottom border-white' : ''} hover-effect`}
//                 >
//                     Scholarships
//                 </Nav.Link>
//                 <Nav.Link
//                     href="/news"
//                     className={`text-white fs-5 ${isActive('/news') ? 'border-bottom border-white' : ''} hover-effect`}
//                 >
//                     News
//                 </Nav.Link>
//                 <Nav.Link
//                     href="/community"
//                     className={`text-white fs-5 ${isActive('/community') ? 'border-bottom border-white' : ''} hover-effect`}
//                 >
//                     Community
//                 </Nav.Link>
//             </div>

//             {/* Login posicionado a la derecha con un pequeño margen */}
//             <div className="ml-auto">
//                 <Nav.Link
//                     href="/login"
//                     className={`text-white fs-5 ${isActive('/login') ? 'border-bottom border-white' : ''} hover-effect`}
//                     style={{ marginRight: '20px' }}
//                 >
//                     Login
//                 </Nav.Link>
//             </div>
//         </Nav.Item>
//     </Nav>
//     )
// }

// export default Home

import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom"; // Importamos useLocation
import logo from "../assets/4.png";
import Carousel from "react-bootstrap/Carousel";
import firstImgCarousel from "../assets/Marzo2025.jpg";
import secondImgCarousel from "../assets/Postgrado.jpg";
import thirdImgCarousel from "../assets/Diplomas.jpg";
import fourImgCarousel from "../assets/news.jpg";
import fiveImgCarousel from "../assets/Ranking.jpg";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import CarreerCarouselHome from "./CarreerCarouselHome";
import SedesHome from "../components/SedesHome";
import TheUniversity from "../components/TheUniversity";
import Community from "../components/Community";
import Ingreso from "../components/Ingreso";
import FollowUs from "../components/FollowUs";
import FooterHome from "./FooterHome";
import ExperienciaUC from "./ExperienciaUC";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
    const location = useLocation(); // Usamos useLocation para obtener la ruta actual

    // Función que determina si el enlace está activo según la ruta
    const isActive = (path) => location.pathname === path;

    // Estado para controlar el hover
    const [hovered, setHovered] = useState(null);

    // Función para manejar el hover de los links
    const handleHover = (index) => {
        setHovered(index);
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
                            href="/home"
                            className={`text-white fs-5 ${isActive("/home") || hovered === 0
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(0)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Carrers
                        </Nav.Link>
                        <Nav.Link
                            href="/headquarters"
                            className={`text-white fs-5 ${isActive("/headquarters") || hovered === 1
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(1)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Headquarters
                        </Nav.Link>
                        <Nav.Link
                            href="/university"
                            className={`text-white fs-5 ${isActive("/university") || hovered === 2
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(2)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            The University
                        </Nav.Link>
                        <Nav.Link
                            href="/scholarships"
                            className={`text-white fs-5 ${isActive("/scholarships") || hovered === 3
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(3)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Income
                        </Nav.Link>
                        <Nav.Link
                            href="/news"
                            className={`text-white fs-5 ${isActive("/news") || hovered === 4
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(4)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            News
                        </Nav.Link>
                        <Nav.Link
                            href="/community"
                            className={`text-white fs-5 ${isActive("/community") || hovered === 5
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            onMouseEnter={() => handleHover(5)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Community
                        </Nav.Link>
                    </div>

                    {/* Login posicionado a la derecha con un pequeño margen */}
                    <div className="ml-auto">
                        <Nav.Link
                            href="/login"
                            className={`text-white fs-5 ${isActive("/login") || hovered === 6
                                ? "border-bottom border-white"
                                : ""
                                }`}
                            style={{ marginRight: "20px" }}
                            onMouseEnter={() => handleHover(6)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Login
                        </Nav.Link>
                    </div>
                </Nav.Item>
            </Nav>

            <Carousel fade>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block "
                        src={fiveImgCarousel} // Cambia la URL según tus necesidades
                        alt="First slide"
                        style={{ width: "100vw", height: "90vh" }}
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block "
                        src={thirdImgCarousel} // Cambia la URL según tus necesidades
                        alt="First slide"
                        style={{ width: "100vw", height: "90vh" }}
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block "
                        src={fourImgCarousel} // Cambia la URL según tus necesidades
                        alt="First slide"
                        style={{ width: "100vw", height: "90vh" }}
                    />
                </Carousel.Item>
                {/* <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={secondImgCarousel}
                    alt="Second slide"
                    style={{  height: '90vh' }}

                />
            </Carousel.Item> */}
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block  "
                        src={firstImgCarousel}
                        alt="Third slide"
                        style={{ width: "100vw", height: "90vh", objectFit: "cover" }}
                    />
                </Carousel.Item>
            </Carousel>

            <div style={{ backgroundColor: "#73A6B5", border: "2px solid black", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <h2
                    style={{
                        border: "2px solid green",
                        padding: "5px",
                        textAlign: "center",
                        color: "#fff",
                        marginTop: "10px",
                    }}
                >
                    Carreers
                </h2>

            <CarreerCarouselHome/>

            </div >

            <div style={{ border: "2px solid red", minHeight: "100vh" }}>
                <h2
                    style={{
                        border: "2px solid green",
                        padding: "5px",
                        textAlign: "center",
                        color: "#003567",
                        marginTop: "10px",
                    }}
                >
                    News
                </h2>

                <div 
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        gridAutoRows: "200px",
                        gap: "10px",
                        maxWidth: "700px", // Ancho máximo para la grilla completa
                        margin: "auto", // Centra la grilla en la página
                    }}
                >
                    <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            // backgroundColor: '#bbb7',
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "18px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7)),
                        url('https://wadmin.uca.edu.ar/public/filters/medium/public/20220427/1651073090_WhatsApp%20Image%202022-04-05%20at%2012.26.36%20PM.jpg')
    `,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        {/* <p style={{ color:"#fff"  }}>kdjfhgdkfjghdkfjghk</p> */}
                        The UC Library
                    </div>

                    <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            // backgroundColor: '#bbb7',
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "18px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7)),
                        url('https://wadmin.uca.edu.ar/public/filters/medium/public/20210601/1622575781_edificio%20nuevo%20atras%20Facultad.JPG')
    `,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        New UC building
                    </div>
                    <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            // backgroundColor: '#bbb7',
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "18px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7)),
                        url('https://wadmin.uca.edu.ar/public/filters/medium/public/20191004/1570217449_2019-Ingreso-Consulta-Equivalencias.jpg')
    `,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        Part of the new UC parking lot
                    </div>
                    <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            // backgroundColor: '#bbb7',
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "18px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                            linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7)),
                            url('https://wadmin.uca.edu.ar/public/filters/medium/public/20240724/1721826101_Contabilidad.jpg')
`,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        Group of students in one of our study areas
                    </div>
                    <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            // backgroundColor: '#bbb7',
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "18px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7)),
                        url('https://wadmin.uca.edu.ar/public/filters/medium/public/20241025/1729873617_filo.jpg')
    `,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        Conference of the academic undersecretary of the UC
                    </div>
                    <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "15px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(7, 0, 5, 0.7)),
                        url('https://wadmin.uca.edu.ar/public/filters/mediumSquare/public/20241108/1731063822_2024-Derecho-Comillas-01.png')
`,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        UC Law Students will be able to complete their degree in Madrid,
                        Spain
                    </div>

                    <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            // backgroundColor: '#bbb7',
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "18px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7)),
                        url('https://wadmin.uca.edu.ar/public/filters/mediumSquare/public/20241030/1730308463_2%20bianca%20pallaro.jpg')
    `,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        Jane Maslow, a UC graduate in the New York Times
                    </div>

                    <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            // backgroundColor: '#bbb7',
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "18px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7)),
                        url('https://wadmin.uca.edu.ar/public/filters/mediumSquare/public/20241108/1731091186_2024-11-Rosario-Presentacion-Medicina-Kinesiologia-00.jpeg')
    `,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        Informative talk on business economics
                    </div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        style={{
                            // backgroundColor: '#bbb7',
                            border: "2px solid #ccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            fontSize: "18px",
                            textAlign: "center",
                            height: "100%", // Asegura que las celdas se mantengan con el tamaño de la fila
                            width: "100%", // Ocupa el 100% de la columna
                            backgroundImage: `
                        linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7)),
                        url('https://wadmin.uca.edu.ar/public/filters/mediumSquare/public/20241106/1730895620_2024-11-Innova-04.jpeg')
    `,
                            backgroundSize: "cover", // Ajusta la imagen al tamaño del div
                            backgroundPosition: "center", // Centra la imagen
                            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                            backgroundBlendMode: "overlay", // Combina la capa de color con la imagen de fondo
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        UC students won the Molinos Innorva 2024 award
                    </div>
                </div>
            </div>

            <SedesHome/>
            <Community/>
            <TheUniversity/>
            <Ingreso/>
            <FollowUs/>
            <FooterHome/>
            <ExperienciaUC/>

            

        </>
    );
}

export default Home;
