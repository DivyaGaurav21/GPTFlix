import useFetchMovie from "./useFetchMovie";
import { addHorrorMovie } from "../../utils/redux-slice/movieSlice";

const useHorrorMovie = () => {
  useFetchMovie(
    "https://api.themoviedb.org/3/discover/movie?with_genres=27&page=1",
    addHorrorMovie,
  );
};

export default useHorrorMovie;
