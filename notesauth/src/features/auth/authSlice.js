import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/lib/axiosInstance';// Axios instance with token interceptors

// Initial State
const initialState = {
  token: localStorage.getItem('token') || null, // Fetch token from localStorage
  isAuthenticated: !!localStorage.getItem('token'), // Derived boolean state
  loading: false, // Tracks API request status
  error: null, // Tracks authentication errors
};

// Async Thunk for Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/login', credentials);
      return response.data; // Should return { user, token }
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token'); // Clear token
    },
  },
  extraReducers: (builder) => {
    // Handle login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token; // Save token
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token); // Persist token
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    
  },
});

// Export Actions and Reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
