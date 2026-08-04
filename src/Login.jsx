import React, { useState } from "react";
import OfferBanner from "./components/small/OfferBanner";
import { validateForm } from "./utils/validateform";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  reload,
} from "firebase/auth";

import { auth } from "./utils/firebase";
import Footer from "./components/reusable/Footer";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [firebaseError, setFirebaseError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFirebaseError("");

    if (!validateForm(formData, isSignUp, setError)) return;
    console.log(formData);
    try {
      if (isSignUp) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password,
        );

        console.log("Sign In Data:", userCredential);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password,
        );

        await updateProfile(userCredential.user, {
          displayName: formData.name,
          photoURL: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
        });

        await reload(userCredential.user);
        console.log("Sign Up Data:", userCredential);
      }
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          setFirebaseError("Invalid email or password.");
          break;

        case "auth/email-already-in-use":
          setFirebaseError("This email is already registered.");
          break;

        case "auth/user-not-found":
          setFirebaseError("User not found.");
          break;

        case "auth/wrong-password":
          setFirebaseError("Incorrect password.");
          break;

        case "auth/invalid-email":
          setFirebaseError("Invalid email address.");
          break;

        case "auth/weak-password":
          setFirebaseError("Password should be at least 6 characters.");
          break;

        case "auth/too-many-requests":
          setFirebaseError("Too many attempts. Please try again later.");
          break;

        default:
          setFirebaseError(err.message);
      }
    }
  };

  return (
    <>
      <OfferBanner />

      <div
         className="relative h-[70vh] lg:h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/bannerImg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Logo */}
        <div className="relative z-20 px-10 pt-6">
          <img src="/logo.png" alt="GPTFlix Logo" className="h-16 lg:h-24" />
        </div>

        {/* Form */}
        <div className="relative z-20 flex justify-center px-4">
          <div className="w-full max-w-sm rounded-md bg-black/75 px-8 py-6">
            <h1 className="mb-6 text-2xl font-bold text-white">
              {isSignUp ? "Sign In" : "Sign Up"}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-2">
              {!isSignUp && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-600 bg-gray-800/80 px-4 py-2 text-sm text-white outline-none"
                  />
                  {error?.nameErr && <p className="error">{error.nameErr}</p>}
                </>
              )}

              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-800/80 px-4 py-2 text-sm text-white outline-none"
                />
                {error?.emailError && (
                  <p className="error">{error.emailError}</p>
                )}
              </>

              <>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-800/80 px-4 py-2 text-sm text-white outline-none"
                />
                {error?.passwordError && (
                  <p className="error">{error.passwordError}</p>
                )}
              </>
              <button
                type="submit"
                className="w-full rounded-md bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
              {firebaseError && <p className="error">{firebaseError}</p>}

              {isSignUp && (
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button type="button" className="hover:underline">
                    Need help?
                  </button>
                </div>
              )}
            </form>

            <div className="mt-6">
              <p className="text-sm text-gray-400">
                {isSignUp ? "New to GPTFlix?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="font-semibold text-white hover:underline"
                >
                  {isSignUp ? "Sign up now" : "Sign In"}
                </button>
              </p>

              <p className="mt-3 text-[11px] leading-5 text-gray-500">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
