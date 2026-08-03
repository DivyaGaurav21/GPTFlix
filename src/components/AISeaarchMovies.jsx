import React, { useEffect, useState } from "react";
import { options } from "./constant";
import MovieSlider from "./reusable/MovieSlider";
import MovieCard from "./reusable/MovieCard";

const AISeaarchMovies = ({ moviesNames = [], title }) => {
  const [movies, setMovies] = useState([]);

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
      setMovies([]);
      return;
    }

    const fetchAllMovies = async () => {
      const uniqueMovies = [...new Set(moviesNames)];
      const moviePromises = uniqueMovies.map(fetchMovie);
      const results = await Promise.all(moviePromises);
      const allMovies = results.flat();

      setMovies(allMovies);
    };

    fetchAllMovies();
  }, [moviesNames]);

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} small />
        ))}
      </div>
    </div>
  );
};

export default AISeaarchMovies;
