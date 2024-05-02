import {createSlice} from "@reduxjs/toolkit";
import { initialChannelState } from "../Type";


const initialState: initialChannelState = {
    channelId : null,
    channelName : null,
}

export const channelSlice=createSlice({
    name:"channel",
    initialState,
    reducers:{
        setChannelInfo:(state,action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        },
    },
});


export const {} = channelSlice.actions;
export default channelSlice.reducer;