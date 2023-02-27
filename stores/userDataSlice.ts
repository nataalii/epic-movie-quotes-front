import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  id: '',
  image: '',
  google_id: '',
};

const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.image = action.payload.thumbnail;
      state.google_id = action.payload.google_id;
    },
  },
});
export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
