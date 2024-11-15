import React from 'react'
import "../Styles/theUniversity.css"
import { Book, BookOpenText, ClipboardList, FileText, GraduationCap } from 'lucide-react';

function TheUniversity() {
    return (
        <>
            <div id='div-principal'>
                {/* <div class="segundo-div mx-auto max-w-screen-xl px-4 py-8  sm:px-6 sm:py-12 lg:px-8 ">
                    <div class="mx-auto max-w-3xl text-center">
                        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

                        <p class="mt-4 text-gray-500 sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
                            provident impedit esse recusandae facere libero harum sequi.
                        </p>
                    </div>

                    <dl class="dl-container mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div class="dl-div1  rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <BookOpenText style={{border:"2px solid #000", width:"50px" , height:"50px" }} />
                            <dt class="order-last text-lg font-medium text-gray-500">95</dt>
                        </div>

                        <div class="dl-container rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <dt class="order-last text-lg font-medium text-gray-500">Official Addons</dt>

                            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                        </div>

                        <div class="dl-container rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <dt class="order-last text-lg font-medium text-gray-500">Total Addons</dt>

                            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                        </div>

                        <div class="dl-container rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <dt class="order-last text-lg font-medium text-gray-500">Downloads</dt>

                            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
                        </div>
                    </dl>
                </div> */}


                <div style={{maxWidth:"1280px", marginLeft: "auto", marginRight:"auto",paddingLeft:"1rem",paddingRight:"1rem", paddingTop:"2rem",paddingBottom:"2rem"}} >
                    <h2 class="unicH2">The UC in numbers</h2>

                    <div class="second-div">
                        {/* Carreras */}
                        <div class="div-carreras">
                            <Book class="book" />
                            <div class="div_secundario-carreras">
                                <span class="span-carreras">95</span>
                                <p class="p-carreras">
                                undergraduate courses and more than 650 postgraduate and extension courses
                                </p>
                            </div>
                        </div>

                        {/* Alumnos */}
                        <div class="div-alumnos  space-x-4 ">
                            <ClipboardList class="planilla" />
                            <div class="div_secundario-alumnos ">
                                <span class="span-alumnos ">18296</span>
                                <p class="p-alumnos  text-xs md:text-sm text-gray-700 max-w-[150px]">
                                undergraduate and graduate students
                                </p>
                            </div>
                        </div>

                        {/* Docentes */}
                        <div class="div-docentes ">
                            <FileText class="archivos" />
                            <div class="div_secundario-archivos ">
                                <span class="span-docentes ">4396</span>
                                <p class="p-docentes">
                                teachers
                                </p>
                            </div>
                        </div>

                        {/* Graduados */}
                        <div class="div-graduados ">
                            <GraduationCap class="gorro " />
                            <div class="div_secundario-graduados ">
                                <span class="span-graduados ">93899</span>
                                <p class="p-graduados ">
                                graduates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheUniversity