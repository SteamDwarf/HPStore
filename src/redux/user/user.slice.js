import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    signInError: '',
    signUpError: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            state.error = ''
        },
        setSignInError(state, action) {
            state.signInError = action.payload
        },
        setSignUpError(state, action) {
            state.signUpError = action.payload
        }
    }
})

export const {setUser, setSignInError, setSignUpError} = userSlice.actions;
export default userSlice.reducer;