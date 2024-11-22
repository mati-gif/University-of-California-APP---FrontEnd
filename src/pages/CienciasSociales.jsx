import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/cienciasSociales.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CienciasSociales() {
    const carreras = [
        {
            title: "History teacher",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20171211/5a2eaef113c24.jpg",
            alt: "History teacher",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        // Puedes agregar más objetos para otras carreras si lo necesitas
        {
            title: "Bachelor of Philosophy",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20171211/5a2eb37344dfe.jpg",
            alt: "Bachelor of Philosophy",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Geographer",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/TURISMO-MINIATURAS.jpg",
            alt: "Geographer",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: " Bachelor's Degree in Psychology",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20171211/5a2eaf8653ee6.jpg",
            alt: " Bachelor's Degree in Psychology",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: " Bachelor's Degree in Sociology",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20171211/5a2ea58137952.jpg",
            alt: " Bachelor's Degree in Sociology",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },      
        {
            title: "Bachelor's Degree in Social Communication",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20180406/1523045538_posgrado,%20grande.jpg",
            alt: "Bachelor's Degree in Social Communication",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        }
    ]
    return (
        <>
            <div class='cienciasSociales'>
                <section
                    class="banner-cienciasSociales "
                >
                    <div
                        class="simple-div__cienciasSociales "
                    ></div>

                    <div
                        class="simple-div2--cienciasSociales "
                    >
                        <div class="divDentroBanner-cienciasSociales ">
                            <h1 class="h1DentroBanner__cienciasSociales ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Social Sciences</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColoresCienciasEconomicas max-w-6xl mx-auto p-6">


                    {carreras.map((item) => (
                        <>


                            <Card style={{ border: "2px solid #000", width: '400px', height: "450px" }}>
                                {/* <Card.Img variant="top" src={item.imageSrc} /> */}
                                <div class='divmedicina'>
                                    <img class='img__medicina ' src={item.imageSrc} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title class='titulomedicina '>{item.title}</Card.Title>

                                    <div class="div__img--medicina--3 ">
                                        <span class="span--medicina  ">{item.carreraType}</span>
                                        <div class="div--medicina-Iconos ">
                                            <GraduationCap class="gorroGraduacion__medicina  " />
                                            <span class="span--medicina-2 ">{item.modalidad1}</span>
                                            <Monitor class="monitor-medicina  " />
                                            <span class="span--medicina-2 " >{item.modalidad2}</span>
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

export default CienciasSociales