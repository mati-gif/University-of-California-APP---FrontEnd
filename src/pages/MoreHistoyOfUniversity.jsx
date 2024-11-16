import React, { useState } from 'react'
import "../Styles/moreHistoryOfUniversity.css"
import { Image, Nav } from "react-bootstrap";
import logo from "../assets/4.png";
import { useLocation } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/bundle"
import 'swiper/css/navigation';

function MoreHistoyOfUniversity() {


    return (
        <>
            <div class='elDiv-principal'>

                <Breadcrumb style={{border:"2px solid #48e",fontSize:"20px"}}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>History of University</Breadcrumb.Item>
                </Breadcrumb>

                <section class='section'>
                    <p class='section-p'>
                        The UC community is driven by a shared purpose: to make a better world through education, research, and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.
                    </p>
                    <div class='section-div'>
                        <div class='section-subdiv1'>
                            Founded to accelerate the nation’s industrial revolution, MIT is profoundly American. With ingenuity and drive, our graduates have invented fundamental technologies, launched new industries, and created millions of American jobs. At the same time, and without the slightest sense of contradiction, MIT is profoundly global. Our community gains tremendous strength as a magnet for talent from around the world. Through teaching, research, and innovation, MIT’s exceptional community pursues its mission of service to the nation and the world.
                        </div>
                        <div class='section-subdiv2'>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper2"
                            >
                                <div class='swiper-div'>
                                    <SwiperSlide className='swiper-div'><img src="https://www.mit.edu/files/images/201807/7204396626_9fedc2cf29_b.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="https://www.mit.edu/files/images/201807/7204388944_0c7e35cdfe_b.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="https://www.mit.edu/files/images/201806/DSC4585-Photo%20by%20Christopher%20Harting_preview_0.jpeg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="https://www.mit.edu/files/images/201806/11408240256_b923060908_b_0.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="https://www.mit.edu/files/images/201806/7205078132_7d54fda466_b.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="https://www.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="https://www.mit.edu/files/images/201806/MIT%20Flickr%20Library_1019-346-Photo%20by%20Jake%20Belcher_preview.jpeg" alt="" /></SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </section>


                <div class="contenedor-facts">
                    <h1 class="titulo-facts">Key Facts</h1>

                    <div class="grid-facts">
                        <div>
                            {/* <!-- History Section --> */}
                            <h2 class="subtitulo-facts">History</h2>
                            <div class="grid-datos">
                                <div>Incorporated </div>
                                <div class="text-right">1861</div>
                                <div>Motto</div>
                                <div class="text-right">"Mens et manus"<br />("mind and hand")</div>
                            </div>

                            {/* <!-- Campus Section --> */}
                            <h2 class="subtitulo-facts">Campus</h2>
                            <div class="grid-datos">
                                <div>Location </div>
                                <div class="text-right">California, USA</div>
                                <div>Size </div>
                                <div class="text-right">168 acres (0.68 km2)</div>
                                <div>Student residences </div>
                                <div class="text-right">19</div>
                                <div>Playing fields </div>
                                <div class="text-right">26 acres (0.11 km2)</div>
                                <div>Gardens + green spaces </div>
                                <div class="text-right">40+</div>
                                <div>Publicly sited works of art</div>
                                <div class="text-right">60+</div>
                            </div>

                            {/* <!-- Admissions Section --> */}
                            <h2 class="subtitulo-facts">Admissions (Class of 2027)</h2>
                            <div class="grid-datos">
                                <div>Applicants</div>
                                <div class="text-right">26,914</div>
                                <div>Admits</div>
                                <div class="text-right">1,291</div>
                            </div>

                            {/* <!-- Selected Honors Section --> */}
                            <h2 class="subtitulo-facts">Selected Honors</h2>
                            <div class="grid-datos">
                                <div>Nobel laureates</div>
                                <div class="text-right">101</div>
                                <div>National Medal of Science winners</div>
                                <div class="text-right">61</div>
                                <div>National Medal of Technology and Innovation winners</div>
                                <div class="text-right">33</div>
                                <div class='Fellows'>MacArthur Fellows</div>
                                <div class="text-right">83</div> 
                            </div>

                        </div>

                        {/* <!-- Images Section --> */}
                        <div class="imagenes-section">
                            <div class='imagenes-section-div'>
                                <Image
                                    src="https://www.mit.edu/files/images/201804/key-facts-1.jpg"
                                    alt="MIT's first building in Boston"
                                    width={200}
                                    height={150}
                                    class="imagen-article"
                                />
                                <p class="texto-imagen">
                                    <span class="texto-rojo">a.</span>
                                    UC first building was in San Francisco, before the move to California in 1916.
                                </p>
                            </div>
                            <div>
                                <Image
                                    src="https://www.mit.edu/files/images/201806/15331998332_edc282f399_b.jpg"
                                    alt="Aesop's Fables II sculpture"
                                    width={200}
                                    height={150}
                                    class="imagen-article"
                                />
                                <p class="texto-imagen">
                                    <span class="texto-rojo">b.</span>
                                    "Aesop's Fables II," by Mark di Suvero, is part of UC ´s public art collection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Community (as of 10/30/23) */}
                <div class="contenedor-facts">
                    <h1 class="titulo-facts">Community (as of 10/30/23)</h1>

                    <div class="grid-facts">
                        <div>
                            <div class="grid-datos">
                                <div class='us'>Employees (including faculty) </div>
                                <div class="text-right">17,180</div>
                                <div class='us'>Professors (all ranks)</div>
                                <div class="text-right">1,089</div>
                                <div class='us'>Students </div>
                                <div class="text-right">11,920</div>
                                <div class='us'>Undergraduates</div>
                                <div class="text-right">4,576</div>
                                <div class='us'>US minority groups</div>
                                <div class="text-right">2,650 (58%)</div>
                            </div>

                        </div>

                        {/* <!-- Images Section --> */}
                        <div class="imagenes-section">
                            <div>
                                <Image
                                    src="https://www.mit.edu/files/images/201806/7256121744_78c2fb74a6_b_2.jpg"
                                    alt=""
                                    width={200}
                                    height={150}
                                    class="imagen-article"
                                />
                                <p class="texto-imagen">
                                    <span class="texto-rojo">a.</span>
                                    UC low ratio of student-to-faculty and instructional staff promotes intensive teaching.
                                </p>
                            </div>
                            <div>
                                <Image
                                    src="https://www.mit.edu/files/images/201806/DSC4585-Photo%20by%20Christopher%20Harting_preview_0.jpeg"
                                    alt=""
                                    width={200}
                                    height={150}
                                    class="imagen-article"
                                />
                                <p class="texto-imagen">
                                    <span class="texto-rojo">b.</span>
                                    In 2023–24, UC students came from all 50 states, the District of Columbia, four territories, and 136 foreign countries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Faculty */}
                <div class="contenedor-facts">
                    <h1 class="titulo-facts">Faculty</h1>

                    <div class="grid-facts">
                        <div>
                            <div class="grid-datos">
                                <p>For UC faculty — just over 1,000 in number — cutting-edge research and education are inseparable. Each feeds the other. When they’re not busy pioneering the frontiers of their fields, UC faculty members play a vital role in shaping the Institute’s vibrant campus community — as advisors, coaches, heads of houses, mentors, committee members, and much more.

                                </p>
                            </div>
                        </div>
                        {/* <!-- Images Section --> */}
                        <div class="imagenes-section">
                            <div>
                                <Image
                                    src="https://www.mit.edu/files/images/201807/7204388944_0c7e35cdfe_b.jpg"
                                    alt=""
                                    width={200}
                                    height={150}
                                    class="imagen-article"
                                />
                                <p class="texto-imagen">
                                    <span class="texto-rojo">a.</span>
                                    UC faculty instruct undergraduate and graduate students, and engage in research.
                                </p>
                            </div>
                            <div>
                                <Image
                                    src="https://www.mit.edu/files/images/201807/7204396626_9fedc2cf29_b.jpg"
                                    alt=""
                                    width={200}
                                    height={150}
                                    class="imagen-article"
                                />
                                <p class="texto-imagen">
                                    <span class="texto-rojo">b.</span>
                                    An UC professor works on an architectural model.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreHistoyOfUniversity