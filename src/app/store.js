import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import redditReducer from '../reducers/redditSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    reddit: redditReducer,
  },
});
