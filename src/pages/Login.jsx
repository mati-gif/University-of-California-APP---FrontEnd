import React from 'react'
import "../Styles/login.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div class='login'>
            <section class="section__Login relative flex flex-wrap lg:h-screen lg:items-center">
                <div class="section-div--logIN1 w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <Link to="/">
                <div class='closeButton-login'>
                <CloseButton style={{border:"2px solid #dd4",position:"relative",left:"0px"}} />
                </div>
                </Link>
                    <div class="div--2__logIN ">
                        <h1 class="h1__div__login  ">Get started today!</h1>
                        <p class="p__div__login ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                            ipsa culpa autem, at itaque nostrum!
                        </p>
                    </div>

                    <form action="#" class="form__form-login ">
                        <div>
                            <label for="email" class="sr-only--login">Email</label>

                            <div style={{position:"relative"}} class="relative">
                                <input
                                    type="email"
                                    class="input__email-login "
                                    placeholder="Enter email"
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

                            <div style={{position:"relative"}} class="relative">
                                <input
                                    type="password"
                                    class="input--div_log-in "
                                    placeholder="Enter password"
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
                                <a style={{textDecorationLine:"underline"}} href="#">Sign up</a>
                            </p>

                            <button
                                type="submit"
                                class="button--login-1 "
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
    )
}

export default Login