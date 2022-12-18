import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

const initialState = {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending] (state) {},
        [register.fulfilled] (state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected] (state, action) {},
    },
});


export const authReducer = authSlice.reducer;