import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/losAngeles.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { ButtonGroup } from 'react-bootstrap';

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
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contenedor-cuadrosColoresLosAngeles3 max-w-6xl mx-auto p-6">
                    <h2 className='losAngeles--h2C'>
                        <span >College and Majors</span>
                    </h2>
                    <div class='div-container--LA-2'>
                        <div class='dropDown--LA' >
                            {['end'].map(
                                (direction) => (
                                    <DropdownButton
                                        as={ButtonGroup}
                                        key={direction}
                                        id={`dropdown-button-drop-${direction}`}
                                        drop={direction}
                                        variant="secondary"
                                        title={` Drop ${direction} `}
                                        className='DropdownButton--LA'
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                ),
                            )}
                        </div>
                        <div class='dropDown--LA' >
                            {['end'].map(
                                (direction) => (
                                    <DropdownButton
                                        as={ButtonGroup}
                                        key={direction}
                                        id={`dropdown-button-drop-${direction}`}
                                        drop={direction}
                                        variant="secondary"
                                        title={` Drop ${direction} `}
                                        className='DropdownButton--LA'
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                ),
                            )}
                        </div>
                        <div class='dropDown--LA' >
                            {['end'].map(
                                (direction) => (
                                    <DropdownButton
                                        as={ButtonGroup}
                                        key={direction}
                                        id={`dropdown-button-drop-${direction}`}
                                        drop={direction}
                                        variant="secondary"
                                        title={` Drop ${direction} `}
                                        className='DropdownButton--LA'
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                ),
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LosAngeles