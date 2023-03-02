import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../types';
import { getPosts, deletePost as deletePostApi } from '../api';

interface PostsState {
  posts: Post[];
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (limit: number) => {
    const response = await getPosts(limit);
    return response;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: number) => {
    await deletePostApi(id);
    return id;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.posts = [];
        state.error = action.error.message ?? 'Failed to fetch posts';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const id = action.payload;
        state.posts = state.posts.filter((post) => post.id !== id);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to delete post';
      });
  },
});

export const { addPost } = postsSlice.actions;

export const selectPosts = (state: { posts: PostsState }) => state.posts.posts;

export default postsSlice.reducer;
