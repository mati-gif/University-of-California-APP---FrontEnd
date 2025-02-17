import { createReducer } from "@reduxjs/toolkit"
import { authenticateUser, currentUser, logoutUser } from "../actions/authAction"

const initialState = {

    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') || null,
    email: null,
    name: [],
    status: 'idle', // Estado inicial de la solicitud
    loading: false,
    error: null,
    courses: []

}


const authReducer = createReducer(initialState, (builder) => {

    builder

        .addCase(authenticateUser.pending, (state) => {
            return {
                ...state,
                loading: true,
                error: null,
            }
        })

        .addCase(authenticateUser.fulfilled, (state, action) => {
            console.log("Autenticación exitosa, token:", action.payload);
            console.log(state);
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload,
                status: "succeeded",
                loading: false,
            }
        })

        .addCase(authenticateUser.rejected, (state, action) => {
            console.log(action.payload)

            return {
                ...state,
                status: "failed",
                loading: false,

                error: action.error?.message || 'Error during authentication'
            };

        })

        .addCase(currentUser.pending, (state) => {

            return {
                ...state,
                loading: true,
                error: null,
            }
        })

        .addCase(currentUser.fulfilled, (state, action) => {
            console.log("Usuario cargado:", action.payload);

            const newState = {
                ...state,
                isLoggedIn: true,
                status: "succeeded",          // La solicitud fue exitosa
                loading: false,
                token: action.payload.token,
                email: action.payload.email,
                name: action.payload.name,
                courses:action.payload.courses
            }



            console.log("Estado actualizado (fulfilled):", newState)

            return newState
        })

        .addCase(logoutUser.pending,(state)=>{
            return{
                ...state,
                status: "pending",
                loading: true,
                error: null,
            }
        })

        .addCase(logoutUser.fulfilled,(state,action)=>{

            return{
                ...state,
                isLoggedIn: false,
                token: null,
                email: null,
                name: null,
                courses: [],
                status: "succeeded",
                loading: false,
            }
        })

         // Estado cuando el cierre de sesión falla (rejected)
        .addCase(logoutUser.rejected, (state, action) => {
            return {
                ...state,
                status: "failed",
                loading: false,
                error: action.payload || 'Error logging out',
            };
        });


})


export default authReducer;