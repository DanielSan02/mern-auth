// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "mern-auth-d5dcf.firebaseapp.com",
  projectId: "mern-auth-d5dcf",
  storageBucket: "mern-auth-d5dcf.appspot.com",
  messagingSenderId: "974848421092",
  appId: "1:974848421092:web:8073fea75d7ee7c4f190f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);