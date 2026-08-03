import React, { useState } from "react";
import OfferBanner from "./components/small/OfferBanner";
import Header from "./components/reusable/Header";
import useFavoriteMovies from "./components/hooks/useFavoriteMovies";
import FavoriteMovie from "./components/FavoriteMovie";
import { useSelector } from "react-redux";
import BrowseHero from "./components/reusable/BrowseHero";
import Footer from "./components/reusable/Footer";
import OpenAiPage from "./OpenAiPage";

const Browse = () => {
  useFavoriteMovies();
  const favoriteMovies = useSelector((store) => store.movie.favoriteMovie);
  const [toggleAi, setToggleAi] = useState(false);

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
            <FavoriteMovie
              favoriteMovies={favoriteMovies || []}
              title="Popular Movies"
            />
            <FavoriteMovie
              favoriteMovies={favoriteMovies || []}
              title="Popular Movies"
            />
            <FavoriteMovie
              favoriteMovies={favoriteMovies || []}
              title="Popular Movies"
            />
            <FavoriteMovie
              favoriteMovies={favoriteMovies || []}
              title="Popular Movies"
            />
            <FavoriteMovie
              favoriteMovies={favoriteMovies || []}
              title="Popular Movies"
            />
            <FavoriteMovie
              favoriteMovies={favoriteMovies || []}
              title="Popular Movies"
            />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;
