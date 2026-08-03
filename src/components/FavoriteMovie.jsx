import MovieSlider from "./reusable/MovieSlider";

const FavoriteMovie = ({ favoriteMovies , title }) => {
  return <MovieSlider title={title} movies={favoriteMovies} />;
};

export default FavoriteMovie;
