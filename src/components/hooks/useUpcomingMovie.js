import useFetchMovie from "./useFetchMovie";
import { addUpcomingMovie } from "../../utils/redux-slice/movieSlice";

const useUpcomingMovie = () => {
  useFetchMovie(
    "https://api.themoviedb.org/3/movie/upcoming?page=1",
    addUpcomingMovie
  );
};

export default useUpcomingMovie;