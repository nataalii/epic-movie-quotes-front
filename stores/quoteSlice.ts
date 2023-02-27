import { createSlice } from '@reduxjs/toolkit';
import { QuotesState } from 'types/stateTypes';

const initialState: QuotesState = {
  searchQuotes: [],
};

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setSearchedQuote(state, action) {
      state.searchQuotes = action.payload;
    },
  },
});

export const { setSearchedQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
