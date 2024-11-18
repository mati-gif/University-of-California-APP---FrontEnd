import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/prestamos.css"

function Prestamos() {
    return (
        <>
            <div class='prestamos__main-container'>
                <section
                    class="banner-prestamos "
                >
                    <div
                        class="simple-div__prestamos "
                    ></div>

                    <div
                        class="simple-div2--prestamos "
                    >
                        <div class="divDentroBanner-prestamos ">
                            <h1 class="h1DentroBanner__prestamos ">
                                Loans
                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Loans</Breadcrumb.Item>
                </Breadcrumb>

                <div class="contenedor-cuadrosColores max-w-6xl mx-auto p-6">
                    <div class='contenedor--cuadroInfo_y_cuadroColores'>
                        <div class="cuadrados-de-colores  grid grid-cols-1 md:grid-cols-4 mb-8">
                            <Link to="/becas" style={{ textDecoration: "none", textDecorationLine: "none" }} href="#">
                                <div class='cuadrado-becas'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} >BECAS</span>
                                </div>
                            </Link>
                            <Link to="#" style={{ textDecoration: "none", textDecorationLine: "none" }}>
                                <div class='cuadrado-prestamos'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} >PRÉSTAMOS</span>
                                </div>
                            </Link>
                            <Link to="/reducciones" style={{ textDecoration: "none", textDecorationLine: "none" }} >
                                <div class='cuadrado-reducciones'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} class="text-xl font-bold">REDUCCIONES</span>
                                </div>
                            </Link>
                            <Link to="/premios" style={{ textDecoration: "none", textDecorationLine: "none" }} >
                                <div class='cuadrado-premios'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} >PREMIOS</span>
                                </div>
                            </Link>
                        </div>

                        <div style={{ height: "100px", display: "flex", flexDirection: "column", width: "300px", border: "2px solid red", display: "flex", justifyContent: "end", marginBottom: "2rem" }} >
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
                        <h2 class="sub-tittle">Loans</h2>
                        <p class="prestamos__p">
                            Reimbursable financial subsidy, aimed at regular students who are studying the last year of their degree, who have good academic performance and have financial difficulties in paying fees.
                        </p>
                    </div>
                    <h2 class='acordion1b' >Scope:</h2>
                    <ul style={{ marginBottom: "16px" }}>
                        <li>Los préstamos se aplican a las cuotas correspondientes al ciclo lectivo. Los porcentajes reglamentarios son 25%, 50%, 70% y 85%. Se excluye la matrícula en todos los casos. </li>
                    </ul>
                    <h2 class='acordion1b' >Requirements:</h2>
                    <ul style={{ marginBottom: "16px" }}>
                        <li>Be a regular student in the last year of the degree, have an average of no less than 7 points, including postponements; have regularly followed the study plan and have passed half plus one of the subjects from the previous year. </li>
                    </ul>
                    <h2 class='acordion1b' >Refund:</h2>
                    <ul style={{ marginBottom: "16px" }}>
                        <li>
                            At the end of the degree, the student will begin to pay the fees corresponding to the repayment of the university loan six (6) months from the date of compliance by the student with all the requirements of the academic curriculum.
                            From the completion of the degree and until its effective return, the loan capital will accrue monthly a compensatory interest equivalent to the active rate charged by the Banco de la Nación Argentina.
                            The payments corresponding to the principal and interest of the PU will be made in as many monthly and consecutive installments as the tariff installments would have made up the university loan.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Prestamos