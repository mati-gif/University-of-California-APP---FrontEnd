import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/medicine.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Medicine() {

    const carreras = [
        {
            title: "Medicine",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20190408/1554747500_enfermeria.jpg",
            alt: "Medicine",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        // Puedes agregar más objetos para otras carreras si lo necesitas
        {
            title: "Bachelor of Nursing",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20220504/1651686295_hemo.png",
            alt: "Bachelor of Nursing",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Dentistry",
            imageSrc: "https://www.emagister.com/blog/wp-content/uploads/2014/07/156285716-245x160.jpg",
            alt: "Dentistry",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: " Bachelor of Nutrition",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20240122/1705957868_primer-medico-estetoscopio-frutas.jpg",
            alt: " Bachelor of Nutrition",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        
        {
            title: "Bachelor's Degree in Bioimage Production",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20171211/5a2eaf2c79321.jpg",
            alt: "Bachelor's Degree in Bioimage Production",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },      
        {
            title: "Bachelor's Degree in Surgical Instrumentation",
            imageSrc: "https://wadmin.uca.edu.ar/public/filters/medium/public/20210712/1626111907_2021-UCActualidad-Investigacion.jpg",
            alt: "Bachelor's Degree in Surgical Instrumentation",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        }
    ]
    return (
        <>
            <div class='medicina'>
                <section
                    class="banner-medicina "
                >
                    <div
                        class="simple-div__medicina "
                    ></div>

                    <div
                        class="simple-div2--medicina "
                    >
                        <div class="divDentroBanner-medicina ">
                            <h1 class="h1DentroBanner__medicina ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Medicine and Natural Sciences</Breadcrumb.Item>
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

export default Medicine