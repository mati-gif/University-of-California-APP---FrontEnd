import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/it.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function IT() {
    const carreras = [
        {
            title: "Programming Technician",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/SISTE-MINIsss.jpg",
            alt: "Programming Technician",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        // Puedes agregar más objetos para otras carreras si lo necesitas
        {
            title: "Data Science",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/CONTADOR-PUBLICO-MINIs.jpg",
            alt: "Data Science",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Devops",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/TECNICATURA-INFORMACION-MINIATURA.jpg",
            alt: "Devops",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "Cybersecurity",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2020/12/9-ciberdefensa-1.jpg",
            alt: "Cybersecurity",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "FullStack Developer (Java + React Js)",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2022/11/DIPLO-FORENSE-MINI.jpg",
            alt: "FullStack Developer (Java + React Js)",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },      
        {
            title: "FullStack Developer (.NET + Angular)",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/SIS-INF-MINI.jpg",
            alt: "FullStack Developer (.NET + Angular)",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: " Data Analyst",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/SOLUCIONES-MINI.jpg",
            alt: " Data Analyst",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        }
    ]
    return (
        <>
            <div class='IT'>
                <section
                    class="banner-IT "
                >
                    <div
                        class="simple-div__IT "
                    ></div>

                    <div
                        class="simple-div2--IT "
                    >
                        <div class="divDentroBanner-IT ">
                            <h1 class="h1DentroBanner__IT ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Technology and Computer Science</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColoresCienciasEconomicas max-w-6xl mx-auto p-6">


                    {carreras.map((item) => (
                        <>


                            <Card style={{ border: "2px solid #000", width: '400px', height: "450px" }}>
                                {/* <Card.Img variant="top" src={item.imageSrc} /> */}
                                <div class='divIT'>
                                    <img class='img__IT ' src={item.imageSrc} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title class='tituloIT '>{item.title}</Card.Title>

                                    <div class="div__img--IT--3 ">
                                        <span class="span--IT  ">{item.carreraType}</span>
                                        <div class="div--IT-Iconos ">
                                            <GraduationCap class="gorroGraduacion__IT  " />
                                            <span class="span--IT-2 ">{item.modalidad1}</span>
                                            <Monitor class="monitor-IT  " />
                                            <span class="span--IT-2 " >{item.modalidad2}</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: "1rem" }} class="p-4">
                                        <p style={{ color: "#000", fontSize: "14px" }} class="text-gray-700 text-sm">Duración: 4 años | Inicia: <span className="font-semibold">25/03/2025</span></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </>
                    ))}


                </div>
            </div>
        </>
    )
}

export default IT