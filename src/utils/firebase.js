// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJurrT-DytWjuC5Huyjurn2iY1BFQvzQ4",
  authDomain: "gptflix-b8662.firebaseapp.com",
  projectId: "gptflix-b8662",
  storageBucket: "gptflix-b8662.firebasestorage.app",
  messagingSenderId: "922249575525",
  appId: "1:922249575525:web:ecf85e9e464a8075821a8c",
  measurementId: "G-7RP3JQ5TT9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);