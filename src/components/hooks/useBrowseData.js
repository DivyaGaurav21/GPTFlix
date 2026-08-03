import { useSelector } from "react-redux";
import {
  useFavoriteMovie,
  useNowPlayingMovie,
  useTopRatedMovie,
  useUpcomingMovie,
    usePopularTvshow,
  useFunnyMovie,
  useHorrorMovie,
} from "./index";


const useBrowseData = () => {
  // Fetch APIs
  useNowPlayingMovie();
  useFavoriteMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  usePopularTvshow();
  useFunnyMovie();
  useHorrorMovie();

  // Redux State
  return useSelector((store) => ({
    nowPlayingMovies: store.movie.nowPlayingMovie,
    favoriteMovies: store.movie.favoriteMovie,
    topRatedMovies: store.movie.topRatedMovie,
    upcomingMovies: store.movie.upcomingMovie,
    popularTvShows: store.movie.popularTvShow,
    funnyMovies: store.movie.funnyMovie,
    horrorMovies: store.movie.horrorMovie,
  }));
};

export default useBrowseData;