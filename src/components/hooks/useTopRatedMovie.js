import useFetchMovie from "./useFetchMovie";
import { addTopRatedMovie } from "../../utils/redux-slice/movieSlice";

const useTopRatedMovie = () => {
  useFetchMovie(
    "https://api.themoviedb.org/3/movie/top_rated?page=1",
    addTopRatedMovie,
  );
};

export default useTopRatedMovie;
