import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTop } from '../api/reddit';

const initialState = {
  top: {},
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTopAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.top = { ...action.payload };
      });
  },
});

export default redditSlice.reducer;
