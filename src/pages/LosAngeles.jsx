import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/losAngeles.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { ButtonGroup, DropdownItem } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { BookOpen } from 'lucide-react';

function LosAngeles() {
    return (
        <>
            <div class='LosAngeles'>
                <section
                    class="banner-LosAngeles "
                >
                    <div
                        class="simple-div__LosAngeles "
                    ></div>

                    <div
                        class="simple-div2--LosAngeles "
                    >
                        <div class="divDentroBanner-LosAngeles ">
                            <h1 class="h1DentroBanner__LosAngeles ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>UC Los Angeles</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColoresLosAngeles max-w-6xl mx-auto p-6">
                    <div class='contenedor--cuadroInfo_y_cuadroColoresLosAngeles'>
                        <div class="cuadrados-de-coloresLosAngeles  grid grid-cols-1 md:grid-cols-4 mb-8">
                            <h1 class='h1-losAngeles'>Welcome to UC Los Angeles –</h1>
                            <p class='losAngeles-p'>Plan a visit to see why Bruins old and new say attending UCLA is a life-changing experience. As a UCLA student, you are part of a community built around breathtaking scenery, convenient housing, renowned dining, state-of-the-art resources, diverse social life and more. It’s all on campus waiting to be explored.</p>
                        </div>
                        <div class='div__img-LosAngeles'>
                            <img class='img-losAngeles' src="https://stanleyprep.com/wp-content/uploads/2023/06/University-of-California-Santa-Barbara-UCSB-29.jpeg" alt="" />
                        </div>
                    </div>
                </div>

                <div class="contenedor-cuadrosColoresLosAngeles2 max-w-6xl mx-auto p-6">
                    <h1 className='losAngeles--h1b'>
                        <span >General Information</span>
                    </h1>
                    <div class='div-container--LA'>
                        <div class="contenedor-imagenes__LA">
                            <img class='LA__img' src="https://stanleyprep.com/wp-content/uploads/2023/06/University-of-California-Santa-Barbara-UCSB-26.jpeg" alt="" />
                            <img class='LA__img' src="https://www.ucla.edu/img/nav-cta-about-janns.png" alt="" />
                            <img class='LA__img' src="https://stanleyprep.com/wp-content/uploads/2023/06/University-of-California-Santa-Barbara-UCSB-1.jpg" alt="" />
                        </div>
                        <div class='contenedor-parrafos__LA'>
                            <div class='parrafo--LA'>
                                <p>The University of California, Los Angeles (UC Los Angeles or UCLA) is part of the University of California 10-university system with 23,196 undergraduates and 2,983 graduate students enrolled in 2021-2022 located in Isla Vista, California, a suburb of Los Angeles.</p>
                                <p>UCLA traces its origins back to the Anna Blake School, which was founded in 1891, and offered training in home economics and industrial arts. </p>
                                <p>The campus is divided into four parts: the Main (East) Campus of 708 acres (287 ha), which houses all academic units, plus the majority of undergraduate housing; Storke Campus; West Campus; and North Campus. The campuses surround the unincorporated community of Isla Vista.</p>
                            </div>
                            <div class='parrafo--LA'>
                                <p>UC Los Angeles is a large, comprehensive, primarily residential doctoral university. The full-time, four-year undergraduate program comprises the majority of enrollments and has an arts & sciences focus with high graduate coexistence. LA is organized into five colleges and schools offering 87 undergraduate degrees and 55 graduate degrees. The campus is the sixth-largest in the UC system by enrollment with 18,620 undergraduate and 3,065 graduate students.</p>
                                <p>The campus is home to the California NanoSystems Institute, one of the first California Institutes for Science and Innovation. A research partnership with UCLA, the institute is creating revolutionary new materials, devices, and systems that will enhance virtually every aspect of our lives.</p>
                            </div>
                            <div class='parrafo--LA'>
                                <p>From hard sciences to studio art and all points in between, your educational opportunities abound at UCSB. We offer more than 200 majors, degrees and credentials, a number that includes 90+ undergraduate majors and more than 50 graduate programs.</p>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"100px" }}>
                                    <button id='buttonSD_map' class="custom-btn btn-5">
                                        <a href="https://www.maps.ucla.edu/?id=2043#!ct/75713?s/" target='blank'> Campus Map</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contenedor-cuadrosColoresLosAngeles3 max-w-6xl mx-auto p-6">
                    <h2 className='losAngeles--h2C'>
                        <span >College and Majors</span>
                    </h2>
                    <div class='div-container--LA-2'>
                        <div class='div__columna1'>
                            <div class='dropDown--LA' >
                                {['end'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Economic and business sciences"
                                            className='DropdownButton--LA'

                                        >
                                            <Dropdown.Item eventKey="1"> → Economy</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → Public Accountant</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Statistics</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → Finance</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <DropdownItem eventKey="5"> → Bachelor of Administration</DropdownItem>
                                            <Dropdown.Divider />
                                            <DropdownItem eventKey="6"> → Bachelor in International Trade</DropdownItem>
                                            <Dropdown.Divider />
                                            <DropdownItem eventKey="7"> → Bachelor in Digital Business</DropdownItem>
                                            <Dropdown.Divider />
                                            <DropdownItem eventKey="8"> → Bachelor's degree in marketing</DropdownItem>
                                            <Dropdown.Divider />
                                            <DropdownItem eventKey="9"> → Marketing</DropdownItem>
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                            <div class='dropDown--LA' >
                                {['end'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Law and Political Sciences"
                                            className='DropdownButton--LA'
                                        >
                                            <Dropdown.Item eventKey="1"> → Law</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → Bachelor of Political Science</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Notary</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → Real Estate Broker</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="5"> → Public auctioneer</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="6"> → International Relations</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="7"> → Political sciences</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                            <div class='dropDown--LA' >
                                {['end'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Technology and Computer Science"
                                            className='DropdownButton--LA'
                                        >
                                            <Dropdown.Item eventKey="1"> → Programming Technician</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → Data Science</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Devops</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → Cybersecurity</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="5"> → FullStack Developer (Java + React Js)</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="6"> → FullStack Developer (.NET + Angular)</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="7"> → Data Analyst</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                            <div class='dropDown--LA' >
                                {['end'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Medicine and Natural Sciences"
                                            className='DropdownButton--LA'
                                        >
                                            <Dropdown.Item eventKey="1"> → Medicine</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → Bachelor of Nursing</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Dentistry</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → Bachelor of Nutrition</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="5"> → Bachelor's Degree in Bioimage Production</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="6"> → Bachelor's Degree in Surgical Instrumentation</Dropdown.Item>
                                            {/* <Dropdown.Item eventKey="7"></Dropdown.Item> */}
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                        </div>

                        <div class='div__columna2'>
                            <div class='dropDown--LA' >
                                {['start'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Engineering"
                                            className='DropdownButton--LA'
                                        >
                                            <Dropdown.Item eventKey="1"> → Industrial Engineering</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → Mechanical Engineering</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Chemical Engineering</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → Civil Engineering</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="5"> → Food Engineering</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="6"> → Systems Engineering</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="7"> → Electrical Engineering</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                            <div class='dropDown--LA' >
                                {['start'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Social Sciences"
                                            className='DropdownButton--LA'
                                        >
                                            <Dropdown.Item eventKey="1"> → History teacher</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → Bachelor of Philosophy</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Geographer</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → Bachelor's Degree in Psychology</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="5"> → Bachelor's Degree in Sociology</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="6"> → Bachelor's Degree in Social Communication</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                            <div class='dropDown--LA' >
                                {['start'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Design and Construction"
                                            className='DropdownButton--LA'
                                        >
                                            <Dropdown.Item eventKey="1"> → Architecture</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → Graphic Design</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Industrial Design</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → Interior Design</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="5"> → Construction Inspector</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="6"> → Safety and Hygiene Technician</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="7"> → Bachelor of Advertising</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                            <div class='dropDown--LA' >
                                {['start'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Art, Music and Design"
                                            className='DropdownButton--LA'
                                        >
                                            <Dropdown.Item eventKey="1"> → Bachelor of Music</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → Musical Composition</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Sound Engineering</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → Multimedia Design</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="5"> → Bachelor of Acting</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                            <div class='dropDown--LA' >
                                {['start'].map(
                                    (direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            // key={direction}
                                            // id={`dropdown-button-drop-${direction}`}
                                            id="dropdown-menu-align-end"
                                            drop={direction}
                                            // variant="secondary"
                                            title="Languajes and Translations"
                                            className='DropdownButton--LA'
                                        >
                                            <Dropdown.Item eventKey="1"> → English</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="2"> → English Translator</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="3"> → Italian</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4"> → French</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="5"> → Mandarin Chinese</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="6"> → Portuguese</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="7"> → German</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </div>
                        </div>



                    </div>
                </div>

                <div class="contenedor-cuadrosColoresLosAngeles2 max-w-6xl mx-auto p-6">
                    <h1 className='losAngeles--h1D'>
                        <span >Gallery</span>
                    </h1>
                    <div class='div-container--LA-gallery'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                clickable: true,
                                // el: '.custom-pagination',
                            }}
                            navigation={true}  // Activar navegación con flechas
                            modules={[Keyboard, Navigation, Autoplay, Pagination]}
                            className="mySwiper5"
                        >
                            <SwiperSlide  ><img style={{ objectFit: "cover" }} src="https://fastly.4sqi.net/img/general/600x600/29667004_Ag_kVDjIf6zTOQSEBzPXmtsIe-XVy6ijNkl9IDxluVg.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20176/5968fbb62cfac26778007be6_UCLA+sign/UCLA+sign_thmb.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20125/52e70ee4f6091d782f0001ed__U7H2410/_U7H2410_thmb.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://www.econ.ucsb.edu/sites/default/files/styles/medium_landscape/public/2020-09/storke-panorama-graduate-banner.jpg?itok=Idb7pVTG" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://media.istockphoto.com/id/2115729550/es/foto/girvetz-hall-departamento-de-matem%C3%A1ticas-ling%C3%BC%C3%ADstica-y-m%C3%A1s-ucsb-santa-b%C3%A1rbara-california.jpg?s=612x612&w=0&k=20&c=Ird052-aRYUumztEnBefvsbeMd6qa6ESXKr2DK3juJs=" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20193/5cae948d2cfac23fe70d1479_8x_Pauley+Pavilion_N+Entrance_01/8x_Pauley+Pavilion_N+Entrance_01_thmb.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20193/5cafc7eb2cfac23fe70d8f59_Janss+Steps_001/Janss+Steps_001_thmb.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20193/5cafc7f32cfac23fe70d8f5b_Royce_021/Royce_021_thmb.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20193/5cafc8922cfac23fe80f5cd6_Alpert+School+of+Music_07/Alpert+School+of+Music_07_thmb.jpg" alt="" /></SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LosAngeles