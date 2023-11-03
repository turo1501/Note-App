 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdEv0wceDK2zFlH0Cv0dN6YslAWpbAYXY",
  authDomain: "note-app-turo.firebaseapp.com",
  projectId: "note-app-turo",
  storageBucket: "note-app-turo.appspot.com",
  messagingSenderId: "607793040488",
  appId: "1:607793040488:web:e1b4e51ba922dcf723bfdd",
  measurementId: "G-ELK8FHVJM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);