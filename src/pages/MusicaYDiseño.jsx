import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../Styles/musicaYDiseño.css";
import { GraduationCap, Monitor } from "lucide-react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function MusicaYDiseño() {
    const carreras = [
        {
            title: "Bachelor of Music",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20201023/1603468805_musicologia%20historica.jpg",
            alt: "Bachelor of Music",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        // Puedes agregar más objetos para otras carreras si lo necesitas
        {
            title: " Musical Composition",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20201007/1602096175_music-1363069_1920.jpg",
            alt: " Musical Composition",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: " Sound Engineering",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20240625/1719343538_primer-plano-mezclador-sonido_1359-8.jpg",
            alt: " Sound Engineering",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: "  Multimedia Design",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20240308/1709902868_pila-papeleo-negocios-corporativos-escritorio-desordenado-generado-ai_24911-72362.jpg",
            alt: "  Multimedia Design",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: "Bachelor of Acting",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20230622/1687462160_people-visiting-art-exhibition-museum2.jpg",
            alt: "Bachelor of Acting",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },      
     
    ]
    return (
        <>
            <div class="musica-y-diseño">
                <section class="banner-musica-y-diseño ">
                    <div class="simple-div__musica-y-diseño "></div>

                    <div class="simple-div2--musica-y-diseño ">
                        <div class="divDentroBanner-musica-y-diseño ">
                            <h1 class="h1DentroBanner__musica-y-diseño "></h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb
                    style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}
                >
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Music ,Art and Design</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColoresCienciasEconomicas max-w-6xl mx-auto p-6">


                    {carreras.map((item) => (
                        <>


                            <Card style={{ border: "2px solid #000", width: '400px', height: "450px" }}>
                                {/* <Card.Img variant="top" src={item.imageSrc} /> */}
                                <div class='divingenieria'>
                                    <img class='img__ingenieria ' src={item.imageSrc} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title class='tituloingenieria '>{item.title}</Card.Title>

                                    <div class="div__img--ingenieria--3 ">
                                        <span class="span--ingenieria">{item.carreraType}</span>
                                        <div class="div--ingenieria-Iconos ">
                                            <GraduationCap class="gorroGraduacion__ingenieria  " />
                                            <span class="span--ingenieria-2 ">{item.modalidad1}</span>
                                            <Monitor class="monitor-ingenieria  " />
                                            <span class="span--ingenieria-2 " >{item.modalidad2}</span>
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
    );
}

export default MusicaYDiseño;
