import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';


export const authenticateUser = createAsyncThunk('authenticateUser',async (user,{rejectWithValue}) =>{

    try{

        console.log(user);
        const response = await axios.post("http://localhost:8080/api/auth/login", user)
        console.log("Respuesta de login:", response);

        const token = response.data;
        console.log("Token recibido:", token);

        localStorage.setItem('token', token);
        console.log("Token almacenado en localStorage:", localStorage.getItem('token'));  // Verifica que el token se almacena correctamente

        // Mostrar alerta de éxito directamente en la acción
        Swal.fire({
            title: 'Login Successful!',
            text: 'You have been logged in successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        });

        // navigate("/")
        return token;
        
    } catch (error){
        console.log("entro por el catch y este es el error del back", error);

        const errorBack = error.response.data
        console.log("este es el string del error del back", errorBack);

        return rejectWithValue(errorBack);
    }
})

export const currentUser = createAsyncThunk("currentUser" , async(_,{rejectWithValue})=>{

    try{

        const token = localStorage.getItem('token');

        if(token){

            const response = await axios.get("http://localhost:8080/api/auth/current",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            console.log("Respuesta de currentUser:",response);

            const responseData = response.data
            console.log("Datos del usuario:",responseData);

            let usuario = {

                email: responseData.email,
                name: responseData.firstName + " " + responseData.lastName,
                token: token,  // Aquí el token viene del argumento `token`
                isLoggedIn: true,
                courses:responseData.courses

            };
            console.log("Usuario cargado:", usuario);

            // Retornamos el objeto usuario para almacenarlo en el estado global
            return usuario;
            
            
        }

    } catch(error){

    }
})