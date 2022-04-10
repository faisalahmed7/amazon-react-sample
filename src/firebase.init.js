// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg5v4rLEs3ehLlxNaNHToY0gRAY59x1cE",
  authDomain: "react-firebase-f3e51.firebaseapp.com",
  projectId: "react-firebase-f3e51",
  storageBucket: "react-firebase-f3e51.appspot.com",
  messagingSenderId: "269073841347",
  appId: "1:269073841347:web:53a82dd3ce6e955bf93676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;