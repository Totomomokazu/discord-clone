import {createSlice} from "@reduxjs/toolkit"
import { initialUserState } from "../Type";

const initialState: initialUserState = {
    user:null,
}

export const usersSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action) =>{
            state.user=action.payload;
        },
        logout:(state) =>{
            state.user=null;
        },
    },
});

// console.log(usersSlice);

export const {login,logout} = usersSlice.actions;
// exportしてlogin、logoutの関数を表示する
export default usersSlice.reducer;