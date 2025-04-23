import { createSlice } from "@reduxjs/toolkit"

export const INITIALSTATE = {
    sucsses: false,
    chats:[],

}

export const chatSlice = createSlice({
name: 'chat',
initialState: INITIALSTATE,
reducers: {
   
},
extraReducers: (builder) => {

}

});
export const {} = chatSlice.actions;