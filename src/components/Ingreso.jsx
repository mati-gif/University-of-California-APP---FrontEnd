import React from 'react'
import "../Styles/ingreso.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


// import required modules
import { FreeMode, Keyboard, EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Ingreso() {
    return (
        <>
            <div class='gran-div'>
                <h2 id='gran-h2'>
                    Income
                </h2>

                <div class='ingreso-div'>
                    <div class='ingreso'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}  // Activar navegación con flechas
                            modules={[Keyboard, Navigation, Autoplay,FreeMode, Pagination]}
                            className="mySwiper3"
                        >
                            <SwiperSlide style={{ textAlign: "center", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center", border: "3px dotted #789" }}>
                                <div class="magic-card">
                                    <div class="magic-image">
                                        <img src="https://wadmin.uca.edu.ar/public/filters/medium/public/20231215/1702664672_mapa-tumbado-mesa-madera.jpg" alt="" />
                                    </div>
                                    <div class="magic-content">
                                        <span class="magic-title">
                                            Schools, Teachers and Institutions
                                        </span>
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Learn More</span>
                                        </button>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ textAlign: "center", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center", border: "3px dotted #789" }}>
                                <div class="magic-card">
                                    <div class="magic-image">
                                        <p class='magic-p'>Headquarters</p>
                                    </div>
                                    <div class="magic-content">
                                        <p class="magic-title2">
                                            Headquarters
                                        </p>
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Learn More</span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ textAlign: "center", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center", border: "3px dotted #789" }}>
                                <div class="magic-card">
                                    <div class="magic-image">
                                        <img src="https://wadmin.uca.edu.ar/public/filters/medium/public/20210828/1630191131_Marketing.jpg" alt="" />
                                    </div>
                                    <div class="magic-content">
                                        <p class="magic-title2">
                                            Check your equivalences
                                        </p>
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Learn More</span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ textAlign: "center", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center", border: "3px dotted #789" }}>
                                <div class="magic-card">
                                    <div class="magic-image">
                                        <img src="https://wadmin.uca.edu.ar/public/filters/medium/public/20171211/5a2ea93467881.jpg" alt="" />
                                    </div>
                                    <div class="magic-content">
                                        <p class="magic-title2">
                                            Vocational Guidance
                                        </p>
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Learn More</span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ textAlign: "center", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center", border: "3px dotted #789" }}>
                                <div class="magic-card">
                                    <div class="magic-image">
                                        <img src="https://wadmin.uca.edu.ar/public/filters/medium/public/20210217/1613595914_negocios%20digitales.jpg" alt="" />
                                    </div>
                                    <div class="magic-content">
                                        <p class="magic-title2">
                                            Contact UC Admission
                                        </p>
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Learn More</span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ textAlign: "center", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center", border: "3px dotted #789" }}>
                            <div class="magic-card">
                                    <div class="magic-image">
                                        <img src="https://wadmin.uca.edu.ar/public/filters/medium/public/20200603/1591189011_rrhh%20(1).jpg" alt="" />
                                    </div>
                                    <div class="magic-content">
                                        <p class="magic-title2">
                                        UC country experience
                                        </p>
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Learn More</span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}
