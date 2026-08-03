import useFetchMovie from "./useFetchMovie";
import { addFunnyMovie } from "../../utils/redux-slice/movieSlice";

const useFunnyMovie = () => {
  useFetchMovie(
    "https://api.themoviedb.org/3/discover/movie?with_genres=35&page=1",
    addFunnyMovie,
  );
};

export default useFunnyMovie;
