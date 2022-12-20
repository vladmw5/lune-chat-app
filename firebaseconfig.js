// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg06PSdxvu9tK8wYV3Qoy35xPpS2DYMhg",
  authDomain: "lune-chat-app.firebaseapp.com",
  projectId: "lune-chat-app",
  storageBucket: "lune-chat-app.appspot.com",
  messagingSenderId: "1023908046406",
  appId: "1:1023908046406:web:7835fefc97ab0a6ebf4c47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });

export { auth, db };
