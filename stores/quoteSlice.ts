import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuoteState {
  searchQuotes: any[];
}

const initialState: QuoteState = {
  searchQuotes: [],
};

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setSearchedQuote(state, action: PayloadAction<any[]>) {
      state.searchQuotes = action.payload;
    },
  },
});

export const { setSearchedQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
