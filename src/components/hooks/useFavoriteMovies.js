import useFetchMovie from "./useFetchMovie";
import { addFavoriteMovie } from "../../utils/redux-slice/movieSlice";

const useFavoriteMovie = () => {
  useFetchMovie(
    "https://api.themoviedb.org/3/movie/popular?page=1",
    addFavoriteMovie
  );
};

export default useFavoriteMovie;