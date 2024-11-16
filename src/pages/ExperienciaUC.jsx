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
                            UC Country Experience
                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{fontSize:"24px"}}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
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
                                IN-PERSON UC EXPERIENCE
                                </h1>
                                <p style={{ color: "#4b5563", fontSize: "1.25rem" }} class="text-gray-600 text-xl">(All locations)</p>
                            </div>
                        </div>

                        <div class="exp__div-custom ">
                            <h2 style={{ fontWeight: "bold", marginBottom: "0.5rem" }} class="font-bold mb-2">More information</h2>
                            <Link href="#" class="link text-white hover:underline">
                            UC country experience
                            </Link>
                        </div>
                    </div>

                    <p class="parrafo-exp ">
                    At this event you will be able to chat with the authorities of all the UC majors to learn about the study plan and job opportunities for the major of your interest. The following activities are also offered during the event:
                    </p>

                    <div class="div-section-libro__log ">
                        <div class="div-section-libro ">
                            <BookOpen class="book-logo " size={32} />
                            <div>
                                <h3 style={{ color: "#33B1FF", fontWeight: "bold", marginBottom: "0.25rem" }} >
                                VOCATIONAL GUIDANCE WORKSHOP
                                </h3>
                            </div>
                        </div>

                        <div class="div-section-libro flex items-start gap-4">
                            <Lightbulb class="book-logo  " size={32} />
                            <div>
                                <h3 style={{ color: "#33B1FF", fontWeight: "bold", marginBottom: "0.25rem" }}>
                                GAMES AND INNOVATION SPACE
                                </h3>
                            </div>
                        </div>

                        <div class="div-section-libro ">
                            <Coffee class="book-logo" size={32} />
                            <div>
                                <h3 style={{ color: "#33B1FF", fontWeight: "bold", marginBottom: "0.25rem" }} >
                                SPACE FOR PARENTS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="calendar__exp flex items-center justify-center gap-4">
                        <Calendar style={{ color: "#33B1FF" }} size={48} />
                        <h2 style={{ color: "#33B1FF", fontWeight: "bold", fontSize: "2.25rem" }}  >REGISTER</h2>
                    </div>
                </div>


                <div class="div-sedes-exp max-w-4xl mx-auto p-6">
                    {/* Location Buttons */}
                    <div class="location-exp-buttons flex flex-wrap gap-4 mb-12 justify-center">
                        <Link
                            href="#"
                            class="locations__sedes__exp px-8 py-3 bg-[#33B1FF] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#2980b9] hover:-translate-y-1 hover:shadow-lg"
                        >
                            LOS ANGELES
                        </Link>
                        <Link
                            href="#"
                            class="locations__sedes__exp px-8 py-3 bg-[#33B1FF] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#2980b9] hover:-translate-y-1 hover:shadow-lg"
                        >
                            SAN DIEGO
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
                                GUIDED TOURS OF THE CAMPUS
                                </h1>
                                <p styles={{color:"#4b5563",fontSize:"1.25rem"}} class="text-gray-600 text-xl">(All locations)</p>
                            </div>
                        </div>


                        <div class='lineaSeparadora  border-gray-300 mb-6'></div>

                        <p class="text-[#1e3a8a] mb-8 text-lg leading-relaxed">
                        We invite you to tour our Los Angeles campus where you can learn about the different
                        UC spaces such as: Laboratories, Sports and radio and television studios, among others.
                        </p>

                        <div style={{display:"flex",justifyContent:"center"}} class="flex justify-center">
                            <Link
                                href="#"
                                class="link2 px-12 py-3 bg-[#1e3a8a] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#152c70] hover:-translate-y-1 hover:shadow-lg text-xl"
                            >
                            REGISTER
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
                                ACTIVITIES FOR<br />SECONDARY SCHOOLS
                                </h1>
                                <p styles={{color:"#4b5563",fontSize:"1.25rem"}} class="text-gray-600 text-xl">(All locations)</p>
                            </div>
                        </div>


                        <div class='lineaSeparadora  border-gray-300 mb-6'></div>

                        <p class="text-[#1e3a8a] mb-8 text-lg leading-relaxed">
                        If you are a teacher of the last years of secondary school, these proposals are for you. 
        Discover activities designed to enrich your students' learning experience. 
        Register now to receive detailed information. Don't miss the opportunity to make a difference for your students!
                        </p>

                        <div style={{display:"flex",justifyContent:"center"}} class="flex justify-center">
                            <Link
                                href="#"
                                class="link2 px-12 py-3 bg-[#1e3a8a] text-white font-bold rounded-lg transition-all duration-300 hover:bg-[#152c70] hover:-translate-y-1 hover:shadow-lg text-xl"
                            >
                            REGISTER
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ExperienciaUC