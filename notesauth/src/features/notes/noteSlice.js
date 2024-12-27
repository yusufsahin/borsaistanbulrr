import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../app/lib/axiosInstance";

const initialState = {
  notes: [], // Stores all notes
  loading: false, // Indicates whether data is being fetched
  error: null, // Stores errors
};

// Async Thunks

// Fetch all notes
export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/notes");
      return response.data; // Assume API returns an array of notes
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch notes");
    }
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all notes
    builder.addCase(fetchNotes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.loading = false;
      state.notes = action.payload;
    });
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export the reducer
export default noteSlice.reducer;
