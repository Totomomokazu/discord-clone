import {createSlice} from "@reduxjs/toolkit"
import { initialUserState } from "../Type";

const initialState: initialUserState = {
    user:null,
}
// 上記の記述はType.tsで定義された「initialUserState」で定義されているものを呼び出している


export const usersSlice=createSlice({
    name:"user",
    initialState, //↑のinitialStateを呼び出している
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