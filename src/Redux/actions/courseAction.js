import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // Importa SweetAlert2


export const fetchStudentCourse = createAsyncThunk("fetchStudentCourse", async (_,{rejectWithValue}) =>{

    try{

        const token = localStorage.getItem("token")
        if(!token){
            console.log("Token no encontrado",token);
            
        }

        const response = await axios.get("http://localhost:8080/api/course/coursesAvailableStudent",{

            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response);

        console.log(response.data);
        
        return response.data;

    }
    catch(error){
        return rejectWithValue(error.response ? error.response.data : error.message);

    }
})