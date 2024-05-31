// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6qwkxafuYjQFm9IgPJHDZY0RWdcCwT8E",
  authDomain: "fintrack-342f6.firebaseapp.com",
  projectId: "fintrack-342f6",
  storageBucket: "fintrack-342f6.appspot.com",
  messagingSenderId: "97294871316",
  appId: "1:97294871316:web:3a8eda4bf69f0422493001",
  measurementId: "G-4TMND881RZ"
};

// Initialize Firebase
export const FINTRACK_APP = initializeApp(firebaseConfig);
export const FINTRACK_AUTH = getAuth(FINTRACK_APP);
export const FINTRACK_DB = getFirestore(FINTRACK_APP);
const analytics = getAnalytics(FINTRACK_APP);