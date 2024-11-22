import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/idiomas.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Idiomas() {
    const carreras = [
        {
            title: "English",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20230509/1683667458_WEB-%20INTENSIVOS%20(14).png",
            alt: "English",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        // Puedes agregar más objetos para otras carreras si lo necesitas
        {
            title: "English Translator",
            imageSrc: "https://retos-operaciones-logistica.eae.es/wp-content/uploads/2018/02/iStock-886336016-600x300.jpg",
            alt: "English Translator",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Italian",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20230509/1683667046_WEB-%20INTENSIVOS%20(12).png",
            alt: "Italian",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: " French",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20230509/1683667121_WEB-%20INTENSIVOS%20(13).png",
            alt: " French",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: " Mandarin Chinese",
            imageSrc: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/ACFF/production/_116778244_gettyimages-905514896.jpg.webp",
            alt: " Mandarin Chinese",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },      
        {
            title: " Portuguese",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20230509/1683666868_WEB-%20INTENSIVOS%20(11).png",
            alt: " Portuguese",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        }
        ,      
        {
            title: "German",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20230509/1683669015_WEB-%20INTENSIVOS%20(16).png",
            alt: "  German",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        }
    ]
    return (
        
        <>
            <div class='idiomas'>
                <section
                    class="banner-idiomas "
                >
                    <div
                        class="simple-div__idiomas "
                    ></div>

                    <div
                        class="simple-div2--idiomas "
                    >
                        <div class="divDentroBanner-idiomas ">
                            <h1 class="h1DentroBanner__idiomas ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Languajes and Translations</Breadcrumb.Item>
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
    )
}

export default Idiomas