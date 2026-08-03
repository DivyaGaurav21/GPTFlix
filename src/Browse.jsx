import React, { useState } from "react";
import OfferBanner from "./components/small/OfferBanner";
import Header from "./components/reusable/Header";
import FavoriteMovie from "./components/FavoriteMovie";
import BrowseHero from "./components/reusable/BrowseHero";
import Footer from "./components/reusable/Footer";
import OpenAiPage from "./OpenAiPage";
import useBrowseData from "./components/hooks/useBrowseData";


const Browse = () => {
  const {
    nowPlayingMovies,
    favoriteMovies,
    upcomingMovies,
    topRatedMovies,
    popularTvShows,
    funnyMovies,
    horrorMovies,
  } = useBrowseData();
  const [toggleAi, setToggleAi] = useState(false);
  const movieSections = [
    {
      title: "Now Playing Movies",
      movies: nowPlayingMovies,
    },
    {
      title: "Top Rated Movies",
      movies: topRatedMovies,
    },
    {
      title: "Popular Movies",
      movies: favoriteMovies,
    },
    {
      title: "Popular TV Shows",
      movies: popularTvShows,
    },
    {
      title: "Comedy Movies",
      movies: funnyMovies,
    },
    {
      title: "Horror Movies",
      movies: horrorMovies,
    },
    {
      title: "Upcoming Movies",
      movies: upcomingMovies,
    },
  ];

  return (
    <div>
      <OfferBanner />
      <Header setToggleAi={setToggleAi} toggleAi={toggleAi} />
      {toggleAi ? (
        <OpenAiPage />
      ) : (
        <>
          <BrowseHero
            eyebrow="GPTFLIX  FILM"
            title="The Last DeadShot"
            description="A stranded astronaut has ninety minutes of oxygen left, one working radio, and a signal from Earth that shouldn't exist. Now she has to decide who to trust before the air runs out."
            match="98% Match"
            ageRating="16+"
            year="2026"
            duration="2h 4m"
            youtubeSrc="https://youtu.be/Hn9t3wLS6cI?si=bI7Rnenb7A8FKuCZ"
            posterSrc="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1920&auto=format&fit=crop"
            onPlay={() => {}}
            onMoreInfo={() => {}}
          />
          <div className="bg-gradient-to-b from-black to-gptflix-black flex flex-col gap-2">
            {movieSections.map(({ title, movies }) => (
              <FavoriteMovie
                key={title}
                title={title}
                favoriteMovies={movies || []}
              />
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;
