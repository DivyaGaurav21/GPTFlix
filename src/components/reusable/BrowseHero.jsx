import React, { useState, useMemo, useRef, useEffect } from "react";
import { Play, Info, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { getYouTubeId } from "../../utils/getVideoId";

function BrowseHero({
  eyebrow,
  title,
  description,
  match,
  ageRating,
  year,
  duration,
  youtubeSrc,
  posterSrc,
  onPlay,
  onMoreInfo,
}) {
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  const videoId = useMemo(() => getYouTubeId(youtubeSrc), [youtubeSrc]);

  useEffect(() => {
    if (!videoId) return;

    let cancelled = false;

    function createPlayer() {
      if (cancelled || !iframeRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: () => setLoaded(true),
        },
      });
    }

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prevCallback?.();
        createPlayer();
      };
    }

    return () => {
      cancelled = true;
    };
  }, [videoId]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player?.mute) return;
    muted ? player.mute() : player.unMute();
  }, [muted, loaded]);

  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&enablejsapi=1&disablekb=1`
    : null;

  return (
    <section className="relative w-full h-[56vw] min-h-[520px] max-h-[900px] overflow-hidden bg-black text-white">
      {/* Background video */}
      <div className="absolute inset-0">
        {embedUrl ? (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              ref={iframeRef}
              className={`absolute top-1/2 left-1/2 h-[56.25vw] min-h-[178%] w-[178vh] min-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              src={embedUrl}
              title={title}
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
            <div className="absolute inset-0" />
          </div>
        ) : null}
        <img
          src={posterSrc}
          alt="poster_src"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent sm:from-black/70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />

      <button
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="group absolute bottom-8 right-4 sm:right-8 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 backdrop-blur-sm transition hover:border-white hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {muted ? (
          <VolumeX className="h-5 w-5 text-white" />
        ) : (
          <Volume2 className="h-5 w-5 text-white" />
        )}
      </button>

      <div className="absolute bottom-8 right-20 sm:right-24 z-20 hidden sm:flex items-center border-l-4 border-neutral-400 bg-neutral-900/70 pl-2 pr-3 py-1 text-xs font-medium tracking-wide text-neutral-200 backdrop-blur-sm">
        {ageRating}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-end sm:items-center">
        <div className="w-full px-4 pb-20 sm:px-8 sm:pb-0 md:px-14">
          <div className="max-w-xl md:max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-2 text-[13px] font-bold tracking-[0.2em] text-neutral-200 sm:text-sm">
              <span className="text-red-600">GF</span>
              <span className="border-l border-neutral-500 pl-2">
                {eyebrow.replace(/^N\s*/, "")}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] text-4xl sm:text-3xl md:text-5xl">
              {title}
            </h1>

            {/* Meta row */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold sm:text-base">
              <span className="text-green-500">{match}</span>
              <span className="text-neutral-300">{year}</span>
              <span className="rounded border border-neutral-500 px-1.5 py-0.5 text-xs text-neutral-300">
                {ageRating}
              </span>
              <span className="text-neutral-300">{duration}</span>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-200 line-clamp-3 sm:text-base md:text-lg">
              {description}
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onPlay}
                className="flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-base font-bold text-black transition hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-8 sm:py-3"
              >
                <Play className="h-6 w-6 fill-black" />
                Play
              </button>
              <button
                onClick={onMoreInfo}
                className="flex items-center gap-2 rounded-md bg-neutral-500/40 px-6 py-2.5 text-base font-bold text-white backdrop-blur-md transition hover:bg-neutral-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-8 sm:py-3"
              >
                <Info className="h-6 w-6" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-neutral-400 sm:flex">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}

export default BrowseHero;
