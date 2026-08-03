import useFetchMovie from "./useFetchMovie";
import { addNowPopularTvShow } from "../../utils/redux-slice/movieSlice";

const usePopularTvshow = () => {
  useFetchMovie(
    "https://api.themoviedb.org/3/tv/popular?page=1",
    addNowPopularTvShow,
  );
};

export default usePopularTvshow;
