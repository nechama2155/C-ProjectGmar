import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";
import { customerSlice } from "./slices/customerSlice";
import { assessorSlice } from "./slices/assessorsSlice";
import { userSlice } from "./slices/userSlice";
import { assessmentSlice } from "./slices/assessmentSlice";
import { applicationSlice } from "./slices/applicationsSlice";
import { apartmentDetailsSlice } from "./slices/apartmentDetailsSlice";
const reducers = combineSlices(userSlice,customerSlice,assessorSlice,assessmentSlice,applicationSlice,apartmentDetailsSlice);

export const STORE = configureStore({
    reducer: reducers
    
})