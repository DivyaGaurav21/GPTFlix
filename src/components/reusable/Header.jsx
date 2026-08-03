import { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Header = ({ setToggleAi, toggleAi }) => {
  const [showPopup, setShowPopup] = useState(false);

  const user = useSelector((store) => store.user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="absolute top-6 left-0 z-50 w-full bg-transparent max-h-[80px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="GPTFlix Logo"
          className="h-16 md:h-24 cursor-pointer p-0"
        />

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-white md:flex">
          <a href="/" className="transition hover:text-gray-300">
            Home
          </a>
          <a href="/" className="transition hover:text-gray-300">
            Movies
          </a>
          <a href="/" className="transition hover:text-gray-300">
            TV Shows
          </a>
          <a href="/" className="transition hover:text-gray-300">
            My List
          </a>
        </nav>

        <div className="flex flex-row gap-2">
          <button
          onClick={() => setToggleAi((prev) => !prev)}
          className="group relative overflow-hidden rounded-xl p-2 font-semibold text-white"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500"></span>
          <span className="absolute inset-0 rounded-xl blur-md bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 opacity-40"></span>
          <span className="relative flex items-center gap-1">
            {toggleAi ? (
              <>
                🏠<span>Home</span>
              </>
            ) : (
              <>
                ✨<span>AI Assist</span>
              </>
            )}
          </span>
        </button>
        {user?.email && (
          <div className="relative">
            <div
              onClick={() => setShowPopup(!showPopup)}
              className="flex cursor-pointer items-center gap-3"
            >
              <img
                src={
                  user.photoURL ||
                  "https://ui-avatars.com/api/?name=User&background=E50914&color=fff"
                }
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-white"
              />

              <span className="hidden text-sm text-white md:block">
                {user.name}
              </span>
            </div>

            {showPopup && (
              <div className="absolute right-0 mt-4 w-64 rounded-md bg-black/90 p-4 text-white shadow-lg">
                <p className="font-semibold">{user.name || "GPTFlix User"}</p>

                <p className="mt-1 break-all text-sm text-gray-400">
                  {user.email}
                </p>

                <button
                  onClick={handleLogout}
                  className="mt-4 w-full rounded bg-red-600 py-2 hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;
