import { configureStore } from '@reduxjs/toolkit';
import { RootState } from 'types/stateTypes';
import modalReducer from './modalSlice';
import userDataReducer from './userDataSlice';

export const store = configureStore<RootState>({
  reducer: {
    modal: modalReducer,
    user: userDataReducer,
  },
});
