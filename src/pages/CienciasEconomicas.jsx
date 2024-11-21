import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/cienciasEconomicas.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CienciasEconomicas() {

    const carreras = [
        {
            title: "Bachelor of Administration",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/ADMINISTRACION-MINIATURA.jpg",
            alt: "Bachelor of Administration",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        // Puedes agregar más objetos para otras carreras si lo necesitas
        {
            title: "Economy",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/REL-LABORALES-MINI.jpg",
            alt: "Economy",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Public Accountant",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/CONTADOR-PUBLICO-MINIs.jpg",
            alt: "Public Accountant",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "Statistics",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/SEGUROS-MINI.jpg",
            alt: "Statistics",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "Finance",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/TECNI-COMER-MINI.jpg",
            alt: "Finance",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "Bachelor in International Trade",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/HOTEL-MINI.jpg",
            alt: "Bachelor in International Trade",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "Bachelor in Digital Business",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2022/11/EMPREN-MINIs.jpg",
            alt: "Bachelor in Digital Business",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
        {
            title: "Bachelor's degree in marketing",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2022/11/ADM-TECNOs-MINIs.jpg",
            alt: "Bachelor's degree in marketing",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },        {
            title: "Marketing",
            imageSrc: "https://www.kennedy.edu.ar/wp-content/uploads/2019/02/TURISMO-MINIATURAS.jpg",
            alt: "Marketing",
            // duration: "4 years",
            // startDate: "25/03/2025",
            modalidad1: "In person",
            modalidad2: "Remote",
            carreraType: "Degree Course",
        },
    ];

    return (
        <>
            <div class='cienciasEconomicas'>
                <section
                    class="banner-cienciasEconomicas "
                >
                    <div
                        class="simple-div__cienciasEconomicas "
                    ></div>

                    <div
                        class="simple-div2--cienciasEconomicas "
                    >
                        <div class="divDentroBanner-cienciasEconomicas ">
                            <h1 class="h1DentroBanner__cienciasEconomicas ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Economic and Business Sciences</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColoresCienciasEconomicas max-w-6xl mx-auto p-6">


                        {carreras.map((item) => (
                            <>


                                <Card style={{ border: "2px solid #000", width: '400px', height: "450px" }}>
                                    {/* <Card.Img variant="top" src={item.imageSrc} /> */}
                                    <div class='divCE'>
                                        <img class='img__CE' src={item.imageSrc} alt="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title class='tituloCE'>{item.title}</Card.Title>

                                        <div class="div__img--CE--3 ">
                                            <span class="span--CE ">{item.carreraType}</span>
                                            <div class="div--CE-Iconos ">
                                                <GraduationCap class="gorroGraduacion__CE " />
                                                <span class="span--CE-2 ">{item.modalidad1}</span>
                                                <Monitor class="monitor-CE " />
                                                <span class="span--CE-2 " >{item.modalidad2}</span>
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
            {/* </div> */}
        </>
    )
}

export default CienciasEconomicas