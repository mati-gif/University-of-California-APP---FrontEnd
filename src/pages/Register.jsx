import React from 'react'
import "../Styles/register.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router-dom';
import logo from "../assets/9b.png";

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

                {/* Netflix Logo */}
                <div class="register__logo absolute top-4 left-4 z-10">
                    {/* <span class="span__div-register__log ">NETFLIX</span> */}
                    <img  class="span__div-register__log " src={logo} alt={logo} />
                </div>

                {/* Login Form */}
                <div class="div__register-form ">
                    <h1 class="h1-div__register ">Welcome to UC University </h1>

                    <form class="register__form ">
                        <div>
                            <input
                                type="text"
                                placeholder="Email"
                                class="input__email--register "
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                class="input__contraseña--register "
                            />
                        </div>

                        <button
                            type="submit"
                            class="boton__register w-full bg-[#E50914] text-white py-3 rounded font-semibold hover:bg-[#f6121d] transition-colors"
                        >
                            Register
                        </button>

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