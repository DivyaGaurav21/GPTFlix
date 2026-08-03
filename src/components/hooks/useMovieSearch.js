import { options } from "../constant";

const useMovieSearch = () => {
  const fetchMovie = async (queryMovie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${queryMovie}&include_adult=false&language=en-US&page=1`,
        options,
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
    }
  };
};

export default useMovieSearch;
