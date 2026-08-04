import { FaStar, FaPlay } from "react-icons/fa";
import { IMG_CDN } from "../constant";
import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }) => {
  const { id ,title, poster_path, vote_average, release_date } = movie || {};
  const rating = typeof vote_average === "number" ? vote_average.toFixed(1) : "N/A";
  const year = release_date ? release_date.slice(0, 4) : null;
  const navigate = useNavigate();

  const handleMovieClick = () => {
     navigate(`/play/${id}`);
  };

  return (
    <div 
    className="group relative w-full cursor-pointer select-none"
     onClick={handleMovieClick}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-neutral-900 shadow-md shadow-black/40 ring-1 ring-white/5 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-black/60 group-hover:ring-white/10">
        {poster_path ? (
          <img
            src={`${IMG_CDN}${poster_path}`}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-xs text-neutral-500">
            No image
          </div>
        )}

        {/* gradient scrim, always faintly present for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />

        {/* rating badge */}
        <span
          className="absolute right-2 top-2 flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold text-yellow-400 border-yellow-400/40 bg-gray-600"
        >
          <FaStar className="h-2.5 w-2.5" />
          {rating}
        </span>
        {/* play affordance, appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-300 scale-75 group-hover:scale-100">
            <FaPlay className="ml-0.5 h-4 w-4" />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-3">
          {year && <p className="mt-0.5 text-xs text-white font-semibold">{year}</p>}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;