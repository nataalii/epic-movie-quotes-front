import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviesState {
  searchMovies: any[];
}

const initialState: MoviesState = {
  searchMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchedMovies(state, action: PayloadAction<any[]>) {
      state.searchMovies = action.payload;
    },
  },
});

export const { setSearchedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
