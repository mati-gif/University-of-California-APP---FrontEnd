import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/ingenieria.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Ingenieria() {
    const carreras = [
        {
            title: "Industrial Engineering",
            imageSrc: "https://web.fceia.unr.edu.ar/images/stories/grado/industrial/ingenieria-industrial.jpg",
            alt: "Industrial Engineering",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        // Puedes agregar más objetos para otras carreras si lo necesitas
        {
            title: "Mechanical Engineering",
            imageSrc: "https://web.fceia.unr.edu.ar/images/stories/grado/Mecanica/imagen_portada_fceia_eim_png.png",
            alt: "Mechanical Engineering",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Chemical Engineering",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20171211/5a2eb203511b6.jpg",
            alt: "Chemical Engineering",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: " Civil Engineering",
            imageSrc: "https://web.fceia.unr.edu.ar/images/stories/grado/Civil/CIVIL.jpg",
            alt: " Civil Engineering",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: "Food Engineering",
            imageSrc: "https://www.zafran.com.ar/wp-content/uploads/2020/03/prohuerta.jpg",
            alt: "Food Engineering",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },      
        {
            title: " Systems Engineering",
            imageSrc: "https://virtual.cuc.edu.co/hubfs/Imported_Blog_Media/10-razones-para-estudiar-ingenieria-de-sistemas.webp",
            alt: " Systems Engineering",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        }
        ,      
        {
            title: "  Electrical Engineering",
            imageSrc: "https://web.fceia.unr.edu.ar/images/stories/grado/electrica/1-Electrica.jpg",
            alt: "  Electrical Engineering",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        }
    ]
    return (
        <>
            <div class='ingenieria'>
                <section
                    class="banner-ingenieria "
                >
                    <div
                        class="simple-div__ingenieria "
                    ></div>

                    <div
                        class="simple-div2--ingenieria "
                    >
                        <div class="divDentroBanner-ingenieria ">
                            <h1 class="h1DentroBanner__ingenieria ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Engineering</Breadcrumb.Item>
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

export default Ingenieria