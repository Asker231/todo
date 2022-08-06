import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer:{
       myItem:todoSlice,
    }
})


export default store;