import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/cienciasSociales.css"
import { GraduationCap, Monitor } from 'lucide-react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CienciasSociales() {
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
                    <Breadcrumb.Item active>Engineering</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </>
    )
}

export default CienciasSociales