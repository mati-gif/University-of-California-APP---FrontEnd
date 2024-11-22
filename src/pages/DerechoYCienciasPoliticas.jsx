import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/derecho.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DerechoYCienciasPoliticas() {

    const carreras = [
        {
            title: "Law",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/DOCTO-DERECHO-MINI.jpg",
            alt: "Law",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        // Puedes agregar más objetos para otras carreras si lo necesitas
        {
            title: "Bachelor of Political Science",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2022/03/DERECHO-PENAL-MINI.jpg",
            alt: "Bachelor of Political Science",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Notary",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2023/04/PRODUCCIONES-JURIDICAS-DESTACADA.jpg",
            alt: "Notaryt",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "Real Estate Broker",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2023/04/PRACTICA-JURIDICA-DESTACADA-1.jpg",
            alt: "Real Estate Broker",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "Public auctioneer",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2023/04/DERECHO-TECNOLOGICO-DESTACADA.jpg",
            alt: "Public auctioneer",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },      
        {
            title: "International Relations",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2023/04/DERECHO-DEL-DEPORTE-DESTACADA.jpg",
            alt: "International Relations",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Political sciences",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2023/11/DERECHO-Y-TECNOLOGIA-DESTACADA.jpg",
            alt: "Political sciences",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        }
    ];
    return (
        <>
            <div className='derecho-container'>
                <section
                    class="banner-derecho "
                >
                    <div
                        class="simple-div__derecho "
                    ></div>

                    <div
                        class="simple-div2--derecho "
                    >
                        <div class="divDentroBanner-derecho ">
                            <h1 class="h1DentroBanner__derecho ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Law and Political Sciences</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColoresCienciasEconomicas max-w-6xl mx-auto p-6">


                    {carreras.map((item) => (
                        <>


                            <Card style={{ border: "2px solid #000", width: '400px', height: "450px" }}>
                                {/* <Card.Img variant="top" src={item.imageSrc} /> */}
                                <div class='divDE'>
                                    <img class='img__DE' src={item.imageSrc} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title class='tituloDE'>{item.title}</Card.Title>

                                    <div class="div__img--DE--3 ">
                                        <span class="span--DE ">{item.carreraType}</span>
                                        <div class="div--DE-Iconos ">
                                            <GraduationCap class="gorroGraduacion__DE " />
                                            <span class="span--DE-2 ">{item.modalidad1}</span>
                                            <Monitor class="monitor-DE " />
                                            <span class="span--DE-2 " >{item.modalidad2}</span>
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

export default DerechoYCienciasPoliticas