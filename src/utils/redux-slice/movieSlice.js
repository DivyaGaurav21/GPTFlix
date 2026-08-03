import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovie: [],
  topRatedMovie: [],
  upcomingMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.favoriteMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
  },
});

export const { addFavoriteMovie, addTopRatedMovie, addUpcomingMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
