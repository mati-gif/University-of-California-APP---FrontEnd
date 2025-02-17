import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import { authenticateUser } from "./actions/authAction";

const store = configureStore({

    reducer:{
        authenticateUser: authReducer,
    }
})

export default store;