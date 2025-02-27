import { createReducer } from "@reduxjs/toolkit";
import { fetchStudentCourse } from "../actions/courseAction";


const initialState = {

    status: 'idle', // Estado inicial de la solicitud
    loading: false,
    error: null,
    studentCourse:[]
}

const courseReducer = createReducer(initialState,(builder) =>{


    builder 

    .addCase(fetchStudentCourse.pending,(state)=>{

        return{
            ...state,
            status: "pending",
            loading: true,
            error: null,
        }
    })

    .addCase(fetchStudentCourse.fulfilled,(state,action)=>{

        console.log("aca se deberia cargar el payload que solo trae a los cursos del estudiante",action.payload);

        return{
            ...state,
            isLoggedIn: true,
            status: "succeeded",
            loading: false,
            studentCourse: action.payload
            
        }
        
    })
})


export default courseReducer;