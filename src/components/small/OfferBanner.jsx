import { useState } from "react";
import { FaGift, FaXmark } from "react-icons/fa6";

const OfferBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="absolute top-0 z-30 flex w-full items-center justify-center gap-3 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 py-1">
      <FaGift className="text-2xl text-white" />

      <p className="font-semibold text-white text-xs">
        New to GPTFlix? Try 7 days for ₹0.
      </p>

      <button
        onClick={() => setShowBanner(false)}
        className="absolute right-4 rounded-full p-1 text-white transition hover:bg-white/20"
      >
        <FaXmark className="text-lg" />
      </button>
    </div>
  );
};

export default OfferBanner;