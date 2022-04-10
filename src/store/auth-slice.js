import { createSlice } from '@reduxjs/toolkit';

const initialAuthSlice = {
    isLoggedIn: false,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthSlice,
    reducers: {
        logIn(state, action) {
            const { email, password } = action.payload;

            if (email && password) {
                state.isLoggedIn = true;
                state.token = Math.floor(Math.random() * 1000);
            }
        },
        logOut(state, action) {

        },

    }
})