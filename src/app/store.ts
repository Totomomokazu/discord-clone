import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";



export const store =configureStore({
    reducer:userReducer,
})


// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'

// const store = configureStore({
//   reducer: rootReducer,
// })

// export default store