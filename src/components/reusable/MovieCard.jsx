import { IMG_CDN } from "../constant";

const MovieCard = ({ movie }) => {
  return (
    <div className="group cursor-pointer transition duration-300 hover:scale-110">
      <img
        src={`${IMG_CDN}${movie.poster_path}`}
        alt={movie.title}
        className="h-72 w-full rounded-md object-cover shadow-lg"
      />

      <h3 className="mt-2 truncate text-sm font-semibold text-white">
        {movie.title}
      </h3>

      <p className="text-xs text-gray-400">
        ⭐ {movie.vote_average.toFixed(1)}
      </p>
    </div>
  );
};

export default MovieCard;