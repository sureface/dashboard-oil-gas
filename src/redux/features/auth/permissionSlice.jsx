import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: {
        data: []
    }
}

export const permissionSlice = createSlice({
    name: 'permission',
    initialState,
    reducers: {
        allUsersReducer: (state, action) => {
            state.allUsers = action.payload
        }
    }
})

export const {allUsersReducer} = permissionSlice.actions;
export default  permissionSlice.reducer;