const MovieDetailsShimmer = () => {
  return (
    <div className="min-h-screen bg-black px-5 py-6 text-white">
      {/* Back Button */}
      <div className="mb-5 h-12 w-28 animate-pulse rounded-full bg-neutral-800" />

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left */}
        <div className="flex-1">
          {/* Video */}
          <div className="aspect-video w-full animate-pulse rounded-2xl bg-neutral-800" />

          {/* Movie Info */}
          <div className="mt-6 flex gap-5">
            <div className="h-40 w-28 animate-pulse rounded-xl bg-neutral-800" />

            <div className="flex-1">
              <div className="mb-4 h-10 w-80 animate-pulse rounded bg-neutral-800" />

              <div className="mb-5 flex gap-4">
                <div className="h-5 w-14 animate-pulse rounded bg-neutral-800" />
                <div className="h-5 w-16 animate-pulse rounded bg-neutral-800" />
                <div className="h-5 w-20 animate-pulse rounded bg-neutral-800" />
                <div className="h-5 w-40 animate-pulse rounded bg-neutral-800" />
              </div>

              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-neutral-800" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-neutral-800" />
                <div className="h-4 w-10/12 animate-pulse rounded bg-neutral-800" />
                <div className="h-4 w-8/12 animate-pulse rounded bg-neutral-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-96">
          <div className="mb-5 h-10 w-52 animate-pulse rounded bg-neutral-800" />

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="mb-5 flex gap-4 rounded-xl p-2"
            >
              <div className="h-28 w-44 animate-pulse rounded-xl bg-neutral-800" />

              <div className="flex-1">
                <div className="mb-3 h-6 w-32 animate-pulse rounded bg-neutral-800" />

                <div className="mb-3 h-4 w-12 animate-pulse rounded bg-neutral-800" />

                <div className="space-y-2">
                  <div className="h-3 w-full animate-pulse rounded bg-neutral-800" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-neutral-800" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-neutral-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsShimmer;