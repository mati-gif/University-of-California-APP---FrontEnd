import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/contactoIngreso.css"
function ContactoIngreso() {
  return (
    <>
      <div class='contactoIngreso'>
        <section
          class="banner-contactoIngreso "
        >
          <div
            class="simple-div__contactoIngreso "
          ></div>

          <div
            class="simple-div2--contactoIngreso "
          >
            <div class="divDentroBanner-contactoIngreso ">
              <h1 class="h1DentroBanner__contactoIngreso ">
                Contact UC Admission
              </h1>
            </div>
          </div>
        </section>
        <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active> Contact UC Admission</Breadcrumb.Item>
        </Breadcrumb>
        <div class="contenedor-cuadrosColores max-w-6xl mx-auto p-6">

          <div style={{ marginBottom: "2rem" }} class="mb-8">
            <h2 class="sub-tittle--A">INCOME DEPARTMENT</h2>
            <h3 class='sub-tittle__h3B'> Los Angeles: </h3>

            <p class="contactoIngreso__p">
              From Monday to Friday from 8 a.m. to 8 p.m., contact us by:
            </p>
            <ul class='talleresDeOrientacion2'>
              <li class='talleresDeOrientacion2--Li'> WhatsApp:
                <span style={{ color: "#000", fontWeight: "initial", marginLeft: "5px" }}>54 9 11 9874 6541 3210</span>
              </li>
              <li class='talleresDeOrientacion2--Li'> Tel.:
                <span style={{ color: "#000", fontWeight: "initial", marginLeft: "5px" }}>1234 4567 7891</span>
              </li>
              <li class='talleresDeOrientacion2--Li'> Email:
                <span style={{ color: "#000", fontWeight: "initial", marginLeft: "5px" }}>ingreso@uc.est.us</span>
              </li>
            </ul>
            <h3 class='sub-tittle__h3B'> Follow us on the networksSocial: </h3>
            <ul class='talleresDeOrientacion2'>
              <li class='talleresDeOrientacion2--Li'> Facebook:
                <a href="https://facebook.com" target='blank' >
                  <span style={{ fontWeight: "initial", marginLeft: "5px" }}>/ucingreso</span>
                </a>
              </li>
              <li class='talleresDeOrientacion2--Li'> Twitter:
                <a href="https://twitter.com" target='blank' >
                  <span style={{ fontWeight: "initial", marginLeft: "5px" }}>@ucingreso</span>
                </a>
              </li>
              <li class='talleresDeOrientacion2--Li'> Email:
                <a href="https://instagram.com" target='blank' >
                  <span style={{ fontWeight: "initial", marginLeft: "5px" }}>ingreso.uc</span>
                </a>
              </li>
            </ul>
            <h3 class='sub-tittle__h3B'> San Diego: </h3>
            <p class="contactoIngreso__p">
            Opening hours: Monday to Friday 9 a.m. to 8 p.m.
            </p>
            <ul class='talleresDeOrientacion'>
              <li style={{listStyle:"none"}}> 9500 Gilman Dr, La Jolla, CA 92093  </li>
            </ul>
            <ul class='talleresDeOrientacion2'>
              <li class='talleresDeOrientacion2--Li'> Tel.:
                  <span style={{ fontWeight: "initial", marginLeft: "5px" }}>1234 4567 7890</span>
              </li>
              <li class='talleresDeOrientacion2--Li'> WhatsApp::
                  <span style={{ fontWeight: "initial", marginLeft: "5px" }}>987 654 321 </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactoIngreso