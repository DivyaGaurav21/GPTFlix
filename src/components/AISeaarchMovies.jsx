import React, { useEffect } from "react";
import { options } from "./constant";
import MovieCard from "./reusable/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addGPTSearchMovie } from "../utils/redux-slice/movieSlice";
import AIShimmer from "./reusable/AIShimmer";

const AISeaarchMovies = ({ moviesNames = [], title, loading }) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movie.gptSearchMovie);

  const fetchMovie = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movieName,
        )}&include_adult=false&language=en-US&page=1`,
        options,
      );

      const data = await response.json();
      // Return all matching movies
      return data.results || [];
    } catch (error) {
      console.error(`Error fetching "${movieName}"`, error);
      return [];
    }
  };

  useEffect(() => {
    if (!moviesNames.length) {
      dispatch(addGPTSearchMovie([]));
      return;
    }

    const fetchAllMovies = async () => {
      const uniqueMovies = [...new Set(moviesNames)];
      const moviePromises = uniqueMovies.map(fetchMovie);
      const results = await Promise.all(moviePromises);
      const allMovies = results.flat();
      dispatch(addGPTSearchMovie(allMovies));
    };

    fetchAllMovies();
  }, [moviesNames]);

  if (loading) {
    return <AIShimmer />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5 px-6 py-8">
      {movies &&
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} title={title} />
        ))}
    </div>
  );
};

export default AISeaarchMovies;
