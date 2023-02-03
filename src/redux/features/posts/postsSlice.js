import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewPost, editPost, getAllPosts, removePost } from "./postsCrud";

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

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await addNewPost(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await editPost(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await removePost(payload);
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
    msg:null
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

    [createNewPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createNewPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.msg = "Post Added Succesfully"
    },
    [createNewPost.rejected]: (state, error) => {
      state.isLoading = false;
    },

    [updatePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.msg = "Post Updated Succesfully"
    },
    [updatePost.rejected]: (state, error) => {
      state.isLoading = false;
    },


    [deletePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.msg = "Post Deleted Succesfully"
    },
    [deletePost.rejected]: (state, error) => {
      state.isLoading = false;
    },
  },
});
export default postsSlice.reducer;
