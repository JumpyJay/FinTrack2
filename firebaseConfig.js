// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
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
// Initialize Firebase Auth with AsyncStorage for persistence
export const FINTRACK_AUTH = initializeAuth(FINTRACK_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const FINTRACK_DB = getFirestore(FINTRACK_APP);

export const transactionsRef = collection(FINTRACK_DB, 'transactions');
export const leaderboardRef = collection(FINTRACK_DB, 'leaderboard');
export const budgetRef = collection(FINTRACK_DB, 'budget');
// const analytics = getAnalytics(FINTRACK_APP);