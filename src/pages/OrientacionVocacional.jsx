import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "../Styles/orientacionVocacional.css"

function OrientacionVocacional() {
    return (
        <>
            <div class='orientacionVocacional-mainContainer'>
                <section
                    class="banner-orientacionVocacional "
                >
                    <div
                        class="simple-div__orientacionVocacional "
                    ></div>

                    <div
                        class="simple-div2--orientacionVocacional "
                    >
                        <div class="divDentroBanner-orientacionVocacional ">
                            <h1 class="h1DentroBanner__orientacionVocacional ">
                                Vocational Guidance
                            </h1>
                        </div>
                    </div>
                </section>
                <Breadcrumb style={{ fontSize: "20px", marginLeft: "140px", marginTop: "20px" }}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active> Vocational Guidance</Breadcrumb.Item>
                </Breadcrumb>
                <div class="contenedor-cuadrosColores max-w-6xl mx-auto p-6">

                    <div style={{ marginBottom: "2rem" }} class="mb-8">
                        <div style={{ marginBottom: "2rem", borderBottom: "2px solid #aaa" }}>
                            <p class="orientacionVocacional__p">
                                The purpose of the Vocational Guidance and Reorientation Service is to guide young people in deciding their professional vocation.
                            </p>
                            <p class="orientacionVocacional__p">
                                It is intended for students in their final year of high school or who have begun a higher-level career and have doubts about their vocational choice.
                            </p>
                        </div>
                        <h3 class='sub-tittle__h3C'> Active Vocational Process </h3>
                        <p class="orientacionVocacional__p2">
                            The vocational guidance process lasts 2 months and requires weekly attendance. Intensive processes are also offered in the month of July and December for students from the interior.
                        </p>
                        <ul class='talleresDeOrientacionVocacional'>
                            <li>
                                <p>
                                    It is a <span style={{ color: "#003876", fontWeight: "bold" }}>Process</span> because it is much more than a test, with this idea we want to explain that the vocational choice takes time and has various stages, which ensure, for the oriented young person, a more comprehensive journey in their decision-making.
                                </p>
                            </li>
                            <li>
                                <p>
                                    It is a <span style={{ color: "#003876", fontWeight: "bold" }}>Vocational</span> because we accompany you in the decision, which is not only about knowing a series of possible careers to choose, but rather invites a deep search, analyzing each aspect related to the choice and seeking a decision that allows you to integrate what you are with what one wants to do.
                                </p>
                            </li>
                            <li>
                                <p>
                                    It is a <span style={{ color: "#003876", fontWeight: "bold" }}>Active</span> because the oriented young person is the protagonist of his choice. It is he who actively participates in his decision process, where professional intervention fulfills the function of guiding and providing the necessary tools for better reflection, knowledge and autonomy in the decision.
                                </p>
                            </li>
                        </ul>
                        <h3 class='sub-tittle__h3C'> Addressee </h3>
                        <ul class='talleresDeOrientacionVocacional'>
                            <li>
                                <p>
                                    <span style={{ color: "#003876", fontWeight: "bold" }}>Orientation:</span> For middle, tertiary and higher level students who need to decide their vocational future.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span style={{ color: "#003876", fontWeight: "bold" }}>Retargeting:</span> For university students who have doubts regarding careers already started and require a new vocational definition.
                                </p>
                            </li>
                        </ul>
                        <h3 class='sub-tittle__h3C'> Mode </h3>
                        <ul class='talleresDeOrientacionVocacional'>
                            <li>
                                <p>
                                    The work will consist of an individual part and a group part, which will generate the exchange of experiences and experiences between the participants and the clarification of individual choice behavior.
                                </p>
                            </li>
                            <li>
                                Process development:
                                <ul class='talleresDeOrientacion3'>
                                    <li class='talleresDeOrientacion3--Li'>
                                        Seven group meetings
                                    </li>
                                    <li class='talleresDeOrientacion3--Li'>
                                        An individual interview for the return of the process.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h3 class='sub-tittle__h3C'> Responsible </h3>
                        <ul class='talleresDeOrientacionVocacional'>
                            <li>
                                <p>
                                    The service will be provided by psychologists and psychopedagogues, professionals from our University, who will use different techniques according to each process, considering each consultant as the protagonist of their choice.
                                </p>
                            </li>
                        </ul>
                        <h3 class='sub-tittle__h3C'> Process Duration </h3>
                        <ul class='talleresDeOrientacionVocacional'>
                            <li>
                                <p>
                                    There are 8 meetings in total. The group meetings last 2 hours and are held once a week. The schedule for the individual return interviews will be established with each participant individually.
                                </p>
                            </li>
                        </ul>
                        <h3 class='sub-tittle__h3C'> Maximum capacity per group </h3>
                        <ul class='talleresDeOrientacionVocacional'>
                            <li>
                                <p>
                                    10 participants.
                                </p>
                            </li>
                        </ul>
                        <h3 class='sub-tittle__h3C'> Intensive Process </h3>
                        <ul class='talleresDeOrientacionVocacional'>
                            <li>
                                <p>
                                    We offer an intensive service lasting one or two weeks, especially for people who live in the interior of the country, or who need to speed up their election process. It will take place during the winter vacation periods and during the month of December.
                                </p>
                            </li>
                        </ul>
                        <p>
                        The UC offers this service virtually and in person.
                        </p>
                        <h3 class='sub-tittle__h3C'> Next Vocational Orientation and Re-Orientation Process </h3>
                        <ul class='talleresDeOrientacionVocacional'>
                            <li>
                                <p>
                                    <span style={{ color: "#C0392B", fontWeight: "bold" }}>Virtual Mode</span> 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span style={{ color: "#000", fontWeight: "bold" }}>Start date:</span> Wednesday, January 27 of 2025
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span style={{ color: "#000", fontWeight: "bold" }}>End date:</span> Monday, March 27 of 2025
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span style={{ color: "#000", fontWeight: "bold" }}>Schedule:</span> 18hs a 19:30hs
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span style={{ color: "#000", fontWeight: "bold" }}>Cost:</span> 150 USD.- (Extra UC students) 60 USD- (UC students and Santo Tomás School students - UC)
                                </p>
                            </li>
                        </ul>
                        <div style={{ marginBottom: "2rem", borderBottom: "2px solid #aaa" }}>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrientacionVocacional