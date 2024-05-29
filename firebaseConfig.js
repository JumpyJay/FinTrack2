import * as firebase from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6qwkxafuYjQFm9IgPJHDZY0RWdcCwT8E",
  authDomain: "fintrack-342f6.firebaseapp.com",
  projectId: "fintrack-342f6",
  storageBucket: "fintrack-342f6.appspot.com",
  messagingSenderId: "97294871316",
  appId: "1:97294871316:web:3a8eda4bf69f0422493001",
  measurementId: "G-4TMND881RZ"
};

let app;
if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const analytics = firebase.getAnalytics(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const auth = firebase.auth();

export { auth };
