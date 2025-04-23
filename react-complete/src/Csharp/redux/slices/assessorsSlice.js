import { createSlice } from "@reduxjs/toolkit"
import { assessorThunk } from "./get/assessorThunk";
import { editAssessorThunk } from "./edit/editAssessorThunk";
import { deleteAssessorThunk } from "./delete/deleteAssessorThunk";
import { addAssessorThunk } from "./add/addAssessorThunk";
import { myCustomersThunk } from "./get/myCustomersThunk";
import { assessorByIdThunk } from "./get/assessorByIdThunk";
import { myApplicationsThunk } from "./get/myApplicationsThunk";


export const INITIALSTATE = {

    sucsses: false,
    assessors: [],
    thisAssessor: {},
    assessorEdit:{},
    token:-1,
}

export const assessorSlice = createSlice({
    name: 'assessor',
    initialState: INITIALSTATE,
    reducers: {
        editAssessor(state,action){
            state.assessorEdit = action.payload;
        }
    },

    extraReducers: (builder) => {

        builder.addCase(assessorThunk.pending, (state, action) => {
            state.loading = true;
        });
        // הוספת מקרה שהטנק הסתיים בהצלחה
        builder.addCase(assessorThunk.fulfilled, (state, action) => {

            state.assessors = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(assessorThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //getById
        builder.addCase(assessorByIdThunk.pending, (state, action) => {
            state.loading = true;
        });
        // הוספת מקרה שהטנק הסתיים בהצלחה
        builder.addCase(assessorByIdThunk.fulfilled, (state, action) => {

            state.thisAssessor = action.payload;
            state.token = 1;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(assessorByIdThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })

        //edit

        builder.addCase(editAssessorThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(editAssessorThunk.fulfilled, (state, action) => {
         debugger
            state.assessors = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(editAssessorThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //delete
        builder.addCase(deleteAssessorThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteAssessorThunk.fulfilled, (state, action) => {

            // state.assessors.token = action.payload;
            state.assessors = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(deleteAssessorThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //add
        builder.addCase(addAssessorThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addAssessorThunk.fulfilled, (state, action) => {

           console.log(state.assessors);
            state.assessors = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(addAssessorThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
    }

});
export const {editAssessor}  = assessorSlice.actions;

