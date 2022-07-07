import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    user: null,
    token: '',
    signInError: '',
    signUpError: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUser(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = '';
        },
        setUser(state, action) {
            state.user = action.payload;
            state.error = '';
        },
        setSignInError(state, action) {
            state.signInError = action.payload;
        },
        setSignUpError(state, action) {
            state.signUpError = action.payload;
        },
        signOut(state) {
            state.user = null;
            state.token = '';
            state.signInError = '';
            state.signUpError = '';
        }
    }
})

export const {signInUser, setUser, setSignInError, setSignUpError, signOut} = userSlice.actions;
export default userSlice.reducer;