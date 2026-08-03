const AIShimmer = () => {
  return (
    <div className="px-6 py-8">
      <div className="h-8 w-56 rounded-md bg-zinc-800 animate-pulse mb-6" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg bg-zinc-900">
            {/* Poster */}
            <div className="h-56 w-full bg-zinc-800 animate-pulse" />

            {/* Content */}
            <div className="p-3 space-y-2">
              <div className="h-2 w-3/4 min-w-32 rounded bg-zinc-800 animate-pulse" />

              <div className="flex justify-between">
                <div className="h-1 w-12 rounded bg-zinc-800 animate-pulse" />
                <div className="h-1 w-10 rounded bg-zinc-800 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIShimmer;
