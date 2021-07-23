/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTop } from '../api/reddit';

const initialState = {
  rawData: {},
  entries: [],
  isLoading: false,
};

export const fetchTopAsync = createAsyncThunk(
  'reddit/fetchTop',
  async (params) => {
    const response = await fetchTop(params);
    return response.data;
  }
);

export const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    removePost: (state, action) => {
      const { entryPos } = action.payload;
      state.entries[entryPos].visible = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTopAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rawData = { ...action.payload };
        state.entries = action.payload.children.map((entry) => ({
          ...entry,
          visible: true,
        }));
      });
  },
});

export const { removePost } = redditSlice.actions;

export default redditSlice.reducer;
