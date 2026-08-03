import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-slice/userSlice";
import movieReducer from "./redux-slice/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;