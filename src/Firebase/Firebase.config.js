// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj4DfP1fZ6niD6DyuRkhR3ShcpT8BT3I8",
  authDomain: "dragon-news-7826a.firebaseapp.com",
  projectId: "dragon-news-7826a",
  storageBucket: "dragon-news-7826a.firebasestorage.app",
  messagingSenderId: "200501444407",
  appId: "1:200501444407:web:5868bede65293f5935e4b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)