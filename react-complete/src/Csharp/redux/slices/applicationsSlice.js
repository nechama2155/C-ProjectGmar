import { createSlice } from "@reduxjs/toolkit"
import { applicationThunk } from "./get/applicatiionThunk";
import { editApplicationThunk } from "./edit/editApplicationThunk";
import { getApplicationCodeThunk } from "./get/GetApplicationCodeThunk";
import { addApplicationThunk } from "./add/addApplicationThunk";
import { myApplicationsThunk } from "./get/myApplicationsThunk";

export const INITIALSTATE = {

    applications: [],
    applicationEdit: {},
    thisAssessor:[],
    sucsses: false,
    code:-1,

}

export const applicationSlice = createSlice({
    name: 'application',
    initialState: INITIALSTATE,
    reducers: {
        editApplication(state, action) {
            state.applicationEdit = action.payload;
        }
    },

    extraReducers: (builder) => {
        //get
        builder.addCase(applicationThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(applicationThunk.fulfilled, (state, action) => {
            state.applications = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        builder.addCase(applicationThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //get code 
        builder.addCase(getApplicationCodeThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getApplicationCodeThunk.fulfilled, (state, action) => {
            state.code = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        builder.addCase(getApplicationCodeThunk.rejected, (state, action) => {
            // state.token =-1;
            state.loading = false;
        })
        //edit

        builder.addCase(editApplicationThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(editApplicationThunk.fulfilled, (state, action) => {
            state.applications = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        builder.addCase(editApplicationThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })

        //add
        builder.addCase(addApplicationThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addApplicationThunk.fulfilled, (state, action) => {
           // state.applications = action.payload;
            var arr=[]
            arr=[...arr,action.payload]
            state.thisAssessor =arr;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(addApplicationThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //get applications by assessor
builder.addCase(myApplicationsThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(myApplicationsThunk.fulfilled, (state, action) => {

    state.applications = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(myApplicationsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
    }


});
export const { editApplication } = applicationSlice.actions;