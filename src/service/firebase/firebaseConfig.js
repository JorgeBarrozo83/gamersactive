import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBR73v4jyH07w5XjfoqFI6ZwbblJEEeRng",
  authDomain: "gamers-active.firebaseapp.com",
  projectId: "gamers-active",
  storageBucket: "gamers-active.appspot.com",
  messagingSenderId: "532804103689",
  appId: "1:532804103689:web:5e961f1fa10651d455d2d8",
  measurementId: "G-5SLGB0HS29"
};

const app =initializeApp(firebaseConfig);
export const db = getFirestore(app)