import React from 'react'
import "../Styles/followUs.css"
import { Facebook, Youtube, Instagram, Linkedin, Twitter, Music, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom';
// import Link from 'next/link'

function FollowUs() {


    const data = [
        {
            img1: "https://wadmin.uca.edu.ar/public/filters/medium/public/20241025/1729873664_placa.jpg",
            imageUrl: "https://uca.edu.ar/assets/img/instagram3.jpg",
            description: "The San Diego UC School, at its Congress headquarters, paid tribute to three important figures in its history, in an act full of symbolism... "
        },
        {
            img1: "https://wadmin.uca.edu.ar/public/filters/medium/public/20241025/1729873617_filo.jpg",
            imageUrl: "https://uca.edu.ar/assets/img/facebook3.jpg",
            description: "The Faculty of Philosophy and Letters of the UC presented the bibliographic collection of Philosophy, Letters and Languages, composed of three ..."
        },
        {
            img1: "https://wadmin.uca.edu.ar/public/filters/medium/public/20230126/1674764857_10%20an%CC%83os%20de%20compromiso%20social%20en%20la%20UCA%20(3).jpg",
            imageUrl: "https://uca.edu.ar/assets/img/X.png",
            description: "The UC Emergency Brigade, created at the initiative of the Operational Services Directorate and intended to address extreme situations...​"
        },
    ];


    return (
        <>
            <div class='Optimus-div'>
                <h2 class='optimus-h2'>
                    Follow Us
                </h2>
                <div class='redes'>
                    <div style={{backgroundColor:"#fff",paddingTop: "2rem", paddingBottom:"2rem"}}>
                        <div className="" style={{maxWidth:"56rem",marginLeft: "auto", marginRight:"auto",textAlign:"center" }}>

                            <div class="redes-container ">
                                <Link
                                    href="#"
                                    class="redes-link "
                                >
                                    <img class='facebook' src="https://uca.edu.ar/assets/img/facebook2.jpg" alt="" />
                                </Link>

                                <Link
                                    href="#"
                                    class="redes-link "
                                >
                                    <img class='youtube' src="https://uca.edu.ar/assets/img/youtube2.jpg" alt="" />
                                    
                                </Link>
                                <Link
                                    href="#"
                                    class="redes-link "
                                >
                                    <img class='instagram' src="https://uca.edu.ar/assets/img/instagram2.jpg" alt="" />
                                </Link>

                                <Link
                                    href="#"
                                    className="redes-link "
                                >
                                    <img class='linkedin' src="https://uca.edu.ar/assets/img/linkedin2.jpg" alt="" />
                                </Link>

                                <Link
                                    href="#"
                                    class="redes-link"
                                >
                                    <img class='twitter' src="https://uca.edu.ar/assets/img/x2.jpg" alt="" />
                                </Link>

                                <Link
                                    href="#"
                                    class="redes-link "
                                >
                                    <img class='tiktok' src="https://uca.edu.ar/assets/img/tiktok2.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>





                <div class='follow-div'>
                    <div class='follow'>
                        {data.map((item) => (
                            <>

                                <div class="card-follow">
                                    <div class="card__corner-follow"></div>
                                    <div class="card__img-follow">
                                        {/* <span class="card__span-follow">Category</span> */}
                                        <img style={{ borderRadius: "8px", border: "2px solid #000", objectFit: "cover", width: "100%", height: "100%" }} src={item.img1} alt={item.img1} />
                                    </div>
                                    <div class="card-int-follow">
                                        {/* <p class="card-int__title-follow">This is the article title</p> */}
                                        <div style={{ border: "2px solid #000", display: "flex", justifyContent: "center" }}>
                                            <img style={{ border: "2px solid #456" }} src={item.imageUrl} alt={item.imageUrl} />
                                        </div>
                                        <p class="excerpt-follow">{item.description}</p>
                                        <div style={{ border: "2px solid #456", display: "flex", justifyContent: "center" }}>
                                            <button class="card-int__button-follow">Show</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}


                    </div>
                </div>
            </div>
        </>

    )
}

export default FollowUs