import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../reducers/redditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
  },
});
