import { createSlice } from '@reduxjs/toolkit';
import { MoviesState } from 'types/stateTypes';

const initialState: MoviesState = {
  searchMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchedMovies(state, action) {
      state.searchMovies = action.payload;
    },
  },
});

export const { setSearchedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
