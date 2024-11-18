import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../Styles/premios.css";
import Accordion from "react-bootstrap/Accordion";

function Premios() {
    return (
        <>
            <div class="premios-gran-div">
                <section class="banner-premios ">
                    <div class="simple-div__premios "></div>
                    <div class="simple-div2--premios ">
                        <div class="divDentroBanner-premios ">
                            <h1 class="h1DentroBanner__premios ">Awards</h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Awards</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColores max-w-6xl mx-auto p-6">
                    <div class='contenedor--cuadroInfo_y_cuadroColores'>
                        <div class="cuadrados-de-colores  grid grid-cols-1 md:grid-cols-4 mb-8">
                            <Link to="/becas" style={{ textDecoration: "none", textDecorationLine: "none" }} href="#">
                                <div class='cuadrado-becas'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} >BECAS</span>
                                </div>
                            </Link>
                            <Link to="/prestamos" style={{ textDecoration: "none", textDecorationLine: "none" }}>
                                <div class='cuadrado-prestamos'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} >PRÉSTAMOS</span>
                                </div>
                            </Link>
                            <Link to="/reducciones" style={{ textDecoration: "none", textDecorationLine: "none" }} >
                                <div class='cuadrado-reducciones'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} class="text-xl font-bold">REDUCCIONES</span>
                                </div>
                            </Link>
                            <Link to="#" style={{ textDecoration: "none", textDecorationLine: "none" }} >
                                <div class='cuadrado-premios'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} >PREMIOS</span>
                                </div>
                            </Link>
                        </div>

                        <div style={{ height: "100px", display: "flex", flexDirection: "column", width: "300px", border: "2px solid red", justifyContent: "end", marginBottom: "2rem" }} >
                            <div id='h2-info-becas__div1'>
                                <h2 style={{ fontSize: "20px", marginBottom: "0.5rem", fontWeight: "700" }} >More information</h2>
                            </div>
                            <div class="campus__info " >
                                <Link style={{ textDecoration: "none" }} href="#" >
                                    Campus Virtual
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: "2rem" }} class="mb-8">
                        <h2 class="sub-tittle-premios">Awards</h2>
                        <p class="premios__p">
                        Non-refundable financial subsidy awarded to regular students with the highest academic performance
                        </p>
                    </div>
                    <h2 class='acordion1b-premios' >Merit Stimulus Scholarship</h2>
                    <ul style={{ marginBottom: "16px" }}>
                        <li>Aimed at students whose academic performance was outstanding during their last year of study. A benefit of 100% or 50% is provided on the 11 tariffs of the year.</li>
                    </ul>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                            <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                            <Accordion.Body>
                                <ul style={{ marginBottom: "16px" }}>
                                    <li>The faculties select the students who can apply, observing the best averages of each year. It cannot be applied directly.</li>
                                    <li>The benefit is not renewable, it is granted only for the current year.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default Premios;
