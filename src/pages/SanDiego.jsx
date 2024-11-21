import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/sanDiego.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { ButtonGroup, DropdownItem } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
function SanDiego() {

    const data = [
        {
            title: "Economic and business sciences",
            items: [
                "Economy",
                "Public Accountant",
                "Statistics",
                "Finance",
                "Bachelor of Administration",
                "Bachelor in International Trade",
                "Bachelor in Digital Business",
                "Bachelor's degree in marketing",
                "Marketing",
            ],
        },
        {
            title: "Law and Political Sciences",
            items: [
                "Law",
                "Bachelor of Political Science",
                "Notary",
                "Real Estate Broker",
                "Public auctioneer",
                "International Relations",
                "Political sciences",
            ],
        },
        {
            title: "Technology and Computer Science",
            items: [
                "Programming Technician",
                "Data Science",
                "Devops",
                "Cybersecurity",
                "FullStack Developer (Java + React Js)",
                "FullStack Developer (.NET + Angular)",
                "Data Analyst",
            ],
        },
        {
            title: "Medicine and Natural Sciences",
            items: [
                "Medicine",
                "Bachelor of Nursing",
                "Dentistry",
                "Bachelor of Nutrition",
                "Bachelor's Degree in Bioimage Production",
                "Bachelor's Degree in Surgical Instrumentation",
            ],
        },
        {
            title: "Engineering",
            items: [
                "Industrial Engineering",
                "Mechanical Engineering",
                "Chemical Engineering",
                "Civil Engineering",
                "Food Engineering",
                "Systems Engineering",
                "Electrical Engineering",
            ],
        },
        {
            title: "Social Sciences",
            items: [
                "History teacher",
                "Bachelor of Philosophy",
                "Geographer",
                "Bachelor's Degree in Psychology",
                "Bachelor's Degree in Sociology",
                "Bachelor's Degree in Social Communication",
            ],
        },
        {
            title: "Design and Construction",
            items: [
                "Architecture",
                "Graphic Design",
                "Industrial Design",
                "Interior Design",
                "Construction Inspector",
                "Safety and Hygiene Technician",
                "Bachelor of Advertising",
            ],
        },
        {
            title: "Art, Music and Design",
            items: [
                "Bachelor of Music",
                "Musical Composition",
                "Sound Engineering",
                "Multimedia Design",
                "Bachelor of Acting",
            ],
        },
        {
            title: "Languages and Translations",
            items: [
                "English",
                "English Translator",
                "Italian",
                "French",
                "Mandarin Chinese",
                "Portuguese",
                "German",
            ],
        },
    ];

    return (
        <>
            <div class='sanDiego'>
                <section
                    class="banner-sanDiego "
                >
                    <div
                        class="simple-div__sanDiego "
                    ></div>

                    <div
                        class="simple-div2--sanDiego "
                    >
                        <div class="divDentroBanner-sanDiego ">
                            <h1 class="h1DentroBanner__sanDiego ">

                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>UC San Diego</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColoresSanDiego5 max-w-6xl mx-auto p-6">
                    <div class='sanDiego--h1G'>
                        <img src="https://www.ucsd.edu/_resources/img/logo_UCSD.png" alt="" />
                    </div>
                    <div class='div-container--SD'>
                        <div class='div-SD'>
                            <h1 style={{ border: "2px solid #456", color: "#182B49", marginLeft: "20px", marginTop: "30px" }}>
                                Discover UC San Diego
                            </h1>
                            <p style={{ border: "2px solid #456", color: "#182B49", marginLeft: "20px", minHeight: "100px", width: "50%", fontSize: "24px" }} >
                                UC San Diego’s campus offers more than just salt air, sunshine and sweeping ocean views. From state-of the-art labs and research facilities to innovative spaces for exploring art and fostering creativity, it’s a destination for bold thinkers and curious minds. Come visit us and discover what it means to be a Triton. Your next big adventure could start here.
                            </p>

                        </div>
                        <div class='segundo__div-SD'>
                            <div>
                                <h2 style={{ width: "41vw", border: "2px solid #456", color: "#182B49", marginLeft: "20px", marginTop: "30px", fontSize: "50px" }}>
                                    Tours
                                </h2>
                                <p style={{ border: "2px solid #456", color: "#182B49", marginLeft: "20px", minHeight: "100px", width: "90%", fontSize: "20px" }} >
                                    Explore our beautiful seaside campus virtually, in person or both—and see what makes UC San Diego the perfect environment to make a big impact. Discover our world-renowned public art collection, marvel at unique architecture or walk along Scripps Pier, where researchers are working to solve the world’s most pressing environmental challenges. Tours are very limited at this time.
                                </p>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button id='button_map' class="custom-btn btn-5">
                                        <a href="https://maps.ucsd.edu/map/default.htm" target='blank'> Campus Map</a>
                                    </button>
                                </div>
                            </div>
                            <div class='contaier-img__SD' >
                                <img style={{ border: "2px solid #456", color: "#182B49", width: "100%", height: "100%" }} src="https://ucsd.edu/_images/about/visiting-tours/img-visiting-tours-tours-1.jpg" alt="" />
                            </div>
                        </div>
                        <div class='tercer__div-SD' >
                            <div class='div-izquierdo'>
                                <h2 class='h1__izquierdo'>
                                    DRIVING
                                </h2>
                                <p class='p-izquierdo-SD'>
                                    Arriving by car? Our La Jolla campus is conveniently located just off I-5. Visitors can purchase hourly parking at parking pay stations or on their mobile device.
                                </p>

                            </div>
                            <div class='div-izquierdo'>
                                <h2 class='h1__izquierdo'>
                                    PUBLIC TRANSIT
                                </h2>

                                <p class='p-izquierdo-SD'>
                                    Whether you’re arriving by bus, the COASTER train or the Blue Line Trolley that connects our La Jolla campus to the local San Diego community and beyond, we’ve got you covered.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class='div-container2--SD'>
                        <div>
                            <h2 style={{ width: "41vw", border: "2px solid #456", color: "#182B49", marginLeft: "20px", marginTop: "30px", fontSize: "50px" }}>
                                ATHLETICS
                            </h2>
                            <p style={{ border: "2px solid #456", color: "#182B49", marginLeft: "20px", minHeight: "100px", width: "90%", fontSize: "20px" }} >
                                Join the sea of blue and gold and cheer our Division I scholar-athletes to victory. There’s never been a more exciting time to be a Triton.
                            </p>
                        </div>
                        <div class='contaier-img__SD2' >
                            <img style={{ border: "2px solid #456", color: "#182B49", width: "100%", height: "100%" }} src="https://ucsd.edu/_images/about/visiting-tours/img-visiting-tours-athletics.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="contenedor-cuadrosColoresSanDiego6 max-w-6xl mx-auto p-6">
                    <div class='div-container--SD2'>
                        <div class='div-SD2'>
                            <h1 style={{ border: "2px solid #456", color: "#182B49", marginLeft: "20px", marginTop: "30px" }}>
                                College and Majors
                            </h1>
                            <div class='div-container--LA-2'>
                                <div class='div__columna1'>
                                    <div class='dropDown--LA' >
                                        {['end', data].map(
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


                    </div>

                </div>

                <div class="contenedor-cuadrosColoresSanDiego7 max-w-6xl mx-auto p-6">
                    <div class='div-container--SD3'>
                        <div class='div-SD3'>
                            <h1 style={{ border: "2px solid #456", color: "#182B49", marginLeft: "20px", marginTop: "30px" }}>
                                Gallery
                            </h1>
                            <div class='div-container--LA-3'>
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
                            <SwiperSlide  ><img style={{ objectFit: "cover" }} src="https://ucsd.edu/_resources/img/img-visiting-tours-shopping.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://s8kvb6qnle.execute-api.us-west-2.amazonaws.com/?hash=1a8f9f588944ebf29d1c460adbdb7664&url=https://www.sandiego.edu/images/usd-home-visit.jpg&width=640&webp=true" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://s8kvb6qnle.execute-api.us-west-2.amazonaws.com/?hash=3189fc136fbd1cc047dbe474ad61b7b1&url=https://www.sandiego.edu/images/homepage/24-fall/stories-wsj-ranking.jpg&width=2100&webp=true" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://media.gettyimages.com/id/128309910/es/foto/ca-university-of-california-geisel-library.jpg?s=612x612&w=0&k=20&c=K-YPA2cNyQIeH92Otngu2iCWORuOaSUCADFoDZg-th0=" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://media.gettyimages.com/id/668808648/es/foto/aerial-view-of-the-university-of-california-san-francisco-medical-campus-at-mission-bay-with.jpg?s=612x612&w=0&k=20&c=yhxwYfxsD3siXJ_lM9VRgiVdgQ6o0vhexwBEXLf6j6E=" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://media.gettyimages.com/id/1145939532/es/foto/san-diego-state-university-california-usa.jpg?s=612x612&w=0&k=20&c=MbM2Ifg_3QHiAWWoZjWRV3hzcd8LhYNYWWpyQhueFjk=" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://media.gettyimages.com/id/1145937831/es/foto/san-diego-state-university-california-usa.jpg?s=612x612&w=0&k=20&c=iVLa6ulVZ3EJa8ul8d2Jqm6-fPDOKrMj8sszQ8KdtoI=" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://media.gettyimages.com/id/600778902/es/foto/entrance-to-the-ron-conway-family-medical-building-at-ucsfs-hospital-campus-in-the-mission-bay.jpg?s=612x612&w=0&k=20&c=cuwqZqEd1JB0ojVwdZHe6E-UGt6bROG4hg2VmgTtLvg=" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ objectFit: "cover" }} src="https://media.gettyimages.com/id/1415240679/es/foto/universidad-de-california-en-san-diego.jpg?s=612x612&w=0&k=20&c=wUf60PdbW8XAJHwxNsiD5F3kCwPPzegKYysAbrokITI=" alt="" /></SwiperSlide>
                        </Swiper>
                            </div>
                        </div>
                    </div>
                    <div class='div-container2--SD'>
                        <div>
                            <h2 style={{ width: "41vw", border: "2px solid #456", color: "#182B49", marginLeft: "20px", marginTop: "30px", fontSize: "50px" }}>
                            LIBRARY
                            </h2>
                            <p style={{ border: "2px solid #456", color: "#182B49", marginLeft: "20px", minHeight: "100px", width: "90%", fontSize: "20px" }} >
                            With study spaces, labs and access to the largest university research library system in the world, the Library is the perfect place to follow your curiosity and think outside the box.
                            </p>
                        </div>

                        <div style={{width:"100vw",height:"100%"}} >
                            <img style={{ zIndex:"1",border: "2px solid #456", color: "#182B49", width: "100%", height: "100%" }} src="https://ucsd.edu/_images/about/visiting-tours/img-visiting-tours-library.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SanDiego