import useFetchMovie from "./useFetchMovie";
import { addNowPlayingMovie } from "../../utils/redux-slice/movieSlice";

const useNowPlayingMovie = () => {
  useFetchMovie(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    addNowPlayingMovie,
  );
};

export default useNowPlayingMovie;
