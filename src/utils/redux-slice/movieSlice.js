import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovie: [],
  topRatedMovie: [],
  upcomingMovie: [],
  nowPlayingMovie: [],
  popularTvShow: [],
  funnyMovie:[],
  horrorMovie:[],
  gptSearchMovie:[]
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
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addNowPopularTvShow: (state, action) => {
      state.popularTvShow = action.payload;
    },
    addFunnyMovie: (state, action) => {
      state.funnyMovie = action.payload;
    },
    addHorrorMovie: (state, action) => {
      state.horrorMovie = action.payload;
    },
    addGPTSearchMovie: (state, action) => {
      state.gptSearchMovie = action.payload;
    },
  },
});

export const {
  addFavoriteMovie,
  addTopRatedMovie,
  addUpcomingMovie,
  addNowPlayingMovie,
  addNowPopularTvShow,
  addFunnyMovie,
  addHorrorMovie,
  addGPTSearchMovie
} = movieSlice.actions;

export default movieSlice.reducer;
