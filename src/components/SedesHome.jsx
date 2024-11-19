import React, { useEffect } from 'react'
import "../Styles/sedesHome.css"

import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from 'react-router-dom';

function SedesHome() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Inicia AOS con una duración de 1000 ms
      }, []);
    return (
        <>
            <div id='locations' class='main-div'>
                <h2 id='h2-id'>
                    Locations
                </h2>

                <div class="container">
                    {/* <!-- Tarjeta 1 --> */}
                    <div id="card" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img src="https://media.istockphoto.com/id/582306698/es/foto/vista-a%C3%A9rea-de-los-edificios-del-campus-de-uc-berkeley.jpg?s=612x612&w=0&k=20&c=fiztElmkZNKGL2b_8Eb_zSd_A4fWNZBiFO80bJwlzlI=" alt="Rock&Feller's Alto Rosario" />
                        <div class="card-content">
                            <h2> Los Angeles </h2>
                            <p>1200 E California Blvd, Pasadena, CA 91125<br />LA - California</p>
                            {/* <a href="#">More info →</a> */}
                            <Link to="/losAngeles" >
                            <button class='boton-sede'>
                            More info →
                            </button>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- Tarjeta 2 --> */}
                    <div id="card" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img src="https://media.istockphoto.com/id/1126586032/es/foto/campus-ucla.jpg?s=612x612&w=0&k=20&c=zX7WSW8DUef29pUjIiPu91yWx87yvjIrpsJvLYGiyfM=" alt="Rock&Feller's Pilar" />
                        <div class="card-content">
                            <h2>San Diego</h2>
                            <p>9500 Gilman Dr, La Jolla, CA 92093<br />LA - California</p>
                            {/* <a href="#">More info →</a> */}
                            
                            <button class='boton-sede'>
                            More info →
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SedesHome