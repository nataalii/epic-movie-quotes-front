import { configureStore } from '@reduxjs/toolkit';
import { RootState } from 'types/stateTypes';
import modalReducer from './modalSlice';
import userDataReducer from './userDataSlice';
import moviesReducer from './movieSlice';
import quotesReducer from './quoteSlice';

export const store = configureStore<RootState>({
  reducer: {
    modal: modalReducer,
    user: userDataReducer,
    movies: moviesReducer,
    quotes: quotesReducer,
  },
});
