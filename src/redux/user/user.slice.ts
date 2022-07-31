import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IUser {
    id: number;
    email: string;
}

interface IUserState {
    user: IUser | null;
    token: string;
    error: string;
}

export const initialState: IUserState = {
    user: null,
    token: '',
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUser(state: IUserState, action: PayloadAction<{user: IUser, token: string}>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setUser(state: IUserState, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        setAuthError(state: IUserState, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        signOut(state: IUserState) {
            state.user = null;
            state.token = '';
            state.error = '';
        }
    }
})

export const {signInUser, setUser, setAuthError, signOut} = userSlice.actions;
export default userSlice.reducer;