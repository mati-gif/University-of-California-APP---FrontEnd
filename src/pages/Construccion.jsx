import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/construccion.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Construccion() {

    const carreras = [
    {
        title: "Architecture",
        imageSrc: "https://fa.ort.edu.uy/innovaportal/file/97613/1/por-que-estudiar-arquitectura-en-ort.jpg",
        alt: "Architecture",
        // duration: "4 years",
        // startDate: "25/03/2025",
        modalidad1: "In person",
        modalidad2: "Remote",
        carreraType: "Degree Course",
    },
    // Puedes agregar más objetos para otras carreras si lo necesitas
    {
        title: "Graphic Design",
        imageSrc: "https://institutonoa.com.ar/wp-content/uploads/2021/10/diseno_grafico.jpg",
        alt: "Graphic Design",
        // duration: "4 years",
        // startDate: "25/03/2025",
        modalidad1: "In person",
        modalidad2: "Remote",
        carreraType: "Degree Course",
    },
    {
        title: "Industrial Design",
        imageSrc: "https://estudia.ingenieriacivilcivil.com/wp-content/uploads/2023/07/los-mejores-lugares-para-estudiar-ingenieria-en-diseno-industrial-1024x536.png",
        alt: "Industrial Design",
        // duration: "4 years",
        // startDate: "25/03/2025",
        modalidad1: "In person",
        modalidad2: "Remote",
        carreraType: "Degree Course",
    },        
    {
        title: " Interior Design",
        imageSrc: "https://universidadeuropea.com/resources/media/images/que-estudiar-disenador-de-interi.width-1024.format-webp.webp",
        alt: " Interior Design",
        // duration: "4 years",
        // startDate: "25/03/2025",
        modalidad1: "In person",
        modalidad2: "Remote",
        carreraType: "Degree Course",
    },        
    {
        title: "Construction Inspector",
        imageSrc: "https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/2023-05/foto%20control%20obras%202_0.jpg?itok=G3NIC2sk",
        alt: "Construction Inspector",
        // duration: "4 years",
        // startDate: "25/03/2025",
        modalidad1: "In person",
        modalidad2: "Remote",
        carreraType: "Degree Course",
    },      
    {
        title: " Safety and Hygiene Technician",
        imageSrc: "https://www.universidades.com.ar/img/article/que-hace-un-tecnico-en-seguridad-e-higiene",
        alt: " Safety and Hygiene Technician",
        // duration: "4 years",
        // startDate: "25/03/2025",
        modalidad1: "In person",
        modalidad2: "Remote",
        carreraType: "Degree Course",
    }
    ,      
    {
        title: "Bachelor of Advertising",
        imageSrc: "https://www.ubp.edu.ar/wp-content/uploads/2021/06/Publicidad-Landing-02.jpg",
        alt: "  Bachelor of Advertising",
        // duration: "4 years",
        // startDate: "25/03/2025",
        modalidad1: "In person",
        modalidad2: "Remote",
        carreraType: "Degree Course",
    }
]
    return (
        <>
            <div class='construccion'>
                <section
                    class="banner-construccion "
                >
                    <div
                        class="simple-div__construccion "
                    ></div>

                    <div
                        class="simple-div2--construccion "
                    >
                        <div class="divDentroBanner-construccion ">
                            <h1 class="h1DentroBanner__construccion ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Design and Construction</Breadcrumb.Item>
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

export default Construccion