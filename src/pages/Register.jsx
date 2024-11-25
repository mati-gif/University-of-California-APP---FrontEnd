import React from 'react'
import "../Styles/register.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router-dom';
import logo from "../assets/2(sin fondo y letra blanca).png";

function Register() {
    return (
        <>
            <div class="div-register-container__principal ">
                {/* Background Image Grid */}
                <div
                    class="div-container__img-register "
                // style={{
                //     backgroundBlendMode: 'multiply',
                // }}
                >
                    <div class="div-register2 "></div>
                </div>


                {/* Login Form */}
                <div class="div__register-form ">
                    {/* <h1 class="h1-div__register ">Welcome to UC University </h1> */}

                    <div class='closeButton-register'>
                        <Link to="/">
                            <CloseButton style={{ border: "2px solid #dd4", position: "relative", left: "0px", backgroundColor: "#fff" }} />
                        </Link>
                    </div>
                    {/* Netflix Logo */}
                    <div class="register__logo absolute top-4 left-4 z-10">
                        {/* <span class="span__div-register__log ">NETFLIX</span> */}
                        <img class="span__div-register__log " src={logo} alt={logo} />
                    </div>
                    <form class="register__form ">
                        <div style={{
                            display: "flex",
                            gap: "20px",
                            border: "2px solid #f22",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="FirstName"
                                    class="input__contraseña--register "
                                />

                                <input
                                    type="text"
                                    placeholder="Email"
                                    class="input__email--register "
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="LastName"
                                    class="input__contraseña--register "
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="input__contraseña--register "
                                />

                            </div>
                        </div>
                        <div style={{
                            border: "3px solid #78a",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <button
                                type="submit"
                                class="boton__register "
                            >
                                Register
                            </button>
                        </div>


                        <div class="div-items-debajoForm">
                            <label class="label-ultimos__items ">
                                Do you have an account?
                            </label>
                            <Link to="/login" class="link__register ">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Register