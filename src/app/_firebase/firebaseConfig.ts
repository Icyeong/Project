import { initializeApp } from "firebase/app";
import { FIREBASE_API_KEY } from "@/_env/env";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "gallsta.firebaseapp.com",
  projectId: "gallsta",
  storageBucket: "gallsta.appspot.com",
  messagingSenderId: "446404048351",
  appId: "1:446404048351:web:1aa7466c24713d4dcc806a",
  measurementId: "G-XNWKZ5S0EW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
