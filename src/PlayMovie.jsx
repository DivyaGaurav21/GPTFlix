import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaArrowLeft } from "react-icons/fa";
import {
  IMG_CDN,
  BACKDROP_CDN,
  options as API_OPTIONS,
} from "./components/constant";
import Header from "./components/reusable/Header";
import OfferBanner from "./components/small/OfferBanner";
import Footer from "./components/reusable/Footer";
import MovieDetailsShimmer from "./components/reusable/ovieDetailsShimmer";

// Dummy demo video — swap with your actual hosted clip when ready
const DEMO_VIDEO_URL =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const PlayMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS,
    );
    if (!res.ok) throw new Error("Failed to fetch movie details");
    return res.json();
  };

  const fetchSimilarMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      API_OPTIONS,
    );
    if (!res.ok) throw new Error("Failed to fetch similar movies");
    return res.json();
  };

  useEffect(() => {
    let isCancelled = false;

    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [details, similar] = await Promise.all([
          fetchMovieDetails(),
          fetchSimilarMovies(),
        ]);

        if (!isCancelled) {
          setMovie(details);
          setSimilarMovies(similar?.results?.slice(0, 8) || []);
        }
      } catch (err) {
        if (!isCancelled) setError(err.message);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    loadData();

    return () => {
      isCancelled = true;
    };
  }, [movieId]);

  if (loading) {
    return <MovieDetailsShimmer />;
  }

  if (error || !movie) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-black text-white">
        <p>{error || "Movie not found."}</p>
        <button
          onClick={() => navigate(-1)}
          className="rounded-md bg-red-600 px-4 py-2 font-semibold hover:bg-red-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const {
    title,
    overview,
    vote_average,
    release_date,
    genres,
    poster_path,
    runtime,
  } = movie;

  const rating =
    typeof vote_average === "number" ? vote_average.toFixed(1) : "N/A";
  const year = release_date ? release_date.slice(0, 4) : "—";

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Back button */}
        <OfferBanner />
        <button
          onClick={() => navigate(-1)}
          className="fixed left-6 top-10 z-30 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm font-medium border border-white"
        >
          <FaArrowLeft /> Back
        </button>

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-20 lg:flex-row lg:px-8">
          {/* Main column: video + details */}
          <div className="flex-1">
            {/* Video player */}
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-neutral-900 shadow-lg shadow-black/50 ring-1 ring-white/10">
              <video
                key={movieId}
                src={DEMO_VIDEO_URL}
                controls
                autoPlay
                className="h-full w-full"
              />
            </div>

            {/* Movie details */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              {poster_path && (
                <img
                  src={`${IMG_CDN}${poster_path}`}
                  alt={title}
                  className="hidden h-52 w-36 flex-shrink-0 rounded-lg object-cover shadow-md sm:block"
                />
              )}

              <div>
                <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
                  <span className="flex items-center gap-1 font-semibold text-yellow-400">
                    <FaStar className="h-3.5 w-3.5" /> {rating}
                  </span>
                  <span>{year}</span>
                  {runtime > 0 && <span>{runtime} min</span>}
                  {genres?.length > 0 && (
                    <span>{genres.map((g) => g.name).join(", ")}</span>
                  )}
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
                  {overview || "No description available."}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar: similar movies */}
          <div className="w-full lg:w-80 lg:flex-shrink-0 max-h-screen overflow-y-scroll">
            <h2 className="mb-4 text-lg font-semibold">More Like This</h2>
            <div className="flex flex-col gap-3">
              {similarMovies.length === 0 && (
                <p className="text-sm text-neutral-500">
                  No similar movies found.
                </p>
              )}
              {similarMovies.map((m) => (
                <div
                  key={m.id}
                  onClick={() => navigate(`/play/${m.id}`)}
                  className="group flex cursor-pointer gap-3 rounded-lg p-2 transition-colors hover:bg-white/5"
                >
                  <div className="h-20 w-32 flex-shrink-0 overflow-hidden rounded-md bg-neutral-800">
                    {m.backdrop_path || m.poster_path ? (
                      <img
                        src={`${BACKDROP_CDN}${m.backdrop_path || m.poster_path}`}
                        alt={m.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[10px] text-neutral-500">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{m.title}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-yellow-400">
                      <FaStar className="h-2.5 w-2.5" />
                      {typeof m.vote_average === "number"
                        ? m.vote_average.toFixed(1)
                        : "N/A"}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-neutral-400">
                      {m.overview}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayMovie;
