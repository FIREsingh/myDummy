import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "experience",
    initialState: {
        experience: [], 
        singleExperience: null
    },

    reducers: {
        setExperience: (state, action) => {
            state.experience = action.payload;
        },

        setSingleExperience: (state, action) => {
            state.singleExperience = action.payload;
        }
    }
});

export const { setExperience, setSingleExperience } = experienceSlice.actions;
export default experienceSlice.reducer;