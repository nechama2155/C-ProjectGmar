import {createSlice} from "@reduxjs/toolkit"
import { apartmentDetailsThunk } from "./get/apartmentDetailsThunk";
import { addApartmentDetailsThunk } from "./add/addApartmentDetailsThunk";



export const INITIALSTATE = {

    apartmentsDetails:[],  
    sucsses: false,
}

export const apartmentDetailsSlice = createSlice({
name: 'apartmentDetails',
initialState: INITIALSTATE,
reducers: {
    
},

extraReducers: (builder) => {
//get
    builder.addCase(apartmentDetailsThunk.pending, (state,action) => {
        state.loading = true;
    });
    builder.addCase(apartmentDetailsThunk.fulfilled, (state, action) => {
        state.apartmentsDetails = action.payload;
        state.sucsses = true;
        state.loading = false;
    });
    builder.addCase(apartmentDetailsThunk.rejected, (state, action) => {
        state.token =-1;
        state.loading = false;
    })
//add
builder.addCase(addApartmentDetailsThunk.pending, (state, action) => {
    state.loading = true;
});
builder.addCase(addApartmentDetailsThunk.fulfilled, (state, action) => {
    state.apartmentsDetails = action.payload;
    state.sucsses = true;
    state.loading = false;
});
builder.addCase(addApartmentDetailsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
}

});
export const {} = apartmentDetailsSlice.actions;