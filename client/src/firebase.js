// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const apiKey =  import.meta.env.VITE_FIREBASE_API_KEY 
const firebaseConfig = {
  apiKey,
  authDomain: "nigeria-immigration.firebaseapp.com",
  projectId: "nigeria-immigration",
  storageBucket: "nigeria-immigration.firebasestorage.app",
  messagingSenderId: "43910955073",
  appId: "1:43910955073:web:22396267087336022dc6c0",
  measurementId: "G-9FYLM84059",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
