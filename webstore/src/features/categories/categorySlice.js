import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../app/lib/axiosInstance";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/categories");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (newCategory, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/categories", newCategory);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (updateCategory, thunkAPI) => {
    try {
      const response = await axiosInstance.put(
        `/categories/${updateCategory.id}`,
        updateCategory
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
export const deleteCategory = createAsyncThunk(
    "categories/deleteCategory",
    async ( id, thunkAPI) => {
      try {
        const response = await axiosInstance.delete(
          `/categories/${id}`
        );
        return id;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || error.message
        );
      }
    }
  );
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        (state.loading = false), (state.categories = action.payload);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCategory.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(updateCategory.fulfilled,(state,action)=>{
        state.loading=false;
        state.categories=state.categories.map((category)=>
         category.id===action.payload.id?action.payload:category
        );
      })
      .addCase(updateCategory.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      })
      .addCase(deleteCategory.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(deleteCategory.fulfilled,(state,action)=>{
        state.loading=false;
        state.categories=state.categories.filter((category)=>category.id!==action.payload);
      })
      .addCase(deleteCategory.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      })
      ;
  },
});

export default categorySlice.reducer;
