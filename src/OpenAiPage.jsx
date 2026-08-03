import React, { useState } from "react";
import { ai } from "./utils/openai"; 

const OpenAiPage = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const prompt = `
You are a movie recommendation system.
Based on the user query: "${query}"
Recommend exactly 5 movies.
Rules:
- Return ONLY movie names.
- Comma separated.
- No numbering.
- No explanation.
- No extra text.
Example:
Interstellar, Inception, Arrival, The Martian, Gravity
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      const text = response.text;

      const movieList = text
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean);

      setMovies(movieList);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/bannerImg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-5 pt-28">
        <h1 className="mb-4 text-center text-5xl font-bold text-white">
          GPTFlix AI
        </h1>

        <p className="mb-4 text-center text-lg text-gray-300">
          Discover your next favorite movie with Gemini AI
        </p>

        <div className="flex w-full max-w-3xl overflow-hidden rounded-md bg-black/70 shadow-2xl">
          <input
            type="text"
            placeholder="What do you want to watch today?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent px-5 py-2 text-white outline-none placeholder:text-gray-400 border border-gray-700"
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-red-600 px-8 font-semibold text-white transition hover:bg-red-700 disabled:bg-gray-500"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {movies.length > 0 && (
          <div className="mt-5 w-full max-w-3xl rounded-md bg-black/60 p-6">
            <h2 className="mb-4 text-xl font-semibold text-white">
              AI Recommended Movies
            </h2>

            <div className="flex flex-wrap gap-3">
              {movies.map((movie, index) => (
                <span
                  key={index}
                  className="rounded-full bg-red-600 px-4 py-2 text-sm text-white"
                >
                  {movie}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenAiPage;