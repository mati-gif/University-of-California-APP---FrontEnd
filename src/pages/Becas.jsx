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

                <Accordion style={{ border: "3px solid #4f4", width: "50vw", display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "100px", gap: "50px" ,marginBottom:"50px"}} alwaysOpen>
                    <Accordion.Item style={{ border: "3px solid #563" }} eventKey="0">
                        <Accordion.Header   >
                            <div class='el1erHeader'>
                                By School
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {/* <div class='beca1'></div> */}
                            <h2 class='acordionBody1h2' >
                                Beca UC PRIUNES: Colegios con convenio
                            </h2>
                            Destinada a alumnos ingresantes provenientes de colegios con convenio PRIUNES que posean un desempeño académico destacado.
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                                    <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                                    <Accordion.Body>
                                        <h2 class='acordion1b' >Alcance:</h2>
                                        <ul style={{ marginBottom: "16px" }}>
                                            <li>Cada colegio puede presentar dos alumnos para becas del 50% y tres alumnos para becas del 25%.</li>
                                            <li>Alcanza los once aranceles anuales (no incluye matrícula ni servicios adicionales como, por ejemplo, estacionamiento, fotocopias, etc.).</li>
                                        </ul>

                                        <h2 class='acordion1b'>Requisitos para aplicar:</h2>
                                        <ul>
                                            <li>Encontrarse cursando el último año de nivel medio.</li>
                                            <li>Pertenecer a un colegio que posea convenio PRIUNES.</li>
                                            <li>
                                                Poseer un promedio mínimo de 8/10 puntos durante los primeros cuatro (4) años del Nivel Medio. En las jurisdicciones en las que el Nivel Medio sea de cinco (5) años, se considerará el promedio de 1ero a 4to año, y en aquellas en las que tenga seis (6) años, se considerará el promedio de 2do a 5to.
                                            </li>
                                            <li>Ser seleccionado por el colegio como beneficiario.</li>
                                        </ul>

                                        <h2 class='acordion1b'>Requisitos para renovacion:</h2>
                                        <ul>
                                            <li>Haber cursado al menos 10 materias de la carrera en los últimos dos semestres.</li>
                                            <li>Tener aprobado la mitad más uno de los finales de las materias cursadas en los últimos dos semestres. -incluidos los seminarios y talleres.</li>
                                            <li>
                                                Haber obtenido un promedio igual o superior a 6 puntos (sin incluir los aplazos)
                                            </li>
                                        </ul>


                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>

                            <h2 class='acordionBody1h2' >
                                Beca UC Parroquial: Colegios Parroquiales
                            </h2>
                            Destinada a alumnos ingresantes destacados que sean egresados de colegios parroquiales dependientes de la Arquidiócesis de Buenos Aires.
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                                    <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                                    <Accordion.Body>
                                        <h2 class='acordion1b' >Alcance:</h2>
                                        <ul style={{ marginBottom: "16px" }}>
                                            <li>La beca cubre el 100% del costo correspondiente a los once aranceles anuales y la matrícula y el proceso de inscripción.</li>
                                            <li>En las carreras de Medicina y Odontología la beca será del 50% del arancel.</li>
                                        </ul>

                                        <h2 class='acordion1b'>Requisitos para aplicar:</h2>
                                        <ul>
                                            <li>Poseer un PROMEDIO GENERAL DE 8 EN LOS PRIMEROS 4 AÑOS DEL NIVEL MEDIO. (En las jurisdicciones en las que el Nivel Medio sea de cinco (5) años, se considerará el promedio de 1ero a 4to año, y en aquellas en las que tenga seis (6) años, se considerará el promedio de 2do a 5to).</li>
                                            <li>Ser seleccionado por el colegio como beneficiario.</li>
                                        </ul>

                                        <h2 class='acordion1b'>Postulaciones:</h2>
                                        <ul>
                                            <li>La postulación es realizada exclusivamente por las autoridades del colegio. Por ello, el alumno podrá manifestar a las autoridades de su colegio el interés por ser seleccionado para el beneficio.</li>
                                            <li>Posteriormente, el candidato recibirá un correo de la UCA con un formulario digital, en el que deberá completar la información solicitada.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div class='el1erHeader'>
                                By Careers
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {/* <div class='beca1'></div> */}
                            <h2 class='acordionBody1h2' >
                                Carreras del Departamento de Educación
                            </h2>
                            Dirigida a :
                            <ul>
                                <li>
                                    Estudiantes de último año del nivel medio con interés en carreras pertenecientes al Departamento de Educación, que presenten dificultades económicas para afrontar los aranceles.
                                </li>
                                <li>
                                    Directivos o docentes de establecimientos de nivel inicial, medio y/o universitario.
                                </li>
                            </ul>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                                    <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                                    <Accordion.Body>
                                        <h2 class='acordion1b' >Alcance:</h2>
                                        <ul style={{ marginBottom: "16px" }}>
                                            <li>Para todas las carreras de grado del Departamento de Educación de la Facultad de Ciencias Sociales de la Sede Buenos Aires.</li>
                                            <li>Incluye los once aranceles de cada ciclo lectivo. No contempla la matrícula anual ni el proceso de inscripción.</li>
                                        </ul>

                                        <h2 class='acordion1b'>Requisitos para aplicar:</h2>
                                        <ul>
                                            <li>Presentar dificultad económica para abonar los aranceles.</li>
                                            <li>Haber completado la preinscripción.</li>
                                        </ul>

                                        <h2 class='acordion1b'>Requisitos para renovacion:</h2>
                                        <ul>
                                            <li>Haber aprobado el 75% de los finales de las materias cursadas en los últimos dos semestres previos a la renovación.

                                            </li>
                                            <li>Tener un promedio igual o superior a 6 puntos (sin incluir los aplazos).</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <h2 class='acordionBody1h2' >
                                Licenciatura y Profesorado en Filosofía
                            </h2>
                            Dirigida a personas con interés en cursar la carrera de Filosofía.
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                                    <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                                    <Accordion.Body>
                                        <h2 class='acordion1b' >Alcance:</h2>
                                        <ul style={{ marginBottom: "16px" }}>
                                            <li>El beneficio cubre el 100% del costo correspondiente a los once aranceles anuales. No contempla la matrícula anual ni el derecho de inscripción.</li>
                                            <li>Aplica tanto para alumnos matriculados como para nuevos ingresantes a partir del año 2024.</li>
                                        </ul>

                                        <h2 class='acordion1b'>Postulaciones:</h2>
                                        <ul>
                                            <li>Se accede al beneficio sin otro requisito que la sola inscripción a la carrera o a partir de ser alumno regular de la misma.</li>

                                        </ul>
                                        <h2 class='acordion1b'>Requisitos para renovacion:</h2>
                                        <ul>
                                            <li>Cursar regularmente el plan de estudios..</li>
                                            <li>Tener aprobadas la mitad más una de las materias del año anterior al inicio del ciclo lectivo.
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            {/* <div class='beca1'></div> */}
                            <h2 class='acordionBody1h2' >
                            Abogacía "Beca Tomás Casares"

                            </h2>
                            Dirigida a estudiantes de último año del nivel medio con interés en estudiar la carrera de Abogacía.
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item style={{ border: "3px solid #563", marginTop: "20px" }} eventKey="0">
                                    <Accordion.Header id="custom-accordion-header" >Information</Accordion.Header>
                                    <Accordion.Body>
                                        <h2 class='acordion1b' >Alcance:</h2>
                                        <ul style={{ marginBottom: "16px" }}>
                                            <li>Para la carrera de Abogacía de la Sede Buenos Aires.</li>
                                            <li>Descuento del 50% sobre los once aranceles de cada ciclo lectivo. No contempla la matrícula anual ni el proceso de inscripción.</li>
                                        </ul>

                                        <h2 class='acordion1b'>Criterio de selección:</h2>
                                        <p>La evaluación de los postulantes la analizará la Facultad de Derecho teniendo en cuenta los siguientes criterios:</p>
                                        <ul>
                                            <li>Rendimiento académico durante los estudios del nivel medio. </li>
                                            <li>dentificación con los valores humanistas cristianos que inspiran a nuestra Universidad* </li>
                                            <li>
                                            Situación socioeconómica del candidato.
                                            </li>
                                        </ul>

                                        <h2 class='acordion1b'>Requisitos para renovacion:</h2>
                                        <ul>
                                            <li>El alumno debe solicitar la renovación anualmente a la Facultad.</li>
                                            <li>La Facultad analizará la ficha del alumno al momento de la renovación, y dictaminará sobre la continuidad del beneficio según los criterios de selección aplicados al momento del otorgamiento de la beca.</li>
                                            <li>
                                                Haber obtenido un promedio igual o superior a 6 puntos (sin incluir los aplazos)
                                            </li>
                                        </ul>


                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </>
    )
}

export default Becas