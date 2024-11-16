import React from 'react'
import "../Styles/experienciaUC.css"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Users, BookOpen, Lightbulb, Coffee, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

function ExperienciaUC() {
    return (
        <>
            <div class='mega-container'>
                <section
                    class="banner "
                >
                    <div
                        class="simple-div "
                    ></div>

                    <div
                        class="simple-div2 "
                    >
                        <div class="divDentroBanner ">
                            <h1 class="h1DentroBanner ">
                                Let us find your
                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>UC Experience</Breadcrumb.Item>
                </Breadcrumb>


                <div class="exp__div ">
                    <div class="exp__div-container ">
                        <div class="exp__div-container-1 ">
                            <div style={{ color: "#33B1FF", marginTop: "0.25rem" }}  >
                                <Users size={48} />
                            </div>
                            <div>
                                <h1 class="experiencia__h1-titulo ">
                                    EXPERIENCIA UCA PRESENCIAL
                                </h1>
                                <p style={{ color: "#4b5563", fontSize: "1.25rem" }} class="text-gray-600 text-xl">(Todas las sedes)</p>
                            </div>
                        </div>

                        <div class="exp__div-custom ">
                            <h2 style={{ fontWeight: "bold", marginBottom: "0.5rem" }} class="font-bold mb-2">Más información</h2>
                            <Link href="#" class="link text-white hover:underline">
                                Experiencia UCA país
                            </Link>
                        </div>
                    </div>

                    <p class="parrafo-exp ">
                        En este evento vas a poder charlar con las autoridades de todas las carreras de la UCA para conocer
                        el plan de estudios y salida laboral de la carrera de tu interés. Durante el evento también se ofrecen
                        las siguientes actividades:
                    </p>

                    <div class="div-section-libro__log ">
                        <div class="div-section-libro ">
                            <BookOpen class="book-logo " size={32} />
                            <div>
                                <h3 style={{ color: "#33B1FF", fontWeight: "bold", marginBottom: "0.25rem" }} >
                                    TALLER DE ORIENTACIÓN VOCACIONAL
                                </h3>
                            </div>
                        </div>

                        <div class="div-section-libro flex items-start gap-4">
                            <Lightbulb class="book-logo  " size={32} />
                            <div>
                                <h3 style={{ color: "#33B1FF", fontWeight: "bold", marginBottom: "0.25rem" }}>
                                    JUEGOS Y ESPACIO DE INNOVACIÓN
                                </h3>
                            </div>
                        </div>

                        <div class="div-section-libro ">
                            <Coffee class="book-logo" size={32} />
                            <div>
                                <h3 style={{ color: "#33B1FF", fontWeight: "bold", marginBottom: "0.25rem" }} >
                                    ESPACIO PARA PADRES
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="calendar__exp flex items-center justify-center gap-4">
                        <Calendar style={{ color: "#33B1FF" }} size={48} />
                        <h2 style={{ color: "#33B1FF", fontWeight: "bold", fontSize: "2.25rem" }}  >INSCRIBITE</h2>
                    </div>
                </div>


                <div class="div-sedes-exp max-w-4xl mx-auto p-6">
                    {/* Location Buttons */}
                    <div class="location-exp-buttons flex flex-wrap gap-4 mb-12 justify-center">
                        <Link
                            href="#"
                            class="locations__sedes__exp px-8 py-3 bg-[#33B1FF] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#2980b9] hover:-translate-y-1 hover:shadow-lg"
                        >
                            BUENOS AIRES
                        </Link>
                        <Link
                            href="#"
                            class="locations__sedes__exp px-8 py-3 bg-[#33B1FF] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#2980b9] hover:-translate-y-1 hover:shadow-lg"
                        >
                            ROSARIO
                        </Link>
                        <Link
                            href="#"
                            class="locations__sedes__exp px-8 py-3 bg-[#33B1FF] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#2980b9] hover:-translate-y-1 hover:shadow-lg"
                        >
                            MENDOZA
                        </Link>
                        <Link
                            href="#"
                            class="locations__sedes__exp px-8 py-3 bg-[#33B1FF] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#2980b9] hover:-translate-y-1 hover:shadow-lg"
                        >
                            PARANÁ
                        </Link>
                    </div>

                    {/* Campus Tours Section */}
                    <div styles={{marginBottom:"2rem"}} class="mb-8">
                        <div class="campus-tour-div ">
                            <svg
                                class="svg-tour-campus w-12 h-12 text-[#1e3a8a] flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" />
                            </svg>
                            <div>
                                <h1 class="h1-campus__tours text-[#1e3a8a] text-3xl font-bold leading-tight">
                                    VISITAS GUIADAS POR EL CAMPUS
                                </h1>
                                <p styles={{color:"#4b5563",fontSize:"1.25rem"}} class="text-gray-600 text-xl">(Todas las sedes)</p>
                            </div>
                        </div>


                        <div class='lineaSeparadora  border-gray-300 mb-6'></div>

                        <p class="text-[#1e3a8a] mb-8 text-lg leading-relaxed">
                            Te invitamos a recorrer nuestro campus de Puerto Madero en el que podrás conocer los diferentes
                            espacios de UCA como: Laboratorios, Deportes y estudio de radio y televisión, entre otros.
                        </p>

                        <div style={{display:"flex",justifyContent:"center"}} class="flex justify-center">
                            <Link
                                href="#"
                                class="link2 px-12 py-3 bg-[#1e3a8a] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#152c70] hover:-translate-y-1 hover:shadow-lg text-xl"
                            >
                                INSCRIBITE
                            </Link>
                        </div>
                    </div>


                                        {/* Campus Tours Section */}
                        <div style={{marginTop:"5rem"}} class="mb-8">
                        <div class="campus-tour-div ">
                            <svg
                                class="svg-tour-campus w-12 h-12 text-[#1e3a8a] flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                                
                            </svg>
                            <div>
                                <h1 class="h1-campus__tours text-[#1e3a8a] text-3xl font-bold leading-tight">
                                ACTIVIDADES PARA<br />COLEGIOS SECUNDARIOS
                                </h1>
                                <p styles={{color:"#4b5563",fontSize:"1.25rem"}} class="text-gray-600 text-xl">(Todas las sedes)</p>
                            </div>
                        </div>


                        <div class='lineaSeparadora  border-gray-300 mb-6'></div>

                        <p class="text-[#1e3a8a] mb-8 text-lg leading-relaxed">
                        Si sos docente de los últimos años del secundario, estas propuestas son para vos. 
        Descubrí las actividades diseñadas para enriquecer la experiencia de aprendizaje de tus estudiantes. 
        Registrate ahora para recibir información detallada. ¡No te pierdas la oportunidad de marcar la diferencia en tus alumnos!
                        </p>

                        <div style={{display:"flex",justifyContent:"center"}} class="flex justify-center">
                            <Link
                                href="#"
                                class="link2 px-12 py-3 bg-[#1e3a8a] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#152c70] hover:-translate-y-1 hover:shadow-lg text-xl"
                            >
                                INSCRIBITE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ExperienciaUC