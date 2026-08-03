import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  name: null,
  email: null,
  photoURL:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },

    removeUser: () => {
      return initialState;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;