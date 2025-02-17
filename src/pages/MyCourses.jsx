import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button, ToggleButton, DropdownMenu, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaSearch, FaBell, FaCommentAlt } from 'react-icons/fa';
import logo from "../assets/9(sin fondo y otro color letras).png";
import "../Styles/myCourses.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import { Info } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../Redux/actions/authAction';







export default function MyCourses() {


    const location = useLocation(); // Usamos useLocation para obtener la ruta actual
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [activeCards, setActiveCards] = useState({})


    const toggleCard = (cardId) => {
        setActiveCards((prevState) => ({
            ...prevState,
            [cardId]: !prevState[cardId] // Alterna el estado de la tarjeta específica
        }));
    };

    const { isLoggedIn, name, token, email, status, courses } = useSelector((state) => state.authenticateUser)


    console.log(courses);

    // if (!isLoggedIn) {
    //     return navigate("/login");
    // }

    useEffect(() => {
        // if (!isLoggedIn) {
        //     navigate('/login'); // O redirigir a '/' si prefieres
        // }

        if (isLoggedIn && status) {

            const resultado = dispatch(currentUser(token))
            console.log(resultado);

        }
    }, [isLoggedIn, navigate, status, dispatch, token]);

    // if (!isLoggedIn) {
    //     return null; // Retornamos null mientras redirige
    // }

    // useEffect(()=>{
    //     console.log("se ejecuto el useEffect");
    //     ToggleButton()
    // },[])

    // let toggle = true;
    // console.log(toggle);

    // const openOptions = () => {

    //     const div = document.querySelector(".miniCard-2")

    //     if (toggle) {
    //         div.style.display = "none"
    //         console.log(toggle);
    //     }else{
    //         div.style.display = "flex"
    //         console.log(toggle);
    //         console.log(div);
    //     }
    //     console.log(div);
    //     toggle = !toggle;
    //     console.log(toggle);
    //     console.log(div);
    // }
    return (
        <>
            <div style={{
                minHeight: "110vh",
                border: "5px solid #2e2",
                width: " 100vw",
                marginTop: "100px",
                backgroundColor: "#EEF5F9"
            }}>
                <HeaderLogin />

                <h1 class='h1_login__2header2'>¡ Hello,{name} !👋</h1>
                <div class='div__1--header2'>
                    <h2 class='h2__header2'>
                        Course Overview
                    </h2>
                    <div class='div--header-3Botones'>
                        <DropdownButton id="dropdown-basic-button" title="All">
                            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Past</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-5">Starred</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-6">Removed from view</Dropdown.Item>
                        </DropdownButton>
                        <input class='input-Buscar2--headerMyCourses' type="text" placeholder='Search' />
                        <DropdownButton id="dropdow--header2B" title="Sort By">
                            <Dropdown.Item href="#/action-1">Sort by name course</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sort by last access</Dropdown.Item>
                        </DropdownButton>
                        <select name="" id="select-header">
                            <option value="">Sort To</option>
                            <option value="">Sort by name course</option>
                            <option value="">Sort by last access</option>
                        </select>
                        <DropdownButton id="dropdow--header2C" title="View">
                            <Dropdown.Item href="#/action-1">Card</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">List</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Resume</Dropdown.Item>
                        </DropdownButton>
                    </div>


                    <div class="card__header-container">
                        {courses.map((item) => (
                            <>
                                <div key={item.id} class="card-header2c">
                                    <div class="text_header2c">
                                        <p class="subtitle-header2cc">{item.moreInfoAboutCourse.map((item) => item.yearCourse)}</p>
                                    </div>

                                    <div class="icons-header2cc">

                                        <span class="span__headerLogin2"><span class="pepito">NameSubject:</span> {item.moreInfoAboutCourse.map((item) => item.nameSubject)}</span>
                                        <p class="span__headerLogin2"> <span class="pepito">Schedule: </span> {item.enrollments.map((item) => item.courseSchedule.dayOfWeek)}</p>
                                        <p class="span__headerLogin2"><span class="pepito">Time :</span>{item.enrollments.map((item) => item.courseSchedule.time)} HS</p>
                                        <p class="span__headerLogin2"><span class="pepito">Shift: </span>{item.enrollments.map((item) => item.courseSchedule.shift)} </p>
                                        {/* <div className="teachers-container">
                                            <span className="pepito">Teachers:</span>
                                            <ul className="teachers-list">
                                                {courses.teacherCourses.map((teacherData) => (
                                                    <li key={teacherData.id} className="teacher-item">
                                                        <strong>{teacherData.roleTeacher}:</strong> {teacherData.teacher.firstName} {teacherData.teacher.lastName} - {teacherData.teacher.email}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div> */}
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
