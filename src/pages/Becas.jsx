import React from 'react'
import "../Styles/becas.css"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'

function Becas() {
    return (
        <>
            <div class='becas-div__container' >
                <section
                    class="banner-becas "
                >
                    <div
                        class="simple-div__becas "
                    ></div>

                    <div
                        class="simple-div2--becas "
                    >
                        <div class="divDentroBanner-becas ">
                            <h1 class="h1DentroBanner__becas ">
                                Scholarships
                            </h1>
                        </div>
                    </div>
                </section>

                <Breadcrumb style={{ fontSize: "24px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Scholarships</Breadcrumb.Item>
                </Breadcrumb>


                <div class="contenedor-cuadrosColores max-w-6xl mx-auto p-6">
                    <div class="cuadrados-de-colores  grid grid-cols-1 md:grid-cols-4 mb-8">
                        <Link style={{ textDecoration: "none", textDecorationLine: "none" }} href="#">
                            <div class='cuadrado-becas'>
                                <span style={{ fontSize: "1.25rem", fontWeight: "700" }} >BECAS</span>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", textDecorationLine: "none" }}>
                            <div class='cuadrado-prestamos'>
                                <span style={{ fontSize: "1.25rem", fontWeight: "700" }} >PRÉSTAMOS</span>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", textDecorationLine: "none" }} >
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

                    <div style={{ border: "2px solid red", display: "flex", justifyContent: "end", marginBottom: "2rem" }} >
                        <div class="infoBecas--mas">
                            <h2 style={{ marginBottom: "0.5rem", fontWeight: "700" }} >Más información</h2>
                            <Link href="#" class="campus__info ">
                                Campus Virtual
                            </Link>
                        </div>
                    </div>

                    <div style={{ marginBottom: "2rem" }} class="mb-8">
                        <h2 class="sub-tittle">Becas</h2>
                        <p class="becas__p">
                            Subvención económica no reintegrable dirigida a alumnos ingresantes y regulares con alto rendimiento académico y/o necesidad económica.
                        </p>
                    </div>
                </div>

                <Accordion style={{ border: "3px solid #563", width: "50vw", display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "100px" }} alwaysOpen>
                    <Accordion.Item style={{ border: "3px solid #563" }} eventKey="0">
                        <Accordion.Header style={{ border: "3px solid #563", backgroundColor: "#48e" }} >By School</Accordion.Header>
                        <Accordion.Body>
                            {/* <div class='beca1'></div> */}
                            <h2 style={{border:"2px solid #990"}}> 
                            Beca UCA PRIUNES: Colegios con convenio
                            </h2>
                            Destinada a alumnos ingresantes provenientes de colegios con convenio PRIUNES que posean un desempeño académico destacado.
                            Alcance:

La beca cubre el 100% del costo correspondiente a los once aranceles anuales y la matrícula y el proceso de inscripción.

En las carreras de Medicina y Odontología la beca será del 50% del arancel.

Requisitos para aplicar:

Encontrarse cursando el último año de nivel medio de un colegio parroquial perteneciente al Arzobispado de Buenos Aires. Conocé si tu colegio tiene convenio haciendo clic aquí.

Poseer un PROMEDIO GENERAL DE 8 EN LOS PRIMEROS 4 AÑOS DEL NIVEL MEDIO. (En las jurisdicciones en las que el Nivel Medio sea de cinco (5) años, se considerará el promedio de 1ero a 4to año, y en aquellas en las que tenga seis (6) años, se considerará el promedio de 2do a 5to).

Ser seleccionado por el colegio como beneficiario.

Postulaciones:

La postulación es realizada exclusivamente por las autoridades del colegio. Por ello, el alumno podrá manifestar a las autoridades de su colegio el interés por ser seleccionado para el beneficio.

Posteriormente, el candidato recibirá un correo de la UCA con un formulario digital, en el que deberá completar la información solicitada.

Requisitos para Renovación:

Haber cursado al menos 10 materias de la carrera en los últimos dos semestres.

Tener aprobado la mitad más uno de los finales de las materias cursadas en los últimos dos semestres. -incluidos los seminarios y talleres-
Haber obtenido un promedio igual o superior a 6 puntos (sin incluir los aplazos).
                            <h2 style={{border:"2px solid #990"}}> 
                            Beca UCA Parroquial: Colegios Parroquiales
                            </h2>
                            Destinada a alumnos ingresantes destacados que sean egresados de colegios parroquiales dependientes de la Arquidiócesis de Buenos Aires.
                            <h2 style={{border:"2px solid #990"}}> 
                            Beca UCA Parroquial: Colegios Parroquiales
                            </h2>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </>
    )
}

export default Becas