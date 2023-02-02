import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./postsCrud";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await getAllPosts();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    user: {},
    posts: [],
    isLoading: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchAllPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchAllPosts.rejected]: (state, error) => {
      state.isLoading = false;
    },
  },
});
export default postsSlice.reducer;
