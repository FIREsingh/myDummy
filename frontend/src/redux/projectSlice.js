import { createSlice } from '@reduxjs/toolkit'


const projectSlice = createSlice({
    name: "project",
    initialState: {
        project: [], 
        singleProject: null
    },

    reducers: {
        setProject: (state, action) => {
            state.project = action.payload;
        },

        setSingleProject: (state, action) => {
            state.singleProject = action.payload;
        }
    }
})

export const { setProject, setSingleProject } = projectSlice.actions;
export default projectSlice.reducer;