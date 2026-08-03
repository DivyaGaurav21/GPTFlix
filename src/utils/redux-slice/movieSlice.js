import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 favoriteMovie: []
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.favoriteMovie = action.payload;
    },

  
  },
});

export const {addFavoriteMovie } = movieSlice.actions;

export default movieSlice.reducer;