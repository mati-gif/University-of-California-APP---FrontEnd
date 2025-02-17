import React, { useEffect, useState } from 'react'
import "../Styles/login.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/9(sin fondo).png";
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser, currentUser } from '../Redux/actions/authAction';
function Login() {

    const dispacth = useDispatch()
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({});
    const { status, isLoggedIn, error, token, name } = useSelector((state) => state.authenticateUser)
    const [errorResponse,setErrorResponse] = useState("")

    console.log(token);

    useEffect(() => {

    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

        if (name === 'email') setEmail(value.replace(/\s+/g, ''));    // Eliminar espacios en blanco en email
        if (name === 'password') setPassword(value.replace(/\s+/g, '')); // Eliminar espacios en blanco en password
    }

    const handleSubmit = async (e) => {
        console.log("la funcion funciona");
        e.preventDefault();
        try {
            const resultado = await dispacth(authenticateUser({ email, password })).unwrap();
            console.log(resultado);

            const cargarUsuario = await dispacth(currentUser(resultado.token)).unwrap()
            console.log(cargarUsuario);

            navigate("/myCourses")
            
        }
        catch (error) {
            console.log("entro en el catch del back en el currentUser", error);

            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error al confirmar turno',
            //     text: error,
            // });

            setErrorResponse(error)
            const newErrors = {};

            console.log("error en la variable newError", newErrors);
        }


    }
    return (
        <>
            <div class='login'>
                <section class="section__Login relative flex flex-wrap lg:h-screen lg:items-center">
                    <div class="section-div--logIN1 w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                        <Link to="/">
                            <div class='closeButton-login'>
                                <CloseButton style={{ border: "2px solid #dd4", position: "relative", left: "0px" }} />
                            </div>
                        </Link>

                        <div class="div--2__logIN ">
                            {/* <h1 class="h1__div__login  ">UC University</h1>
                        <p class="p__div__login ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                            ipsa culpa autem, at itaque nostrum!
                        </p> */}
                            <div style={{
                                border: "2px solid #1a1",
                                height: "150px",
                                width: "150px",

                            }}>
                                <img style={{
                                    width: "100%",
                                    height: "100%",
                                }} src={logo} alt={logo} />
                            </div>

                        </div>

                        <form action="#" class="form__form-login ">
                            <div>
                                <label for="email" class="sr-only--login">Email</label>

                                <div style={{ position: "relative" }} class="relative">
                                    <input
                                        type="email"
                                        class="input__email-login "
                                        placeholder="Enter email"
                                        value={email}
                                        id='Email'
                                        name='email'
                                        required
                                        onChange={handlechange}

                                    />

                                    <span class="span__login--span ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="svg__login size-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label for="password" class="sr-only--login">Password</label>

                                <div style={{ position: "relative" }} class="relative">
                                    <input
                                        type="password"
                                        class="input--div_log-in "
                                        placeholder="Enter password"
                                        required
                                        id="Password"
                                        name="password"
                                        value={password}
                                        onChange={handlechange}
                                    />

                                    <span class="log-in__span absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="svg__login "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div class="divlog__in-2 ">
                                <p class="parrafo2__log_in">
                                    No account?
                                    <Link style={{ textDecorationLine: "underline", marginLeft: "10px" }} to="/register">Register</Link>
                                </p>

                                <button
                                    type="button"
                                    class="button--login-1 "
                                    onClick={handleSubmit}
                                    name='login'
                                    id='login'
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="div-log__in-img ">
                        <img
                            alt=""
                            src="https://www.ucsb.edu/sites/default/files/images/pages/Home/hero-afternoon.jpg"
                            class="img__login "
                        />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login