import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/reducciones.css"
import Accordion from 'react-bootstrap/Accordion';

function Reducciones() {
    return (
        <>
            <div class='reducciones__main-container' >
                <section
                    class="banner-reducciones "
                >
                    <div
                        class="simple-div__reducciones "
                    ></div>

                    <div
                        class="simple-div2--reducciones "
                    >
                        <div class="divDentroBanner-reducciones ">
                            <h1 class="h1DentroBanner__reducciones ">
                                Reductions
                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Reductions</Breadcrumb.Item>
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
                            <Link to="#" style={{ textDecoration: "none", textDecorationLine: "none" }} >
                                <div class='cuadrado-reducciones'>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }} class="text-xl font-bold">REDUCCIONES</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none", textDecorationLine: "none" }} >
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
                        <h2 class="sub-tittle-reductions">Reductions</h2>
                        <p class="reducciones__p">
                            Non-refundable financial subsidy granted for the student's membership in a defined group. The reductions cannot be accumulated within the same race.
                        </p>
                    </div>
                    <h2 class='acordion1b-reductions' >UC Student: brothers</h2>
                    <ul style={{ marginBottom: "16px" }}>
                        <li>Aimed at students who have siblings who are simultaneously pursuing a degree.</li>
                    </ul>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                            <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                            <Accordion.Body>
                                <h2 class='acordion1b' >Scope:</h2>
                                <ul style={{ marginBottom: "16px" }}>
                                    <li>The benefit applies to the eleven installments of the school year. Does not apply to registration</li>
                                    <li>The brother who entered first pays 100% of the fee.</li>
                                    <li>The second brother will have a 15% discount on the eleven installments.</li>
                                    <li>The third brother will have a 30% discount on the eleven installments.</li>
                                </ul>

                                <h2 class='acordion1b'>Renovations:</h2>
                                <ul>
                                    <li>It is automatically renewed every year, as long as the siblings continue studying.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h2 class='acordion1b-reductions' >UC Teacher: spouse and children</h2>
                    <ul style={{ marginBottom: "16px" }}>
                        <li>Aimed at children and spouses of professors in the University's courses, who are pursuing undergraduate courses. </li>
                    </ul>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                            <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                            <Accordion.Body>
                                <h2 class='acordion1b' >Scope:</h2>
                                <ul style={{ marginBottom: "16px" }}>
                                    <li>The benefit applies to the eleven installments of the school year. Does not apply to registration</li>
                                    <li>The percentage depends on the professor's category at the University, the number of weekly hours he teaches and the seniority he has in the teaching position. More information; see HR. 199, annex IV, on the Teachers' Campus.</li>
                                    
                                </ul>

                                <h2 class='acordion1b'>Application:</h2>
                                <ul>
                                    <li>To place the order, the teacher must enter the Management Campus and go to the Useful Documents section, where they will find the regulations "Scholarships Fee Reduction Policies"</li>
                                </ul>
                                <h2 class='acordion1b'>Renewal::</h2>
                                <ul>
                                    <li>A letter must be sent annually (in the month of February) requesting renewal to the following email: vida_universitaria@uca.edu.ar. The benefit will be renewed under the conditions in force at that time.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h2 class='acordion1b-reductions' >UC Graduate:</h2>
                    <ul style={{ marginBottom: "16px" }}>
                        <li>
                        Aimed at graduates of UCA degree and undergraduate courses* who are beginning another degree or undergraduate course.
                        * Does not apply to graduates with intermediate degrees and Technical Degrees that articulate with Bachelor's Degrees, or from TUPA that articulate with Engineering.
                        </li>
                    </ul>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                            <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                            <Accordion.Body>
                                <h2 class='acordion1b' >Scope:</h2>
                                <ul style={{ marginBottom: "16px" }}>
                                    <li>Undergraduate degree: 20% discount on the eleven fees. Does not apply to registration.</li>
                                    <li>Higher Teaching Staff: 30% discount on the eleven fees. Does not apply to registration.</li>
                                </ul>

                                <h2 class='acordion1b'>Application:</h2>
                                <ul>
                                    <li>You must send an email to vida_universitaria@uca.edu.ar, informing your DNI number, the degree from which you graduated and your current degree. It must be signed with your full name and ID.</li>
                                </ul>
                                <h2 class='acordion1b'>Renewal:</h2>
                                <ul>
                                    <li>Se renueva automáticamente todos los años.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h2 class='acordion1b-reductions' >For taking two degrees:</h2>
                    <ul style={{ marginBottom: "16px" }}>
                        <li>
                        Aimed at students pursuing two degree courses simultaneously.
                        </li>
                    </ul>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                            <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                            <Accordion.Body>
                                <h2 class='acordion1b' >Scope:</h2>
                                <ul style={{ marginBottom: "16px" }}>
                                    <li>The benefit applies to the eleven fees of the school year. Does not apply to registration.</li>
                                    <li>If the two courses (degree and undergraduate) are from the same academic unit, the student will be able to obtain a 75% reduction of the total fees for one of them, corresponding to paying a single registration fee.</li>
                                    <li>If the two courses (degree and undergraduate) are from different academic units, you may request a 50% reduction, and must pay both full tuition fees.</li>
                                </ul>

                                <h2 class='acordion1b'>Application:</h2>
                                <ul>
                                    <li>For students who study two degrees in the same Academic Unit: they must apply at the entrance table of their faculty.</li>
                                    <li>For students who are studying two degrees in different Academic Units: they must make the request via email by writing to vida_universitaria@uca.edu.ar.</li>
                                </ul>
                                <h2 class='acordion1b'>Renewal:</h2>
                                <ul>
                                    <li>It is automatically renewed every year, as long as the student maintains regularity in both careers.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Reducciones