import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import userDataReducer from './userDataSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userDataReducer,
  },
});
