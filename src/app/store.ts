// これがReduxのstore情報が格納されているファイル

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import channelReducer from "../features/channelSlice";



export const store =configureStore({
    reducer:{
        user:userReducer, //userのreducerとして定義する
        channel: channelReducer, //channelのreducerとして定義する
    },        
})

export type AppDispatch = typeof store.dispatch; //dispatchをusesleectorで使うためにここでexport
export type RootState = ReturnType<typeof store.getState>;//ここもusesleectorで使うためにexport
