// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCWvZF1EFEtPtv4jQxpBhxMLTA3y3aAxM",
  authDomain: "flashcard-saas-3ac55.firebaseapp.com",
  projectId: "flashcard-saas-3ac55",
  storageBucket: "flashcard-saas-3ac55.appspot.com",
  messagingSenderId: "574162334339",
  appId: "1:574162334339:web:b46480b05c0c39567361b6",
  measurementId: "G-TNK6HWY965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;