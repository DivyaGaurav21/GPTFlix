import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "./MovieCard";

const MovieSlider = ({ title, movies }) => {
  return (
    <section className="mb-8 pl-4 md:pl-8 xl:pl-14">
      <h2 className="mb-4 text-2xl font-bold text-white">
        {title}
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={18}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MovieSlider;