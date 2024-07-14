import { createSlice, PayloadAction,createAsyncThunk  } from '@reduxjs/toolkit';

interface UserProfile {
    id:number;
    name: string;
    email: string;
    designition: string;
    address: string;
    contact: string;
    grade: string;
}

export interface ProfileState {
    memberlist: UserProfile[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProfileState = {
    memberlist: null,
    loading: false,
    error: null,
};

// Define the async thunk
export const fetchUserProfile = createAsyncThunk<UserProfile[]>('profile/fetchUserProfile', async () => {
    const response = await fetch('http://localhost:5000/api/items');
    const data = await response.json();
    return data;
  });

const MemeberlistSlice = createSlice({
    name: 'memberlist',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<UserProfile[]>) => {
                state.loading = false;
                state.memberlist = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch profile';
            });
    }
});

export default MemeberlistSlice.reducer;
