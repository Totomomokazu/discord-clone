import {createSlice} from "@reduxjs/toolkit";
import { InitialChannelState } from "../Type";


const initialState: InitialChannelState = { //型定義
    channelId : null,
    channelName : null,
}

export const channelSlice=createSlice({
    name:"channel",
    initialState,
    reducers:{
        setChannelInfo:(state,action) => {
            state.channelId = action.payload.channelId; //初期状態からチャンネルidを更新する
            state.channelName = action.payload.channelName; //初期状態からチャンネル名を更新する
        },
    },
});


export const {setChannelInfo} = channelSlice.actions; //出力する
export default channelSlice.reducer;