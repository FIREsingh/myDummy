import { createSlice } from '@reduxjs/toolkit'

const educationSlice = createSlice({
    name: "education",
    initialState: {
        singleEducation: null,
        education: [],
    },

    reducers: {
        setSingleEducation: (state, action) => {
            state.singleEducation = action.payload;
        },
        
        setEducation: (state, action) => {
            state.education = action.payload;
        }
    } 
});


export const { setEducation, setSingleEducation } = educationSlice.actions;

export default educationSlice.reducer;