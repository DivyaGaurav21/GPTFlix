import { useEffect } from "react";
import { options } from "../constant";
import { useDispatch } from "react-redux";
import { addFavoriteMovie } from "../../utils/redux-slice/movieSlice";

const useFavoriteMovies = () => {
  const dispatch = useDispatch();


  const getFavoriteMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        options
      );

      const data = await response.json();

       dispatch(addFavoriteMovie(data.results || []));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFavoriteMovies();
  }, []);
};

export default useFavoriteMovies;