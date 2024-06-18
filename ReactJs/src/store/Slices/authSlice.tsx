import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    role: 'user' | 'admin' | null;
    email: string | null;
}

const initialState: AuthState = {
    role: null,
    email: null,
};

interface LoginPayload {
    role: 'user' | 'admin';
    email: string;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.role = action.payload.role;
            state.email = action.payload.email;        
        },
        logout(state) {
            state.role = null;
            state.email = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
