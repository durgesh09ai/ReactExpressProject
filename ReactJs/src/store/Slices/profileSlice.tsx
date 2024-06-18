import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
    fname: string;
    lname: string;
    email: string;
    department: string;
}

interface ProfileState {
    profile: UserProfile | null;
}

const initialState: ProfileState = {
    profile: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<UserProfile>) {
            state.profile = action.payload;
        },
        clearProfile(state) {
            state.profile = null;
        }
    }
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
