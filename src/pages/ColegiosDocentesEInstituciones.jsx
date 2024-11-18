import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/colegiosDocentesEInstituciones.css"
function ColegiosDocentesEInstituciones() {
    return (
        <>
            <div class='colegiosDocentesEInstituciones'>
                <section
                    class="banner-colegiosDocentesEInstituciones "
                >
                    <div
                        class="simple-div__colegiosDocentesEInstituciones "
                    ></div>

                    <div
                        class="simple-div2--colegiosDocentesEInstituciones "
                    >
                        <div class="divDentroBanner-colegiosDocentesEInstituciones ">
                            <h1 class="h1DentroBanner__colegiosDocentesEInstituciones ">
                                Schools, Teachers and Institutions
                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active> Schools, Teachers and Institutions</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColores max-w-6xl mx-auto p-6">

                    <div style={{ marginBottom: "2rem" }} class="mb-8">

                        <p class="colegiosDocentesEInstituciones__p">
                            The UC offers a series of activities tailored to the needs of secondary and tertiary education, students and institutions to allow interested parties to learn about the academic offerings and culture of the University. Among all the proposals we can highlight:
                        </p>
                        <h2 class="sub-tittle--1">Activities for educational institutions and interested parties</h2>
                        <h3 class='sub-tittle__h3'> School visit program and in-person tour: (San Diego) </h3>

                        <p class="colegiosDocentesEInstituciones__p2">
                            Activity lasting approximately one hour that includes an institutional talk along with a tour of the four buildings that make up the Puerto Madero campus, visiting the different sectors of the university such as classrooms, auditoriums, recreation spaces, Cultural Center, Sports, Library , among others.
                        </p>

                        <h2 class="sub-tittle--1">Talks with professors from the faculties: (San Diego)</h2>
                        <p class="colegiosDocentesEInstituciones__p2">
                            Activity lasting approximately one hour in which interested parties have a space to talk with professors from the different careers offered by the university and resolve queries related to their duration, job opportunities, professional practices, subjects, among other topics. . The following activity can be done both virtually and in person.
                        </p>
                        <h3 class='sub-tittle__h3'> Talks at secondary and tertiary education institutions: (All locations) </h3>
                        <p class="colegiosDocentesEInstituciones__p2">
                            For those who cannot come to the UCA, we offer talks or workshops at educational institutions on a topic that they are interested in developing, or an institutional talk describing the academic offerings and activities offered by our university.
                        </p>
                        <h3 class='sub-tittle__h3'> Orientation workshops: (All locations) </h3>
                        <ul class='talleresDeOrientacion'>
                            <li> Vocational  </li>
                            <p>For students who wish to reflect on the factors that revolve around career choice, such as family, environment and job possibilities, for example.</p>
                            <li> Challenge of University life</li>
                            <p class="colegiosDocentesEInstituciones__p2">Generate a space in which students can learn and share concerns and fears regarding the changes they will experience in their transition from high school to University.</p>
                        </ul>
                        <h3 class='sub-tittle__h3'>UC Experience: (All locations) </h3>
                        <p class="colegiosDocentesEInstituciones__p2">The UC opens its doors so that all schools interested in meeting the directors of the courses can connect through a virtual platform and participate in talks on all courses in one place. More information: <Link to="/experienciaUC">Experiencia UC</Link></p>
                        <h3 class='sub-tittle__h3'>Proposals for Vocational Counselors and Teachers: (All locations) </h3>
                        <ul class='talleresDeOrientacion2'>
                            <li class='talleresDeOrientacion2--Li'> Online guides:
                                <span style={{ color: "#000", fontWeight: "initial", marginLeft: "5px" }}>By simply completing a form you can receive free e-books on different topics written by our professionals</span>
                                <ul>
                                    <li class='li__ul2' >
                                        From Risk to Opportunity: building a personal brand online:
                                        <span style={{ color: "#000", fontWeight: "initial", marginLeft: "5px" }}>A guide with the precautions to take on the Internet and how to capitalize on them to generate a positive online reputation. Ideal for working with middle school students.</span>
                                    </li>
                                    <li class='li__ul2b' >
                                        "Distance Education: The Importance of Interactivity and Play":
                                        <span style={{ color: "#000", fontWeight: "initial", marginLeft: "5px", marginBottom: "5rem" }}>A guide to the new distance education models.</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h3 class='sub-tittle__h3'>Interviews with directors: (All locations) </h3>
                        <p class="colegiosDocentesEInstituciones__p2">The directors of the UC receive interested parties individually to resolve queries regarding study plans, job opportunities, job opportunities and other concerns they may have.</p>
                        <h3 class='sub-tittle__h3'>Middle School-University Articulation Program : (Los Angeles) </h3>
                        <p class="colegiosDocentesEInstituciones__p2">The UC Institutional Project presents a line of action firmly oriented to working jointly with middle-level institutions, a premise that is materialized on the Rosario Campus through the Middle School – University Articulation Program. Since the integration of the University Campus, hard work is being done on the development of this Program, which already integrates more than 60 secondary schools in Rosario and towns in other provinces.</p>
                        <h3 class='sub-tittle__h3'>The Proposal: </h3>
                        <p class="colegiosDocentesEInstituciones__p2">The UC's proposal is to generate spaces for meeting, working and reflecting together between high school and university teachers, to develop a concerted and shared articulation project, which ultimately makes “educational continuity” possible. This involves working to find the right “hinge” in several dimensions. The axes of work are complementarity, cooperation, collaboration and mutual enrichment between both levels of education.</p>
                        <h3 class='sub-tittle__h3'>Program Features: </h3>
                        <ul class='talleresDeOrientacion2'>
                            <li > Aimed at raising the expectations of middle school students to ensure their preparation and insertion into higher education, facilitating access, permanence and graduation in the higher education they choose.</li>
                            <li > Open to all interested institutions, private or public management, of any modality, denominational or non-denominational.</li>
                            <li>Coordination of work areas, in permanent dialogue with directors and teachers of the schools linked to the Program.</li>
                            <li>Preparation of ad hoc work programs, based on the particular interests of some establishments.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ColegiosDocentesEInstituciones