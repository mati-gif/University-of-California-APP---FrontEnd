import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import { authenticateUser } from "./actions/authAction";
import courseReducer from "./reducers/courseReducer";

const store = configureStore({

    reducer:{
        authenticateUser: authReducer,
        courseReducer:courseReducer,

    }
})

export default store;