import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./operations";

const initialState = {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
}

const handleLogInAndRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // [register.pending] (state) {},
        [register.fulfilled]: handleLogInAndRegister,
        // [register.rejected] (state, action) {},
        [logIn.fulfilled]: handleLogInAndRegister,
        [logOut.fulfilled] (state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        }
    },
});


export const authReducer = authSlice.reducer;