import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {displayName: '', photoUrl: ''}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: initialProfileState,
    reducers: {
        updateProfile(state, action) {
            state.displayName = action.payload.displayName
            state.photoUrl = action.payload.photoUrl
        }
    }
})

export const profileActions = ProfileSlice.actions

export default ProfileSlice.reducer