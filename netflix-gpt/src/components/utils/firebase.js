// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl1JK09TJY-OlWQjNKhe52w2VwJbt9W0E",
  authDomain: "netflixgpt-bffe0.firebaseapp.com",
  projectId: "netflixgpt-bffe0",
  storageBucket: "netflixgpt-bffe0.appspot.com",
  messagingSenderId: "689677186928",
  appId: "1:689677186928:web:f7be529c1bc3962f12c1b5",
  measurementId: "G-EP3B9EY3FQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
