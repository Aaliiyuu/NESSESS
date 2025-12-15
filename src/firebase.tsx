// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMqr7Xq97-z7_SY7OlAV5m4p_RGNE20NQ",
  authDomain: "ness-a8630.firebaseapp.com",
  projectId: "ness-a8630",
  storageBucket: "ness-a8630.firebasestorage.app",
  messagingSenderId: "875723846895",
  appId: "1:875723846895:web:b619fde2f52a6df772971a",
  measurementId: "G-8L5HL69EV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };